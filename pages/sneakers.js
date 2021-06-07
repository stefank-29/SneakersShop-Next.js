import styled from 'styled-components';
import Card from '../components/Card';

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
export const SneakersStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const sneakers = [
    {
        _id: {
            $oid: '60250486500eec30e9003e15',
        },
        name: "AIR FORCE 1 '07 / PARANOISE",
        price: 215,
        gender: 'male',
        brand: 'nike',
        photo: 'dacb0934-009f-4aac-b02c-a106c6c39eb0.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602504e0500eec30e9003e2b',
        },
        name: 'ACG AIR NASU GORE - TEX',
        price: 230,
        brand: 'nike',
        gender: 'male',
        photo: '63898c6b-cc1b-4eb8-979c-b2b055e8b1d5.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250517500eec30e9003e3b',
        },
        name: 'NIKE AIR MAX 1 PRM',
        price: 215,
        brand: 'nike',
        gender: 'unisex',
        photo: 'f65b880a-43be-4baa-8bcc-863e972bd56a.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250539500eec30e9003e4b',
        },
        name: "AIR FORCE 1 '07 LV8 RAYGUNS",
        price: 175,
        brand: 'nike',
        gender: 'unisex',
        photo: 'bd3ffa99-fa8a-4d55-aa83-3425226c55b0.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250561500eec30e9003e5b',
        },
        name: "AIR FORCE 1 '07 CRAFT 2",
        price: 160,
        brand: 'nike',
        gender: 'unisex',
        photo: '3be2bcbb-1188-41ef-bdc7-4bff475f0f7d.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250582500eec30e9003e6b',
        },
        name: "AIR FORCE 1 '07 CRAFT 2",
        price: 155,
        brand: 'nike',
        gender: 'unisex',
        photo: 'd34cfda8-f0b4-49ab-8cb0-fb985022b1b0.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602505ac500eec30e9003e76',
        },
        name: 'NIKE AIR PRESTO',
        price: 115,
        brand: 'nike',
        gender: 'female',
        photo: 'eec0fd5d-0b7c-49a1-82c9-83db7f34a146.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602505fe500eec30e9003e81',
        },
        name: 'W AIR MAX 90 QS',
        price: 180,
        brand: 'nike',
        gender: 'female',
        photo: '5f5f9d7c-c6dd-4af1-b5c7-35bcfc52ab9e.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250625500eec30e9003e8c',
        },
        name: 'W NIKE AIR MAX UP',
        price: 165,
        brand: 'nike',
        gender: 'female',
        photo: '130f70a2-a9c6-43e9-b7c5-1d1860dadb71.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250647500eec30e9003e97',
        },
        name: 'W AIR MAX 95 PRM',
        price: 210,
        brand: 'nike',
        gender: 'female',
        photo: 'f2852e79-dcff-49d7-ad79-34c9cbb0dbff.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60250668500eec30e9003ea2',
        },
        name: 'WMNS NIKE AF1 LXX',
        price: 145,
        brand: 'nike',
        gender: 'female',
        photo: '571cd4c7-ba76-4c03-9b59-3a614fd47fd5.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602537b7fc5f031c2abf4472',
        },
        name: 'NEW BALANCE M327',
        price: 120,
        brand: 'newbalance',
        gender: 'unisex',
        photo: '0515f7dd-8330-4192-8fb2-90b22896036a.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602537e1fc5f031c2abf4482',
        },
        name: 'ADIDAS Patike NITEBALL',
        price: 145,
        brand: 'adidas',
        gender: 'unisex',
        photo: 'c2b28d6c-3357-4014-b803-ef92b56d798f.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '6025382dfc5f031c2abf448d',
        },
        name: 'NEW BALANCE PATIKE',
        price: 230,
        brand: 'newbalance',
        gender: 'male',
        photo: 'aeea2c76-783b-459e-a7bc-e6f740f92bec.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '60253874fc5f031c2abf4498',
        },
        name: 'NEW BALANCE M 997',
        price: 260,
        brand: 'newbalance',
        gender: 'male',
        photo: '1c8f6e92-ffca-45a2-8687-ca3ab4df2bd6.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602cf0b231ad9f33a69f849d',
        },
        name: 'Air Max Force',
        price: 170,
        brand: 'nike',
        gender: 'male',
        photo: 'bb9fed4e-1610-445b-ac8b-ac9ddeeb71e5.jpeg',
        __v: 0,
    },
    {
        _id: {
            $oid: '602cf6c731ad9f33a69f84b5',
        },
        name: 'Air force',
        price: 175,
        brand: 'nike',
        gender: 'male',
        photo: 'ca1f386c-d6eb-4087-a44f-4914f397df48.jpeg',
        __v: 0,
    },
];

export const maleSizes = [
    {
        quantity: 1,
        number: 38,
    },
    {
        quantity: 5,
        number: 39,
    },
    {
        quantity: 0,
        number: 40,
    },
    {
        quantity: 1,
        number: 41,
    },
    {
        quantity: 0,
        number: 42,
    },
    {
        quantity: 3,
        number: 43,
    },
    {
        quantity: 3,
        number: 44,
    },
    {
        quantity: 0,
        number: 45,
    },
    {
        quantity: 0,
        number: 46,
    },
    {
        quantity: 4,
        number: 47,
    },
];

export const femaleSizes = [
    {
        quantity: 3,
        number: 33,
    },
    {
        quantity: 3,
        number: 34,
    },
    {
        quantity: 0,
        number: 35,
    },
    {
        quantity: 0,
        number: 36,
    },
    {
        quantity: 4,
        number: 37,
    },
    {
        quantity: 1,
        number: 38,
    },
    {
        quantity: 5,
        number: 39,
    },
    {
        quantity: 0,
        number: 40,
    },
    {
        quantity: 1,
        number: 41,
    },
    {
        quantity: 0,
        number: 42,
    },
];

export default function Sneakers() {
    return (
        <div>
            <TitleStyle>Sneakers</TitleStyle>

            <SneakersStyles>
                {sneakers.map((sneaker) => (
                    <Card key={sneaker._id.$oid} sneaker={sneaker} />
                ))}
            </SneakersStyles>
        </div>
    );
}
