import { func } from 'prop-types';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

const ModalStyles = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .modal-content {
        position: relative;
        width: 60rem;
        margin-top: -30rem;
        background-color: white;
        border-radius: 0.8rem;
        padding: 4rem;
        animation: popup 0.3s linear 1;
        .question {
            font-size: 2rem;
            font-family: 'Avenir', sans-serif;
        }
        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 3rem;
            width: 100%;
        }
        .button {
            text-align: center;
            font-size: 1.7rem;
            font-family: 'Avenir', sans-serif;
            border: 1px solid rgba(0, 0, 0, 0.4);
            color: white;
            background-color: rgba(17, 58, 190, 0.8);
            padding: 1rem 2rem;
            margin: 0 2rem;
            width: 20rem;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: white;
                background-color: rgba(0, 0, 255, 0.8);
            }
            &.no {
                width: 10rem;
                background-color: rgba(17, 58, 190, 0.65);
            }
        }
    }

    .close {
        position: absolute;
        top: 0.2rem;
        right: 1rem;
        font-size: 3rem;
        font-weight: 400;
        transform: rotate(45deg);
        cursor: pointer;
        outline: none;
        user-select: none;
    }

    @keyframes popup {
        0% {
            transform: translateY(-200px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @media all and (max-width: 600px) {
        .modal-content {
            position: relative;
            width: 80%;
            margin-top: -10rem;
        }
    }
`;

export default function Modal({ itemIndex, setModalVisible }) {
    const { removeFromCart } = useCart();
    function close() {
        setModalVisible(false);
    }
    function confirm() {
        removeFromCart(itemIndex);
        setModalVisible(false);
    }
    return (
        <ModalStyles>
            <div className="modal-content">
                <div className="question">
                    Do you really want to remove item from cart?
                </div>
                <div className="buttons">
                    <div onClick={confirm} className="button">
                        Confirm
                    </div>
                    <div onClick={close} className="button no">
                        No
                    </div>
                </div>
                <div onClick={close} className="close">
                    +
                </div>
            </div>
        </ModalStyles>
    );
}
