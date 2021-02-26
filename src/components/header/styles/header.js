import styled from 'styled-components/macro'
import {Link} from  'react-router-dom'


export const Background = styled.div`

display: flex;
flex-direction: column;
background: url(${({ src}) => src ? '../images/misc/${src}.jpg' :
            '../images/misc/home-bg.jpg'}) top left / cover no-repeat;

`;

    

export const Container = styled.div`

    display:flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items:center;
`;

export const Logo = styled.img`
    height: 102px;
    width: 167px;
    margin-right: 40px;

    @media (min-width: 1449px){
        height: 150px;
        width: 200px;
    }
`;

export const Button = styled(Link)`

display: block;
background: #e50914;
width: 84px;
heigt: fit-content;
border:0;
color:white;
font-size: 15px;
border-radius: 3px;
padding: 8px 17px;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;

&:hover{
    backgroud-color: # f40612
}


`;

