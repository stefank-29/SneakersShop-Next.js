import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { maleSizes, sneakers, femaleSizes, SneakersStyles } from '../sneakers';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Card from '../../components/Card';
import { items } from '../../components/Navigation';

const SneakerStyles = styled.div`
    margin: 3rem auto;
    background-color: rgba(255, 255, 255, 0.9);
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 3rem;
    .top {
        position: relative;
        display: flex;
        align-items: flex-start;
        .image {
            position: relative;
            width: 60%;
            height: 65rem;
            border-top-left-radius: 10px;
            overflow: hidden;
            /* img {
            height: auto;
            width: 100%;
            border-top-left-radius: 10px;
        } */
            box-shadow: 0 0 7px rgba(0, 0, 0, 0.1),
                0 3px 7px rgba(0, 0, 0, 0.05);
        }
        .details {
            position: relative;
            width: 45%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            h1 {
                font-size: 3rem;
                font-weight: 600;
                font-family: 'Avenir', sans-serif;
                padding: 0;
                margin: 0;
                &::after {
                    content: '';
                    display: block;
                    margin-left: auto;
                    margin-top: 1.4rem;
                    height: 1px;
                    width: 15rem;
                    background-color: rgba(0, 0, 0, 0.65);
                }
            }
            .choose__size {
                font-size: 1.7rem;
                font-family: 'Roboto', sans-serif;
                margin-bottom: 1rem;
            }
        }
        .price {
            p {
                font-size: 2rem;
                font-weight: 500;
                font-family: 'Lato', sans-serif;
            }
        }
        .edit {
            position: absolute;
            left: 2rem;
            img {
                width: 35px;
            }
        }
        .sizes {
            margin-top: 0rem;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            width: 50%;
            .size {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0.7rem 0.2rem;
                padding: 1.4rem 1.2rem;
                background-color: rgba(255, 255, 235, 0.9);
                border: 1px solid rgba(0, 0, 0, 0.7);
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: bold;
                font-family: 'Lato', sans-serif;
                transition: 0.3s all;
                &:not(.out_of_stock):hover {
                    color: white;
                    background-color: rgba(20, 89, 121, 0.8);
                }
                &.selected {
                    color: white;
                    background-color: rgba(20, 89, 121, 0.8);
                }
                &.out_of_stock {
                    opacity: 0.3;
                    cursor: default;
                }
            }
        }
    }
`;

const SimilarProductsStyles = styled.div`
    position: relative;
    .label {
        font-size: 2.2rem;
        text-align: center;
        margin: 4rem auto;
    }
    .similar-cards {
        width: 90%;
        margin: 0 auto 5rem;
        > * {
            margin: 0 1rem;
        }
    }
`;

const AddButtonStyles = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 1.2rem 1rem 1.2rem 3rem;
    font-size: 2rem;
    font-family: 'Avenir', sans-serif;
    color: white;
    background: dodgerblue;
    background-size: 200% auto;
    border: none;
    border-radius: 5px;
    transition: 0.7s;
    box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
    &.added {
        &::after {
            content: '✔';
        }
    }
    ::after {
        content: '➡';
        opacity: 0;
        margin-left: 1rem;
        transition: 0.5s;
    }
    :hover {
        background-position: right center;
        ::after {
            opacity: 1;
            padding-right: 0.8rem;
        }
    }
`;

const similarSnickers = sneakers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, 4);

export default function Sneaker() {
    const { query } = useRouter();
    const addBtnRef = useRef();
    const [addedClass, setAddedClass] = useState('');

    const sneakerId = query.id;
    const sneaker = sneakers.find((sneaker) => sneaker._id.$oid == sneakerId);

    const sizes = sneaker?.gender === 'male' ? maleSizes : femaleSizes;

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [buttonText, setButtonText] = useState('Add to cart');

    function sizeClass(size, index) {
        return `
            ${selectedIndex === index ? 'selected' : ''}
            ${size.quantity <= 0 ? 'out_of_stock' : ''}
            `;
    }

    function selectSize(size, index) {
        if (size.quantity <= 0) {
            // out of stock
            return;
        }

        if (selectedSize === null) {
            setButtonText('Add to cart');
        }

        setSelectedSize(sizes[index]);
        setSelectedIndex(index);
    }

    function toggleButton() {
        setButtonText('Added to cart');
        setAddedClass('added');
        setTimeout(() => {
            setAddedClass('');
            setButtonText('Add to cart');
        }, 2000);
    }

    function addProductToCart(sneaker) {
        items.push(sneaker);
        localStorage.setItem('items', JSON.stringify(items));
    }

    function addToCart(e) {
        if (selectedSize === null) {
            setButtonText('Choose size');
            return;
        }
        if (sizes[selectedIndex].quantity === 0) {
            return;
        }

        const payload = { product: sneaker, size: { ...selectedSize } };
        addProductToCart(payload);
        toggleButton();
    }

    return (
        <SneakerStyles>
            <div className="top">
                <div className="image">
                    <Image
                        src={`/uploads/${sneaker?.photo}`}
                        alt="sneaker photo"
                        layout="fill"
                        objectFit="fill"
                    />
                </div>
                <div className="details">
                    <div className="name">
                        <h1>{sneaker?.name}</h1>
                    </div>
                    <div className="price">
                        <p>{sneaker?.price} $</p>
                    </div>
                    {selectedSize ? (
                        <p className="choose__size">
                            Choose size: {selectedSize.number}
                        </p>
                    ) : (
                        <p className="choose__size">Choose size:</p>
                    )}
                    <div className="sizes">
                        {sizes.map((size, index) => (
                            <div
                                className={`size ${sizeClass(size, index)}`}
                                key={index}
                                onClick={() => selectSize(size, index)}
                                title={
                                    size.quantity > 0
                                        ? `Size: ${size.number}`
                                        : `Out of stock`
                                }
                            >
                                <span>{size.number}</span>
                            </div>
                        ))}
                    </div>
                    <AddButtonStyles
                        className={`addToCart ${addedClass}`}
                        onClick={addToCart}
                        ref={addBtnRef}
                    >
                        {buttonText}
                    </AddButtonStyles>
                </div>
            </div>
            <SimilarProductsStyles>
                <p className="label">Similar products</p>
                <SneakersStyles className="similar-cards">
                    {similarSnickers.map((sneaker) => (
                        <Card key={sneaker._id.$oid} sneaker={sneaker} />
                    ))}
                </SneakersStyles>
            </SimilarProductsStyles>
        </SneakerStyles>
    );
}
