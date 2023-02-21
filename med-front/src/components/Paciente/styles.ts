import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 2rem;
margin: 1rem 2rem;
align-items: center;
justify-content:  space-between;
width: 50rem;
border: 1px solid var(--blue);
div.left{
}
div.right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        padding: 1rem;
    }
}
`