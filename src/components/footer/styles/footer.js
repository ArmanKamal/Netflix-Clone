import styled from 'styled-components/macro'


export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    margin:auto;
    max-width: 1000px;
    flex-direction: column;


    @media (max-width: 1000px){
        padding: 70px 30px
    }
`;


export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row  = styled.div`
    display: flex;
    justify-content: space-around;

`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
    margin-left:65px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: #757575;
    margin-bottom: 40px;
    margin-left:65px;
`
export const Break = styled.p`
    flex-basics: 100%;
    height: 0;
`