import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,

	
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/Home' >
						Home
					</NavLink>
					
					<NavLink to='/References' >
						References
					</NavLink>
					<NavLink to='/ChooseYourAdvocate' >
						Choose Your Advocate
					</NavLink>
					<NavLink to='/Sections' >
					Sections
					</NavLink>
					<NavLink to='/ContactUs' >
						Contact Us
					</NavLink>
					<NavLink to='/SignUp' >
						Sign Up		
					</NavLink>
					<NavLink to='/Login' >
					Log In	
					</NavLink>
						
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/SignOut'>Sign Out</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
