import styled from 'styled-components';

const RegisterFormStyles = styled.form`
    position: relative;
    padding: 10rem 4rem 3rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    input,
    textarea,
    select {
        font-size: 1.5rem;
        width: 100%;
        padding: 12px;
        border: 1px solid grey;
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
    h2 {
        top: 3rem;
        position: absolute;
        margin: 0 auto 3rem;
        width: 92%;
        padding-bottom: 1rem;
        border-bottom: 1px solid grey;
        font-size: 2.5rem;
        font-family: 'Avenir', sans-serif;
    }

    .form__block {
        width: 45%;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }

    input.button {
        margin: 0 auto;

        margin-top: 2rem;
        width: 20rem;
        background-color: green;
        color: white;
        cursor: pointer;
        :hover {
            background-color: #00897b;
        }
    }
`;

export default function Register() {
    function handleSubmit() {}
    return (
        <RegisterFormStyles
            onSubmit={handleSubmit}
            autoComplete="off"
            className="card"
        >
            <h2>Register</h2>
            <div className="form__block">
                <label for="name">Name*</label>
                <input type="text" name="name" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="surname">Surname*</label>
                <input type="text" name="surname" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="email">Email*</label>
                <input type="email" name="email" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="text">Phone number*</label>
                <input type="text" name="phone" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="text">City*</label>
                <input type="text" name="city" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="text">Zip Code*</label>
                <input type="text" name="zip" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="text">Street*</label>
                <input type="text" name="street" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="text">Street number*</label>
                <input type="text" name="street_number" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="password">Password*</label>
                <input type="password" name="password" />
                <div className="error"></div>
            </div>
            <div className="form__block">
                <label for="password-confirm">Confirm Password*</label>
                <input type="password" name="password-confirm" />
                <div className="error"></div>
            </div>

            <input
                type="submit"
                value="Register"
                name="register"
                className="button save"
            />
        </RegisterFormStyles>
    );
}
