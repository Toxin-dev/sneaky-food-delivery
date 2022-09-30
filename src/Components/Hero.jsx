import propTypes from "prop-types";
import { Container, Button, Col, Image, Row, Carousel } from "react-bootstrap";

export default function Hero(props) {
	return (
		<Container>
			<Row>
				<Col md={6}>
					<div
						className='d-flex flex-column justify-content-center align-items-center'
						style={{ height: "200px" }}>
						<h1 className='text-center'>
							Foods the <br />
							most precious things
						</h1>
						<div>
							<Button variant='danger'>Book Now</Button>
							<Button variant='link'>Watch video</Button>
						</div>
					</div>
				</Col>
				<Col md='6'>
					<Carousel interval={5000}>
						{props.data.map((item, index) => (
							<Carousel.Item key={index}>
								<Image
									src={`https://source.unsplash.com/random/?${item.dish}`}
									style={{
										background: "red",
										width: "600px",
										height: "400px",
										objectFit: "cover",
										objectPosition: "center center",
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}
Hero.propTypes = {
	data: propTypes.array.isRequired,
};
