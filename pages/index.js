import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import styled from 'styled-components';

import { FaAngleDoubleDown } from 'react-icons/fa';
import Link from 'next/link';

const TitleStyle = styled.div`
    font-family: 'Roboto', sans-serif;
    color: dodgerblue;
    margin: 0 auto;
    /* position: absolute;
    width: 50%; */
    text-align: center;
    font-size: 5rem;
    line-height: 5rem;
    text-shadow: 0 0 0.5rem #235de6ff;
`;

const HomeStyles = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .down {
        font-size: 2rem;
        cursor: pointer;
    }
`;

const CardsStyles = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
`;

const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 65rem;
    width: 30%;
    margin: 2rem;
    border: 1px solid dodgerblue;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    .img {
        position: relative;
        width: 100%;
        height: 50rem;
    }
    .info {
        padding: 2rem;
        .brand {
            font-size: 2.3rem;
        }
    }
    @media all and (max-width: 900px) {
        min-height: 50rem;
        width: calc(50% - 4rem);
        .img {
            height: 35rem;
        }
    }
    @media all and (max-width: 550px) {
        min-height: 35rem;
        max-height: 40rem;
        width: 100%;
        .img {
            height: 25rem;
        }
    }
`;
export default function Home() {
    return (
        <>
            <HomeStyles>
                <TitleStyle>Sneakers Shop</TitleStyle>
                <Slider />
                <a href="#cards">
                    <FaAngleDoubleDown className="down" />
                </a>
            </HomeStyles>
            <CardsStyles id="cards">
                <CardStyles>
                    <Link href="/sneakers?search=adidas">
                        <a>
                            <div className="img">
                                <Image
                                    src="/images/tike-mockup/headline_1_adidas_brand_800x800.jpg"
                                    alt="headline"
                                    layout="fill"
                                />
                            </div>
                            <div className="info">
                                <p className="brand">adidas</p>
                                <p>Check out the latest styles</p>
                            </div>
                        </a>
                    </Link>
                </CardStyles>
                <CardStyles>
                    <Link href="/sneakers?search=reebok">
                        <a>
                            <div className="img">
                                <Image
                                    src="/images/tike-mockup/headline_2_reebok_brand_800x800.jpg"
                                    alt="headline"
                                    layout="fill"
                                />
                            </div>
                            <div className="info">
                                <p className="brand">Reebok</p>
                                <p>Check out the latest styles</p>
                            </div>
                        </a>
                    </Link>
                </CardStyles>
                <CardStyles>
                    <Link href="/sneakers?search=new balance">
                        <a>
                            <div className="img">
                                <Image
                                    src="/images/tike-mockup/newbalance.jpg"
                                    alt="headline"
                                    layout="fill"
                                />
                            </div>
                            <div className="info">
                                <p className="brand">New Balance</p>
                                <p>Check out the latest styles</p>
                            </div>
                        </a>
                    </Link>
                </CardStyles>
            </CardsStyles>
        </>
    );
}
