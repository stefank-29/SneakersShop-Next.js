import styled from 'styled-components';
import Image from 'next/image';
import Card from '../components/Card';

const AboutStyles = styled.div`
    margin: 3rem auto;
    background-color: rgba(255, 255, 255, 0.9);
    height: auto;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 3rem;
    padding: 3rem 4rem;
    .title {
        font-size: 3rem;
        text-align: center;
        font-weight: 500;
    }
    .info {
        font-size: 1.5rem;
    }
    .image {
        position: relative;
        margin: 3rem auto;
        width: 70%;
        height: 50rem;
    }
    @media all and (max-width: 600px) {
        margin: 1.5rem auto;
        padding: 2rem 2.5rem;
        .title {
            font-size: 2.5rem;
            text-align: center;
            font-weight: 500;
        }
        .info {
            font-size: 1.4rem;
        }
        .image {
            position: relative;
            margin: 3rem auto;
            width: 100%;
            height: 25rem;
        }
    }
`;

export const ShopsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    .not-found {
        font-size: 2rem;
    }
`;

const shops = [
    {
        _id: {
            $oid: '60250486500eec30e9003e15',
        },
        name: 'Usce shopping center',
        price: '069/887-7610',
        photo: 'shop1.jpg',
    },
    {
        _id: {
            $oid: '60250486500eec30e9003e15',
        },
        name: 'Beo shopping center',
        price: '069/286-5129',
        photo: 'shop2.jpg',
    },
    {
        _id: {
            $oid: '60250486500eec30e9003e15',
        },
        name: 'Knez Mihailova',
        price: '069/434-2285',
        photo: 'shop3.jpg',
    },
    {
        _id: {
            $oid: '60250486500eec30e9003e15',
        },
        name: 'Delta City',
        price: '069/531-831',
        photo: 'shop1.jpg',
    },
];

export default function Shop() {
    return (
        <AboutStyles>
            <p className="title">Shops</p>
            <ShopsStyles>
                {shops.map((shop) => (
                    <Card sneaker={shop} />
                ))}
            </ShopsStyles>
        </AboutStyles>
    );
}
