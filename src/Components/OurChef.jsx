import { Card, Col, Image, Row } from "react-bootstrap";

export default props => {
	return (
		<Row style={{ width: "calc(100% - 8rem)", margin: "0 auto" }}>
			{props.children}
			{props.data.map((item, index) => (
				<Col md={6} lg={4}>
					<Card
						key={index}
						className='w-md-max'
						as='section'
						style={{
							margin: "20px auto",
							boxShadow: "5px 10px 4px rgba(220,220,220)",
						}}>
						<Card.Body>
							<Image
								style={{
									height: "400px",
									width: "100%",
									objectFit: "cover",
									objectPosition: "bottom center",
									borderRadius: "10px 10px 0 0",
								}}
								src={item.profile_picture}
							/>
						</Card.Body>
						<Card.Footer className='text-center'>
							<h4>{item.name}</h4>
							<p className='text-gray-600'>{item.position}</p>
						</Card.Footer>
					</Card>
				</Col>
			))}
		</Row>
	);
};
