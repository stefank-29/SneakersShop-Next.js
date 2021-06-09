import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './Navigation';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html{

        --red: #e01812;
        --orange: #ffa220;
        --black: #393939;
        --grey: #3A3A3A;
        --textGrey: #818181;
        --textGrey2: #B7B7B7;
        --lightGrey: #e1e1e1;
        --offWhite: #ededed;
        --backgroundGrey: #E8E8E8;

        --maxWidth: 1100px;
        --bs: 0 12px 24px 0 rgba(0,0,0, 0.1);
        --blue: rgb(7, 36, 78);
        --lightblue: #BDC5E4;
        --hoverBlue: #5c6fbc;
        --purple: #262161;
        --yellow: #ffc40e;
        --gold: #FFCB3B;
        --pink: #ee7297;
        --green: #93ff00;
        --lightGreen: #3BFF89;
        --lightRed: #FF3B3B;
        --grad: linear-gradient(90deg, #48ded4 0%, #a026bf 20%, #e82c75 60%, var(--yellow) 85%, #48ded4 95%);
        --grad2: linear-gradient(90deg, #48ded4 0%, #d36912 50%, #48ded4 95%);
        --verticalGrad: linear-gradient(0, #48ded4 0%, #a026bf 20%, #e82c75 60%, $yellow 85%, #48ded4 95%);
        --btnGrad: linear-gradient(to right, var(--red) 0%, var(--black) 50%, var(--red) 100%);

        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont,
         'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
         'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        min-height: 100vh;
        background-color: var(--backgroundGrey);

    }
    a{
        text-decoration: none;
        color: var(--black);
        &:hover{
            text-decoration: underline;
        }
    }


    /* font u bodiju se ne odnosi na button */
    button{
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
    /* max-width: var(--maxWidth); */
    margin: 0 auto;
    max-width: 1400px;
    min-height: calc(100vh - 60px);
    padding: 2rem 0;
    @media all and (max-width: 900px) {
        max-width: 900px;
        padding: 2rem;
    }
`;

export default function Page({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Navigation />
            <InnerStyles>{children}</InnerStyles>
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.any,
};
