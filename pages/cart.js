import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cartState';
import AddressForm from '../components/AddressForm';
import Modal from '../components/Modal';
import { useRouter } from 'next/dist/client/router';

const ShoppingCartStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3rem auto;
    padding-bottom: 3rem;
    background-color: rgba(255, 255, 255, 0.93);
    min-height: 70rem;
    // border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
    .title {
        display: block;
        width: 97%;
        color: rgba(0, 0, 0, 0.8);
        font-size: 2.5rem;
        font-family: 'Avenir', sans-serif;
        padding: 1rem;
        margin: 1rem auto;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    }
    .total {
        display: block;
        width: 97%;
        color: rgba(0, 0, 0, 0.8);
        font-size: 2rem;
        font-family: 'Avenir', sans-serif;
        padding: 1rem;
        margin: 0rem auto 2rem;
        text-align: right;
        span {
            margin-left: 13rem;
            margin-right: 2rem;
        }
        .price {
            font-weight: 700;
            font-family: 'Lato', sans-serif;
        }
        &::before {
            content: '';
            display: block;
            width: 25%;
            height: 1px;
            margin-left: auto;
            margin-bottom: 1rem;
            background-color: rgba(0, 0, 0, 0.8);
        }
        // border-top: 1px solid rgba(0,0,0, 0.8);
    }
    .cart_item {
        min-width: 50rem;
        display: flex;
        align-items: center;
        width: 97%;
        margin: 1rem auto;
        border: 1px solid rgba(0, 0, 0, 0.1);
        .img {
            position: relative;
            width: 16rem;
            height: 16rem;
        }
        .details {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40rem;
            height: 15rem;
            font-size: 2rem;
            padding: 1rem 3rem;
        }
        .price,
        .remove {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 15rem;
            height: 15rem;
            font-size: 2rem;
            padding: 0 2rem;
            margin-left: 4rem;
            .removeBtn {
                font-size: 1.7rem;
                font-family: 'Avenir', sans-serif;
                border: 1px solid rgba(0, 0, 0, 0.4);
                background-color: rgba(30, 144, 255, 0.5);
                padding: 1rem 2rem;
                cursor: pointer;
                transition: all 0.3s;
                :hover {
                    color: white;
                    background-color: rgba(30, 144, 255, 0.8);
                }
            }
        }
        .remove {
            margin-left: auto;
            margin-right: 3rem;
        }
        &.header {
            display: flex;
            justify-content: flex-start;
            margin-top: 3rem;
            height: 3rem !important;
            border: none;

            padding-bottom: 0.3rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            .price {
                height: 3rem;
            }
            .pricee {
                padding-left: 6rem;
                margin-left: -2rem;
            }
            .details {
                height: 3rem;
                width: 35rem;
                justify-content: center;
                align-items: flex-start;
                margin-right: 2.5rem;
                margin-left: 5rem;
            }
            .discount {
                margin-left: -3rem;
                width: 22rem;
            }
        }
    }
    .emptyCart {
        display: flex;
        align-items: center;
        width: 97%;
        margin: 2rem auto;
        padding: 1.5rem 2rem;
        color: rgba(136, 15, 15, 0.7);
        border: 1px solid rgba(136, 15, 15, 0.7);
        background-color: rgba(136, 15, 15, 0.2);
        font-size: 2rem;
        font-family: 'Avenir', sans-serif;
    }

    .backToShop {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
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
        margin-top: 2rem;
        margin-left: 2rem;
        padding: 1.2rem 2.2rem 1.2rem 1rem;
        transition: 0.5s;
        &::after {
            content: '';
        }
        &::before {
            content: '⬅';
            opacity: 0;
            margin-right: 1rem;
            transition: 0.5s;
        }
        &:hover {
            background-position: right center;
            padding-right: 1.8rem;
            &::after {
                opacity: 1;
                padding: 0;
            }
            &::before {
                opacity: 1;
                padding-left: 0.8rem;
            }
        }
    }
    @media all and (max-width: 950px) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem auto;
        padding-bottom: 1rem;
        .title {
            display: block;
            width: 90%;
        }
        .total {
            display: block;
            width: 80%;
            span {
                margin-left: 2rem;
            }
            .price {
                font-weight: 700;
                font-family: 'Lato', sans-serif;
            }
            &::before {
                width: 50%;
            }
        }
        .cart_item {
            display: flex;
            align-items: center;
            width: 95%;
            min-width: 10rem;
            overflow: auto;
            margin: 1rem auto;
            border: 1px solid rgba(0, 0, 0, 0.2);
            .img {
                position: relative;
                min-width: 12rem;
                height: 12rem;
            }
            .details {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                min-width: 25rem;
                height: 15rem;
                font-size: 1.8rem;
                padding: 1rem 3rem;
                > * {
                    margin-right: 2rem;
                }
            }
            .price,
            .remove {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                min-width: 15rem;
                height: 15rem;
                font-size: 2rem;
                padding: 0 1rem;
                margin-left: 1rem;
                .removeBtn {
                    font-size: 1.7rem;
                    font-family: 'Avenir', sans-serif;
                    border: 1px solid rgba(0, 0, 0, 0.4);
                    background-color: rgba(30, 144, 255, 0.5);
                    padding: 1rem 2rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover {
                        color: white;
                        background-color: rgba(30, 144, 255, 0.8);
                    }
                }
            }
            .remove {
                margin-left: auto;
                margin-right: 1rem;
            }
            &.header {
                display: none;
            }
        }
    }

    @media all and (max-width: 550px) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem auto;
        padding-bottom: 1rem;
        .title {
            display: block;
            width: 90%;
        }
        .total {
            display: block;
            width: 80%;
            span {
                margin-left: 2rem;
            }
            .price {
                font-weight: 700;
                font-family: 'Lato', sans-serif;
            }
            &::before {
                width: 50%;
            }
        }
        .cart_item {
            display: flex;
            align-items: center;
            width: 95%;
            min-width: 10rem;
            overflow: auto;
            margin: 1rem auto;
            border: 1px solid rgba(0, 0, 0, 0.2);
            .img {
                position: relative;
                min-width: 12rem;
                height: 12rem;
            }
            .details {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                min-width: 25rem;
                height: 15rem;
                font-size: 1.8rem;
                padding: 1rem 3rem;
                > * {
                    margin-right: 2rem;
                }
            }
            .price,
            .remove {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                min-width: 15rem;
                height: 15rem;
                font-size: 2rem;
                padding: 0 1rem;
                margin-left: 1rem;
                .removeBtn {
                    font-size: 1.7rem;
                    font-family: 'Avenir', sans-serif;
                    border: 1px solid rgba(0, 0, 0, 0.4);
                    background-color: rgba(30, 144, 255, 0.5);
                    padding: 1rem 2rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover {
                        color: white;
                        background-color: rgba(30, 144, 255, 0.8);
                    }
                }
            }
            .remove {
                margin-left: auto;
                margin-right: 1rem;
            }
            &.header {
                display: none;
            }
        }
    }
