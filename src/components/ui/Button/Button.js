import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.2rem;
    color:${props=>props.cart? 'var(--mainYellow)' : 'var(--lightBlue)'};
    border:.05rem solid var(--lightBlue);
    border-color:${props=>props.cart? 'var(--mainYellow)' : 'var(--lightBlue)'};
    border-radius:0.5rem;
    margin:0.2rem 0.5rem 0.2rem 0;
    padding: 0.2rem 0.5rem;
    cursor:${props=>props.disabled?'not-allowed':'pointer'};
    transition:all 0.5s ease-in-out;
    background:transparent;
    &:hover{
        background:${props=>props.cart? 'var(--mainYellow)' : 'var(--lightBlue)'};
        color:${props=>props.cart? 'var(--mainBlue)' : 'var(--mainWhite)'};
        border-color:${props=>props.cart? 'var(--mainYellow)' : 'var(--lightBlue)'};
    }
    &:focus{
        outline:none;
    }
    &:disabled{
        background:${props=>props.cart? 'transparent' : 'var(--mainWhite)'};
        color:${props=>props.cart? 'var(--mainGray)' : 'var(--lightBlue)'};
        border-color:${props=>props.cart? 'var(--mainGray)' : 'var(--mainBlue)'};
    }
`;