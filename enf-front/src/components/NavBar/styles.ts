import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid white;
    background-color: var(--blue);
    color: var(--white);
    div.left{
        h1{
            color:white;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            margin-left: 1rem;
        }
    }
    div.right{
        button{
            padding: 0.5rem;
            margin-right: 1rem;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            color: var(--blue);
            background-color: var(--white);
            border-radius: 5px;
            font-weight: bold;
            border: none;
            transition: filter 0.5s;
            width: 5rem;
            &:hover{
                filter: brightness(0.8);
            }
        }
    }
`
export const StyledLink = styled(NavLink)`
            text-decoration:none;
            list-style: none;
            color: var(--white);
            padding: 1rem;
            margin-right: 1rem;
            transition: filter 0.5s;
            width: 90%;
            text-align: center;
            position:relative;
            &:hover{
                filter: brightness(0.8);
                cursor: pointer;
            }
            &.active::after{
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 0;
                left:0;
                background-color: var(--white);
            }
`

export const Teste = styled.div`
    
`