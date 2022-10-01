import { Container, Col, Row, Image, Button } from "react-bootstrap";
export default props => {
	return (
		<Container>
			<Row>
				<Col sm={5}>
					<Image
						style={{
							height: "300px",
							width: "100%",
							objectFit: "cover",
							objectPosition: "top",
						}}
						src='https://source.unsplash.com/random/?food/300x600/'
					/>
				</Col>
				<Col sm={7} className='d-flex flex-column justify-content-end'>
					{props.children}
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
						provident. Consequuntur voluptatum distinctio quae dolorem
						molestiae, veniam laborum qui itaque sapiente, eveniet ea eum
						placeat illo odit laboriosam autem perspiciatis?
					</p>
					<Button variant='primary' className='w-sm-max'>
						Learn more
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
