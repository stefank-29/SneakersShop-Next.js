import styled from 'styled-components';
import Card from '../components/Card';
import MultiSelect from 'react-multi-select-component';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

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
    .not-found {
        font-size: 2rem;
    }
`;

const FiltersStyles = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 97%;
    // height: 15rem;
    padding-bottom: 1rem;
    /* background-color: dodgerblue; */
    margin: 2rem 0;
    border-bottom: 1px solid black;
    .filters {
        display: flex;
        .dropdown-container {
            width: 18rem;
            margin-right: 1.5rem;
        }
    }
    .sort {
        .css-2b097c-container {
            width: 18rem;
            margin-right: 1.5rem;
        }
    }

    @media all and (max-width: 600px) {
        width: 100%;
        .filters {
            width: 100%;
            display: block;
            .dropdown-container {
                width: 100%;
                margin-bottom: 0.5rem;
            }
        }
        .sort {
            width: 100%;
            display: block;
            .css-2b097c-container {
                width: 100%;
            }
        }
    }
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

export default function Sneakers({ search }) {
    const { query } = useRouter();
    const [searchQuery, setSearchQuery] = useState(query.search);

    const [sneakersItems, setSneakersItems] = useState([...sneakers]);
    const [selectedGender, setSelectedGender] = useState([]);
    const genderOptions = [
        { label: 'Men', value: 'male' },
        { label: 'Women', value: 'female' },
        { label: 'Unisex', value: 'unisex' },
    ];

    const [selectedBrand, setSelectedBrand] = useState([]);
    const brandOptions = [
        { label: 'Nike', value: 'nike' },
        { label: 'Adidas', value: 'adidas' },
        { label: 'Puma', value: 'puma' },
        { label: 'Reebok', value: 'reebok' },
        { label: 'New Balance', value: 'newbalance' },
    ];

    const [selectedPrice, setSelectedPrice] = useState([]);
    const priceOptions = [
        { label: '0-99 $', value: 100 },
        { label: '100-199 $', value: 200 },
        { label: '200-299 $', value: 300 },
    ];

    const [selectedSort, setSelectedSort] = useState();
    const sortingOptions = [
        { label: 'A -> Z', value: 'alphaasc' },
        { label: 'Z -> A', value: 'alphadesc' },
        { label: 'Price(Low to High)', value: 'priceasc' },
        { label: 'Price(High to Low)', value: 'pricedesc' },
    ];

    //* ako sam vec na sneakers strani
    if (query.search !== searchQuery) {
        setSearchQuery(query.search);
    }

    // filter
    useEffect(() => {
        let filtered = sneakers.filter((item) => {
            if (selectedGender.length === 0) {
                return true;
            }
            for (let i = 0; i < selectedGender.length; i++) {
                if (item.gender === selectedGender[i].value) {
                    return true;
                }
            }
        });
        filtered = filtered.filter((item) => {
            if (selectedBrand.length === 0) {
                return true;
            }
            for (let i = 0; i < selectedBrand.length; i++) {
                if (item.brand === selectedBrand[i].value) {
                    return true;
                }
            }
        });
        filtered = filtered.filter((item) => {
            if (selectedPrice.length === 0) {
                return true;
            }
            for (let i = 0; i < selectedPrice.length; i++) {
                if (
                    item.price >= selectedPrice[i].value - 100 &&
                    item.price < selectedPrice[i].value
                ) {
                    return true;
                }
            }
        });
        setSneakersItems([...filtered]);
    }, [selectedGender, selectedBrand, selectedPrice]);

    function sortItems() {
        let sorted = [];
        if (selectedSort === undefined || selectedSort === null) {
            return;
        }
        switch (selectedSort?.value) {
            case 'alphaasc':
                sorted = sneakersItems.sort((a, b) =>
                    a.name > b.name ? 1 : -1
                );
                break;
            case 'alphadesc':
                sorted = sneakersItems.sort((a, b) =>
                    a.name > b.name ? -1 : 1
                );
                break;
            case 'priceasc':
                sorted = sneakersItems.sort((a, b) => a.price - b.price);
                break;
            case 'pricedesc':
                sorted = sneakersItems.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }
        console.log(sorted);
        console.log(selectedSort.value);
        setSneakersItems([...sorted]);
    }
    // sort
    useEffect(() => {
        sortItems();
    }, [selectedSort]);

    useEffect(() => {
        if (searchQuery == undefined) {
            return;
        }
        console.log(searchQuery);
        let filtered = sneakers.filter((item) => {
            //console.log(item.name.toLowerCase());
            return item.name.toLowerCase().includes(searchQuery);
        });
        console.log(filtered);
        setSneakersItems([...filtered]);
    }, [searchQuery, query.search]);

    function filterSneakers() {}

    return (
        <div>
            <TitleStyle>Sneakers</TitleStyle>
            <FiltersStyles>
                <div className="filters">
                    <MultiSelect
                        hasSelectAll={false}
                        labelledBy="Gender"
                        onChange={setSelectedGender}
                        options={genderOptions}
                        overrideStrings={{
                            search: 'Search gender',
                            selectAll: 'Select All',
                            selectSomeItems: 'Gender',
                        }}
                        value={selectedGender}
                    />
                    <MultiSelect
                        hasSelectAll={false}
                        labelledBy="Brand"
                        onChange={setSelectedBrand}
                        options={brandOptions}
                        overrideStrings={{
                            search: 'Search brand',
                            selectAll: 'Select All',
                            selectSomeItems: 'Brand',
                        }}
                        value={selectedBrand}
                    />
                    <MultiSelect
                        hasSelectAll={false}
                        labelledBy="Price"
                        onChange={setSelectedPrice}
                        options={priceOptions}
                        overrideStrings={{
                            search: 'Search price',
                            selectAll: 'Select All',
                            selectSomeItems: 'Price',
                        }}
                        value={selectedPrice}
                    />
                </div>
                <div className="sort">
                    <Select
                        options={sortingOptions}
                        onChange={setSelectedSort}
                    />
                </div>
            </FiltersStyles>
            <SneakersStyles>
                {sneakersItems.length > 0 ? (
                    sneakersItems.map((sneaker) => (
                        <Card key={sneaker._id.$oid} sneaker={sneaker} />
                    ))
                ) : (
                    <p className="not-found">No items found...</p>
                )}
            </SneakersStyles>
        </div>
    );
}
