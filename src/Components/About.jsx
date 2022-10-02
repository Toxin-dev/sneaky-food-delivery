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
							objectPosition: '0 70%'
						}}
						src='https://images.unsplash.com/photo-1593854823970-54d952ac1931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGJvd2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
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