`;

export default function Cart() {
    const { items } = useCart();
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [itemToRemove, setItemToRemove] = useState();

    function backToShop() {
        router.push('/sneakers');
    }

    function showModal(index) {
        setItemToRemove(index);
        setModalVisible(true);
    }

    function cartTotalPrice() {
        return items.reduce((a, b) => {
            return a + b.product.price;
        }, 0);
    }

    if (typeof window == 'undefined') {
        // ssr local storage bug
        return null;
    }
    return (
        <ShoppingCartStyles>
            <div className="title">Your cart</div>
            {items.length === 0 && (
                <div className="emptyCart">
                    <span>Your cart is empty!</span>
                </div>
            )}
            {items.length === 0 && (
                <div onClick={backToShop} className="backToShop">
                    Back to shop
                </div>
            )}

            {items.length > 0 && (
                <div className="cart_item header">
                    <div className="img"></div>
                    <div className="details">
                        <div>Item</div>
                    </div>
                    <div className="price pricee">
                        <div>Price</div>
                    </div>
                </div>
            )}

            {items.map((item, index) => (
                <div key={index} className="cart_item">
                    <div className="img">
                        <Image
                            src={`/uploads/${item?.product?.photo}`}
                            alt="sneaker photo"
                            layout="fill"
                        />
                    </div>
                    <div className="details">
                        <p>{item?.product?.name}</p>
                        <div>Size: {item?.size?.number}</div>
                    </div>
                    <div className="price">
                        <div>{item?.product?.price} $</div>
                    </div>

                    <div className="remove">
                        <div
                            onClick={() => showModal(index)}
                            className="removeBtn"
                        >
                            Remove
                        </div>
                    </div>
                </div>
            ))}

            {items.length > 0 && (
                <div className="total">
                    <span>Total:</span>
                    <span className="price">{cartTotalPrice()} $</span>
                </div>
            )}
            {items.length > 0 && (
                <div v-if="items.length !== 0" class="title">
                    Shipping Address
                </div>
            )}
            {items.length > 0 && <AddressForm />}
            {modalVisible && (
                <Modal
                    setModalVisible={setModalVisible}
                    itemIndex={itemToRemove}
                />
            )}
        </ShoppingCartStyles>
    );
}
