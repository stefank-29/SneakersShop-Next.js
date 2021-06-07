import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { maleSizes, sneakers, femaleSizes } from '../sneakers';
import Image from 'next/image';
import { useState } from 'react';

const SneakerStyles = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    margin: 3rem auto;
    background-color: rgba(255, 255, 255, 0.9);
    height: 70rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
    .image {
        position: relative;
        width: 60%;
        height: 60rem;
        border-top-left-radius: 10px;
        overflow: hidden;
        /* img {
            height: auto;
            width: 100%;
            border-top-left-radius: 10px;
        } */
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.05);
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
`;

export default function Sneaker() {
    const { query } = useRouter();
    const sneakerId = query.id;
    const sneaker = sneakers.find((sneaker) => sneaker._id.$oid == sneakerId);

    const sizes = sneaker?.gender === 'male' ? maleSizes : femaleSizes;

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

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

        setSelectedSize(sizes[index]);
        setSelectedIndex(index);
    }

    return (
        <SneakerStyles>
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
            </div>

            {/* <div
                    v-for="(size, index) in product.sizes"
                    :key="size.number"
                    @click="selectSize(size, index)"
                    className="sizes__size"
                    :className="sizeclassName(size, index)"
                    :title="`${size.quantity > 0 ? `Size: ${size.number}` : `Out of stock`}`"
                >
                    <span>{{ size.number }}</span>
                </div>
            </div>
        <div className="addToCart" @click="addToCart" ref="addBtn">
            Add to cart
        </div>
        <div v-if="$store.state.isAdmin" className="edit">
            <router-link :to="`/products/${product._id}/edit`">
                <img src="@/assets/images/edit.png" alt="" />
            </router-link>
        </div>
            </div> */}
        </SneakerStyles>
    );
}
