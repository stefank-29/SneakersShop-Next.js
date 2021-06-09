import styled from 'styled-components';

const FormStyles = styled.form`
    padding: 3rem 4rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 97%;
    margin: 1rem auto;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-wrap: wrap;
    input,
    textarea,
    select {
        font-size: 1.5rem;
        width: 100%;
        padding: 12px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        outline: none;
        &.input {
            &--error {
                border-color: red;
            }
        }
    }

    label {
        text-align: left;
        font-family: 'Avenir', sans-serif;
        font-size: 1.8rem;
        padding: 1.2rem 0 1rem;
        width: 40%;
    }
    .form__block {
        width: 40%;
        padding-left: 4rem;
        margin-right: 5rem;
    }

    .confirm_order {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        font-size: 2rem;
        font-family: 'Avenir', sans-serif;
        color: white;
        background: dodgerblue;
        background-size: 200% auto;
        border: none;
        border-radius: 5px;
        transition: 0.7s;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        &.added {
            &::after {
                content: '✔';
            }
        }
        ::after {
            content: '➡';
            opacity: 0;
            margin-left: 1rem;
            transition: 0.5s;
        }
        :hover {
            background-position: right center;
            ::after {
                opacity: 1;
                padding-right: 0.8rem;
            }
        }
        width: 30% !important;
        /* margin: 4rem auto 0; */
        margin-left: 4rem;
        margin-right: auto;

        font-size: 1.8rem !important;
        font-family: 'Avenir', sans-serif;
    }
    @media all and (max-width: 1100px) {
        h2 {
            width: 75%;
            padding-bottom: 1rem;
        }
        .form__block {
            width: 80%;
            margin-left: 0;
            margin-right: 0;
        }
    }
    @media all and (max-width: 550px) {
        h2 {
            width: 75%;
            padding-bottom: 1rem;
        }
        .form__block {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            padding: 0;
        }
        .confirm_order {
            width: 15rem !important;
        }
    }
`;

export default function AddressForm({ user, items }) {
    return (
        <FormStyles onSubmit="confirmOrder" className="card form__cart">
            <div className="form__block">
                <label for="name">Name*</label>
                <input type="text" name="name" required />
            </div>
            <div className="form__block">
                <label for="surname">Surname*</label>
                <input type="text" name="surname" required />
            </div>
            <div className="form__block">
                <label for="email">Email*</label>
                <input type="email" name="email" required />
            </div>
            <div className="form__block">
                <label for="text">Phone number*</label>
                <input type="text" name="phone" required />
            </div>
            <div className="form__block">
                <label for="text">City*</label>
                <input type="text" name="city" required />
            </div>
            <div className="form__block">
                <label for="text">Zip Code*</label>
                <input type="text" name="zip" required />
            </div>
            <div className="form__block">
                <label for="text">Street*</label>
                <input type="text" name="street" required />
            </div>
            <div className="form__block">
                <label for="text">Street number*</label>
                <input type="text" name="street_number" required />
            </div>
            <input type="submit" value="Confirm" className="confirm_order" />
        </FormStyles>
    );
}
