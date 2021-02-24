import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;


`;


export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 81px 65px;
  max-width: 815px;
  margin: auto;



`;

export const Item = styled.div`
    color:white;
    margin-bottom: 12px;
    width: 815px;

    &:first-of-type{
        margin-top: 3em;
    }

 
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    align-items:center;
    border-bottom: 1px solid black;
    padding: 0.8em 1.2em;
    user-select: none;

    @media(max-width: 600px){
      font-size: 16px;
    }
`;

export const Img = styled.img`
     width: 24px;
     filter: brightness(0) invert(1);
     color:#FFFFFF;
     opacity: 0.6;
    
    @media(max-width: 600px){
      width: 16px;
    }
`;

export const Body = styled.div`

max-height: 1200px;
transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
font-size: 26px;
font-weight: normal;
line-height: normal;
background: #303030;
padding: 0.8em 2.2em 0.8em 1.2em;
white-space: pre-wrap;
user-selection: none;

@media(max-width: 600px){
  font-size: 16px;
  line-height: 22px;
}

`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;


  @media (max-width: 600px){
      font-size: 35px;
  }

`;
