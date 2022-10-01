import { Container, Row, Stack } from "react-bootstrap";
export default props => {
	return (
		<Container as='footer'>
			<Row>{props.children}</Row>
			<Stack direction='horizontal'>
				Copyright &copy; {new Date().getFullYear()} All rights reserved | This
				template is taken from&nbsp;
				<a
					target='_blank'
					href='https://preview.colorlib.com/#sneaky'
					className='text-decoration-none text-primary'>
					Colorlib
				</a>
			</Stack>
		</Container>
	);
};
