import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaChevronLeft,
    FaChevronRight,
    FaCircle,
    FaDotCircle,
} from 'react-icons/fa';

const SliderStyles = styled.div`
    /* position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0; */
    width: 120%;
    height: 75vh;
    margin: 2rem auto;
    margin-left: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;

    #slider {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgb(82, 80, 80);
        display: flex;
        box-shadow: 0 0 7px 2px rgba(71, 10, 10, 0.8);
    }
    #slider img {
        width: 100%;
        height: 100%;
        /* animation: showPic 0.7s ease-in-out 1 forwards; */
    }
    .arrow {
        font-size: 3rem;
        color: $lightblue;
    }

    .arrow:hover {
        transform: scale(1.05);
        text-shadow: 0 0 2px rgba(71, 10, 10, 0.8);
    }

    #left {
        position: absolute;
        left: 2rem;
        top: 48%;
        cursor: pointer;
    }

    #right {
        position: absolute;
        right: 2rem;
        top: 48%;
        cursor: pointer;
    }

    #dots {
        position: absolute;
        bottom: 2rem;
        /*za centriranje*/
        /*ovo se odnosi na roditelja*/
        left: 50%;
        /*ovo se odnosi na element*/
        transform: translate(-50%, 0);
        cursor: default;
    }

    #dots * {
        cursor: pointer;
        font-size: 2.5rem;
        margin-right: 0.5rem;
        color: $lightblue;
        /* transition: all 0.7s ease-in-out; */
    }
    #dots *:hover {
        transform: scale(1.05);
        text-shadow: 0 0 2px rgba(71, 10, 10, 0.8);
    }
    .show {
        animation: showPic 0.7s linear 1 forwards;
    }
    /**********************/
    @keyframes showPic {
        0% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }
    @media all and (max-width: 650px) {
        width: 100%;
        height: 60vh;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default function Slider() {
    function nextImage() {
        if (index !== 4) {
            setIndex(index + 1);
        } else {
            setIndex(1);
        }
    }

    function previousImage() {
        if (index !== 1) {
            setIndex(index - 1);
        } else {
            setIndex(4);
        }
    }

    function circleClass(index) {
        return {
            'fa-dot-circle': this.imageIndex === index,
        };
    }
    function showImageOnDot(index) {
        setIndex(index);
    }
    const [index, setIndex] = useState(1);
    return (
        <SliderStyles>
            <div id="slider">
                <Link href="/sneakers">
                    <a>
                        <Image
                            src={`/images/banners/banner${index}.jpg`}
                            alt="banner"
                            layout="fill"
                        />
                    </a>
                </Link>
                <span onClick={previousImage} className="arrow" id="left">
                    <FaChevronLeft color="dodgerblue" />
                </span>
                <span onClick={nextImage} className="arrow" id="right">
                    <FaChevronRight color="dodgerblue" />
                </span>
                <div id="dots">
                    {index == 1 ? (
                        <FaDotCircle color="dodgerblue" />
                    ) : (
                        <FaCircle
                            color="dodgerblue"
                            onClick={() => showImageOnDot(1)}
                        />
                    )}
                    {index == 2 ? (
                        <FaDotCircle color="dodgerblue" />
                    ) : (
                        <FaCircle
                            color="dodgerblue"
                            onClick={() => showImageOnDot(2)}
                        />
                    )}
                    {index == 3 ? (
                        <FaDotCircle color="dodgerblue" />
                    ) : (
                        <FaCircle
                            color="dodgerblue"
                            onClick={() => showImageOnDot(3)}
                        />
                    )}
                    {index == 4 ? (
                        <FaDotCircle color="dodgerblue" />
                    ) : (
                        <FaCircle
                            color="dodgerblue"
                            onClick={() => showImageOnDot(4)}
                        />
                    )}
                </div>
            </div>
        </SliderStyles>
    );
}
