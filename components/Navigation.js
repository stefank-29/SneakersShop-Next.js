import styled from 'styled-components';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchField from 'react-search-field';
import { useCart } from '../lib/cartState';
import { useRouter } from 'next/dist/client/router';
import { FaBars, FaSearch } from 'react-icons/fa';

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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .brands-menu {
            top: 9rem;
            left: 0;
            position: absolute;
            background-color: whitesmoke;
            width: 200%;
            height: 20rem;
            z-index: 5;
            padding: 2rem;
            display: flex;
            flex-direction: column;
        }
    }

    .nav__link {
        //max-width: 15rem;
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
        &.active {
            border-bottom-color: rgba(0, 0, 0, 0.2);
            border-right-color: rgba(0, 0, 0, 0.05);
            background-color: lightblue;
            text-decoration: underline;
        }
        .cart {
            position: relative;
            .img {
                height: 45px;
                width: 45px;
                margin: 0;
            }
            .items__num {
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
                font-size: 1.2rem;
                font-family: 'Lato', sans-serif;
                font-weight: 700;
            }
        }
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

    .router-link-exact-active svg {
        transform: scale(1.2);
    }
    .react-search-field {
        margin-right: 2rem;
    }
    .expand {
        display: none;
    }

    @media all and (max-width: 750px) {
        align-items: center;
        .nav__section {
            display: block;
            width: 100%;
            overflow: hidden;
        }

        .react-search-field {
            display: none;
            width: 20rem;
            visibility: hidden;
        }
        .react-search-field-button {
            display: none;
        }
        .user {
            margin-top: ${(props) => props.marginTop};
        }
        .nav__link {
            height: 8rem;
            width: 100%;
            margin-right: 0;
        }
        .nav__item {
            display: ${(props) => props.menu};
        }
        .logo {
            display: block;
        }
        .expand {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: flex-end;
            padding-right: 2rem;
            color: white;
            font-size: 3rem;
            .search {
                margin-right: 2rem;
                cursor: pointer;
            }
        }
    }
    @media all and (max-width: 600px) {
        align-items: center;
        .nav__section {
            display: block;
            width: 100%;
            overflow: hidden;
        }

        .react-search-field {
            display: none;
            width: 20rem;
            visibility: hidden;
        }
        .react-search-field-button {
            display: none;
        }
        .user {
            margin-top: ${(props) => props.marginTop};
        }
        .nav__link {
            height: 8rem;
            width: 100%;
            margin-right: 0;
        }
        .nav__item {
            display: ${(props) => props.menu};
        }
        .logo {
            display: block;
        }
        .expand {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: flex-end;
            padding-right: 2rem;
            color: white;
            font-size: 3rem;
            .search {
                margin-right: 2rem;
                cursor: pointer;
            }
        }
    }
`;

const SearchStyles = styled.div`
    width: 100%;
    height: 5rem;
    display: none;
    justify-content: flex-start;
    background-color: whitesmoke;
    .searchInput {
        height: 100%;
        min-width: 100%;
        width: 150%;
        background-color: whitesmoke;
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 1rem;
    }
    @media all and (max-width: 600px) {
        display: flex;
    }
`;

export default function Navigation() {
    const { items } = useCart();
    const [query, setQuery] = useState();
    const router = useRouter();

    const [brandsMenuVisible, setBrandsMenuVisible] = useState(true);

    const [menuVisible, setMenuVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if (router.pathname === '/sneakers') {
            router.replace({ pathname: '/sneakers', query: { search: query } });
        } else {
            router.push({ pathname: '/sneakers', query: { search: query } });
        }
    }

    function onChange(value) {
        setQuery(value);
    }

    function onChangeInput(e) {
        setQuery(e.target.value);
    }

    function expandMenu() {
        setMenuVisible(!menuVisible);
    }

    function expandSearch() {
        setSearchVisible(!searchVisible);
    }

    return (
        <>
            <NavigationStyles
                menu={menuVisible ? 'block' : 'none'}
                marginTop={menuVisible ? '3rem' : 0}
            >
                <div className="nav__section pages">
                    <li
                        className="nav__item logo"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                            setBrandsMenuVisible(false);
                        }}
                    >
                        <Link
                            href="/"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                                setBrandsMenuVisible(false);
                            }}
                        >
                            <a className={`nav__link`}>
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
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                            setBrandsMenuVisible(false);
                        }}
                    >
                        <Link
                            href="/sneakers"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                                setBrandsMenuVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/sneakers'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                Sneakers
                            </a>
                        </Link>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setBrandsMenuVisible(!brandsMenuVisible);
                        }}
                    >
                        <a
                            className={`nav__link ${
                                router.pathname == '/brands' ? 'active' : ''
                            }`}
                        >
                            Brands
                        </a>
                        {brandsMenuVisible && (
                            <div className="brands-menu">
                                <Link href="/sneakers?search=nike">
                                    <a>Nike</a>
                                </Link>
                                <Link href="/sneakers?search=adidas">
                                    <a>Adidas</a>
                                </Link>
                                <Link href="/sneakers?search=reebok">
                                    <a>Reebok</a>
                                </Link>
                                <Link href="/sneakers?search=new balance">
                                    <a>New Balance</a>
                                </Link>
                                <Link href="/sneakers?search=converse">
                                    <a>Converse</a>
                                </Link>
                            </div>
                        )}
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                            setBrandsMenuVisible(false);
                        }}
                    >
                        <Link
                            href="/about"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/about' ? 'active' : ''
                                }`}
                            >
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                        }}
                    >
                        <Link
                            href="/shops"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                                setBrandsMenuVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/shops' ? 'active' : ''
                                }`}
                            >
                                Shops
                            </a>
                        </Link>
                    </li>
                </div>
                <div className="nav__section user">
                    <li className="nav__item expand">
                        <FaSearch className="search" onClick={expandSearch} />
                        <FaBars onClick={expandMenu} />
                    </li>
                    <li className="nav__item">
                        <form onSubmit={onSubmit}>
                            <SearchField
                                placeholder="Search sneakers"
                                onChange={onChange}
                            />
                        </form>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                        }}
                    >
                        <Link
                            href="/register"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                                setBrandsMenuVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/register'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                Register
                            </a>
                        </Link>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                            setBrandsMenuVisible(false);
                        }}
                    >
                        <Link
                            href="/login"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/login' ? 'active' : ''
                                }`}
                            >
                                Login
                            </a>
                        </Link>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                        }}
                    >
                        <Link
                            href="/logout"
                            onClick={() => {
                                setMenuVisible(false);
                                setSearchVisible(false);
                            }}
                        >
                            <a
                                className={`nav__link ${
                                    router.pathname == '/logout' ? 'active' : ''
                                }`}
                            >
                                Logout
                            </a>
                        </Link>
                    </li>
                    <li
                        className="nav__item"
                        onClick={() => {
                            setMenuVisible(false);
                            setSearchVisible(false);
                        }}
                    >
                        <Link href="/cart">
                            <a
                                className={`nav__link nav__link--cart ${
                                    router.pathname == '/cart' ? 'active' : ''
                                }`}
                            >
                                <div className="cart">
                                    <div className="img">
                                        <Image
                                            src="/images/shopping-cart.svg"
                                            alt="cart icon"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className="items__num">
                                        {items.length}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                </div>
            </NavigationStyles>
            {searchVisible && (
                <SearchStyles>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            onChange={onChangeInput}
                            className="searchInput"
                            autoFocus
                        />
                    </form>
                </SearchStyles>
            )}
        </>
    );
}
