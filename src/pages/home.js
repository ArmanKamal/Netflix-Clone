import React from 'react'
import { FeatureContainer } from '../containers/feature';
import { FaqsContainer } from "../containers/faqs";
import FooterContainer from "../containers/footer";
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from "../containers/jumbotron";
function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer />
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
       
        </>
    )
}

export default Home
