import React from 'react'
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Profile from './Profile'

const NavBar: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color='primary' dark expand='lg' fixed='top'>
                <Container>
                    <NavLink to='/' className={'navbar-brand'}>InfoSys</NavLink>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to='/' className='nav-link'>
                                    Home
                                </NavLink>
                            </NavItem>
                            {
                                // to add stuff to the navbar, add a NavItem tag with a NavLink to the route
                            }
                            <NavItem>
                                <NavLink to='/submission' className = 'nav-link'>Submit a Message!</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/queued-messages' className = 'nav-link'>Queued Messages</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className='ml-auto'>
                            <Profile />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar