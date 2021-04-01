import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --red:#E62E4D;
        --shapePrincipal: #FFFFFF;
        --title: #363F5F;
        --text: #969CB3

    }

    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    border-style, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    strong, h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top:0;
        bottom:0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items:center
    }
    .react-modal-content {
        background: var(--background);
        width: 100%;
        max-width: 576px;

        padding: 4rem 3rem;
        border-radius: 0.25rem;
        position: relative;
    }

    .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
        filter: brightness(0.9);
    }

    }

`;