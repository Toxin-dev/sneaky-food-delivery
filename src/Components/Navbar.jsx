import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
export default props => {
	return (
		<Navbar expand='lg' fixed='top' className='bg-white'>
			<Container>
				<Navbar.Brand as='h1'>Sneaky</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className='p-4 mt-2 ms-auto'>
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>About</Nav.Link>
						<Nav.Link>Menu</Nav.Link>
						<Nav.Link>Chef</Nav.Link>
						<Nav.Link>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
