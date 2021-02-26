import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../netflix-logo.svg'

export function HeaderContainer({children}){
    return (
       <Header>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
               <Header.Button to={ROUTES.LOGIN} alt="Login">Sign In</Header.Button>
            </Header.Frame>
           {children}
       </Header>
    )
}

