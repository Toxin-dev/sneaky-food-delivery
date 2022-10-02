import { Card, Row, Col, Image, Container } from "react-bootstrap";

export default function Blog(props) {
	return (
		<Row style={{ width: "calc(100% - 8rem)", margin: "0 auto" }}>
			{props.children}
			{props.data.map((item, index) => (
				<Col md={4}>
					<Card key={index} className='mb-4'>
						<Card.Header className='p-0'>
							<Image
								style={{
									width: "100%",
									height: "280px",
									objectFit: "cover",
									objectPosition: "center",
								}}
								src='https://source.unsplash.com/random/?food'
							/>
						</Card.Header>
						<Card.Body>
							<Container>
								<Row as='span' className='text-gray-600'>
									Admin post / {new Date().toDateString()}
								</Row>
								<Row as='p' className='fs-4'>
									Huge cavity in antarctic glacie signals rapid.
								</Row>
							</Container>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}
