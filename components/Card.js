import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardStyles = styled.div`
    position: relative;
    background-color: white;
    margin: 1.5rem 1.5rem 1.5rem 0;
    width: calc(25% - 2rem);
    box-shadow: 0 0 7px rgba(0,0,0,0.1),
        0 3px 7px rgba(0,0,0,0.05);
    animation: down2Up 0.5s ease-in-out 1 forwards;
    .img {
        width: 100%;
        height: 25rem;
    }

    .details {
        padding: 1rem;
        p {
            font-size: 1.5rem;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
        }
    }
    .name {
        span {
            font-size: 2rem;
            font-weight: 600;
            font-family: 'Avenir', sans-serif;
        }
        text-align: left;
        ::after {
            content: '';
            margin-top: 1.5rem;
            display: block;
            width: 35%;
            height: 1px;
            background-color: rgba(0,0,0,0.6);
        }
        a {
            text-decoration: none;
            color: black;
        }
    }
    .price {
        // border-top: 1px solid rgba($color: #000000, $alpha: 0.7);
        padding-top: 0.8rem;
        text-align: left;
        span {
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'Lato', sans-serif;
        }
    }
    .hero {
        position: relative;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    opacity: 1;
    .edit {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        img {
            width: 20px;
            height: 20px;
        }
        cursor: pointer;
    }
    @media all and (max-width: 1000px) {
        width: calc(50% - 4rem);
    }
    @media all and (max-width: 550px) {
        width: 100%;
        margin-bottom: 1rem !important;
    }
    :hover{
        transform: scale(1.03);
    }
}

`;

export default function Card({ sneaker }) {
    return (
        <CardStyles>
            <div className="hero">
                <Link href={`/sneaker/${sneaker._id.$oid}`}>
                    <a>
                        <div className="img">
                            <Image
                                src={`/uploads/${sneaker.photo}`}
                                alt="sneaker image"
                                layout="fill"
                                // width={100}
                                // height={100}
                            />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="details">
                <div className="name">
                    <Link href={`/sneaker/${sneaker._id.$oid}`}>
                        <a>
                            <span>{sneaker.name}</span>
                        </a>
                    </Link>
                </div>
                <div className="price">
                    <span>{sneaker.price} $</span>
                </div>
            </div>
        </CardStyles>
    );
}
