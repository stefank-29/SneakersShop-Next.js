import styled from 'styled-components';
import Link from 'next/link';

const LoginFormStyles = styled.form`
    position: relative;
    padding: 12.5rem 4rem 3rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
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
        width: 50%;
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
    .form-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
    .info {
        width: 50%;
        .forgot-passoword {
            color: dodgerblue;
            align-self: flex-start;
        }
        .have-account {
            a {
                margin-left: 0.5rem;
                color: dodgerblue;
            }
        }
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
        }
        .form-inner {
            width: 100%;
        }
        .info {
            width: 100%;
        }
    }
`;

export default function Login() {
    function handleSubmit(e) {
        e.preventDefault();

        // stateovi za errore
        // validacija
    }
    return (
        <LoginFormStyles
            onSubmit={handleSubmit}
            autoComplete="off"
            className="card"
        >
            <h2>Login</h2>

            <div className="form-inner">
                <div className="form__block">
                    <label for="email">Email*</label>
                    <input type="email" name="email" />
                    <div className="error"></div>
                </div>

                <div className="form__block">
                    <label for="password">Password*</label>
                    <input type="password" name="password" />
                    <div className="error"></div>
                </div>

                <div className="info">
                    <Link href="/forgot">
                        <a>
                            <p className="forgot-passoword">Forgot password?</p>
                        </a>
                    </Link>
                    <div className="have-account">
                        <span>Do not have an account?</span>
                        <Link href="/register" className="register-now">
                            <a>
                                <span>Register Now</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Login"
                    name="login"
                    className="button save"
                />
            </div>
        </LoginFormStyles>
    );
}
