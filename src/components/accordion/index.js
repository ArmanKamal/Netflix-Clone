import React, { createContext, useContext, useState } from 'react'
import { Container , Img, Title, Item, Inner, Header, Body} from './styles/accordion'

const ToggleContext = createContext();


export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}



Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);


    return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
        <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}{...restProps}>
    { children }
    {toggleShow ? (<Img src="./images/icons/cancel.svg" />)
                :(<Img src="./images/icons/plus.svg" />)
    }
    </Header >
}

Accordion.Body = function AccordionBody({ children, ...restProps }){
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body { ...restProps}>{children}</Body> : null;
}



