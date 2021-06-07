import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavigationStyles = styled.div`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    background: dodgerblue;
    .nav__section {
        display: flex;
    }
    .nav__item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav__link {
        max-width: 15rem;
        position: relative;
        height: 9rem;
        font-family: 'Avenir', sans-serif;
        font-weight: 600;
        font-size: 1.4rem;
        padding: 2rem 2.5rem;
        background: dodgerblue;
        color: white;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.2rem 2rem 1rem 2rem;
        display: block;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s;
        border-bottom: 2px solid transparent;
    }
    .nav__link {
        &.logo {
            width: 40px;
            transition: all 0.2s;
            fill: white;
            margin-bottom: 1rem;
        }
    }
    .nav__link:hover,
    .nav__link--active {
        border-bottom-color: rgba(0, 0, 0, 0.2);
        border-right-color: rgba(0, 0, 0, 0.05);
        background: lightblue fixed;
    }
    .nav__link:hover svg,
    .nav__link--active svg {
        transform: scale(1.2);
    }
    .nav__link--logo {
        padding: 0;
    }
    .nav__link--logo:hover {
        background: none;
    }
    .nav__link--logo:hover img {
        transform: scale(1.05);
    }
    .nav__link--logo img {
        height: auto;
        max-width: 100%;
        margin: 0;
    }
    .nav__link--logo.router-link-exact-active {
        background: none;
    }
    .nav__link .cart {
        position: relative;
    }
    .nav__link .cart img {
        height: auto;
        width: 45px;
        margin: 0;
    }
    .nav__link .cart .items__num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: -0.4rem;
        right: -0.8rem;
        padding: 1.3rem 1.4rem 1.3rem 1.3rem;
        border-radius: 50%;
        color: white;
        background-color: #bb2457;
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    .router-link-exact-active {
        border-bottom-color: rgba(0, 0, 0, 0.2);
        border-right-color: rgba(0, 0, 0, 0.05);
        background: lightblue fixed;
    }
    .router-link-exact-active svg {
        transform: scale(1.2);
    }
`;

export default function Navigation() {
    return (
        <NavigationStyles>
            <div className="nav__section pages">
                <li className="nav__item">
                    <Link href="/">
                        <a className="nav__link">
                            <Image
                                className="logo"
                                src="/images/logo1.png"
                                alt="logo"
                                width={100}
                                height={80}
                            />
                        </a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/sneakers">
                        <a className="nav__link">Sneakers</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/brands">
                        <a className="nav__link">Brands</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/about">
                        <a className="nav__link">About Us</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/shops">
                        <a className="nav__link">Shops</a>
                    </Link>
                </li>
            </div>
            <div className="nav__section user">
                <li className="nav__item">
                    <Link href="/register">
                        <a className="nav__link">Register</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/login">
                        <a className="nav__link">Login</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/logout">
                        <a className="nav__link">Logout</a>
                    </Link>
                </li>
                <li className="nav__item">
                    {/* <Link href="/cart">
                        <a className="nav__link nav__link--cart">
                            <div className="items__num">{1}</div>
                        </a>
                    </Link> */}
                </li>
            </div>
        </NavigationStyles>
    );
}
