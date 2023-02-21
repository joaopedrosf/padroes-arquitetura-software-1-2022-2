import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #45ba8b;
    --dark-blue: #1d2852;
    --dark-blue-100: #0c1021;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --orange: #d66f15;
}
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
       font-size: 87.5%;
    }
}
body{
   -webkit-font-smoothing: antialiased;
   .App{
    align-items: center;
   }
}
button{
     cursor:pointer;
 }
 
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
.react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom:0;
    right: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    display: flex;
    input{
        padding: 0.5rem;
        margin: 1rem 0.5rem;
    }
    button{
        padding: 0.5rem 2rem;
        color: white;
        background-color: var(--blue);
        border: none;
        border-radius: 5px;
        margin: 0rem 1rem;
    }
    select{
        padding: 0.5rem;
        margin: 0.5rem 0.5rem;
    }
}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.9);
    }
}
`
