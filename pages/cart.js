import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

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
    box-shadow: 0 0 10px rgba($color: rgb(0, 0, 0), $alpha: 0.2),
        0 3px 10px rgba(0, 0, 0, 0.1);
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
        display: flex;
        align-items: center;
        width: 97%;
        margin: 1rem auto;
        border: 1px solid rgba(0, 0, 0, 0.1);
        .img {
            width: 16rem;
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
            .removeBtn {
                font-size: 1.7rem;
                font-family: 'Avenir', sans-serif;
                border: 1px solid rgba(0, 0, 0, 0.4);
                background-color: rgba($color: $lightblue, $alpha: 0.3);
                padding: 1rem 2rem;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    color: white;
                    background-color: rgba($color: $blue, $alpha: 0.8);
                }
            }
        }
        &.header {
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
            display: flex;
            justify-content: flex-start;
            margin-top: 3rem;
            height: 3rem !important;
            border: none;
            padding-bottom: 0.3rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        }
    }
`;

export default function Cart() {
    const items = ['a'];
    const [modalVisible, setModalVisible] = useState();

    function backToShop() {}

    function showModal(index) {}

    function cartTotalPrice() {}

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
                <div className="cart_item">
                    <div className="cart_item__img">
                        <Image
                            src={`/uploads/${item?.product?.photo}`}
                            alt="sneaker photo"
                            layout="fill"
                        />
                    </div>
                    <div className="cart_item__details">
                        <p>{item?.product?.name}</p>
                        <div>Size: {item?.size?.number}</div>
                    </div>
                    <div className="cart_item__price">
                        <div>{item?.product?.price} $</div>
                    </div>
                    <div className="cart_item__price">
                        <div>0,00%</div>
                    </div>
                    <div className="cart_item__price">
                        <div>{item?.product?.price} $</div>
                    </div>
                    <div className="cart_item__remove">
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
                    <span className="total__price">{cartTotalPrice} $</span>
                </div>
            )}
        </ShoppingCartStyles>
    );
}
