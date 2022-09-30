import { Container, Col, Row, Image, Button } from "react-bootstrap";
export default props => {
	return (
		<Container>
			<Row>
				<Col sm={6}>
					<Image
						src='https://source.unsplash.com/random/?food/300x600/'
						fluid
					/>
				</Col>
				<Col sm={6}>
					{props.children}
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
						provident. Consequuntur voluptatum distinctio quae dolorem
						molestiae, veniam laborum qui itaque sapiente, eveniet ea eum
						placeat illo odit laboriosam autem perspiciatis?
					</p>
					<Button variant='danger'>Learn more</Button>
				</Col>
			</Row>
		</Container>
	);
};
