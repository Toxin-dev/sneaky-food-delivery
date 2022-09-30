import propTypes from "prop-types";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

export default function FeaturedFood(props) {
	return (
		<Container as='section'>
			{props.children}
			<Carousel>
				{props.data.map((item, index) => (
					<Carousel.Item key={index}>
						<Image
							src='https://source.unsplash.com/random/?pizza/'
							height={400}
							style={{
								width: "100%",
								objectFit: "cover",
								objectPosition: "right top",
								opacity: ".8",
							}}
						/>
						<Carousel.Caption>
							<Row>
								<h4 className='text-capitalize bg-dark p-2'>
									mountain mike pizza
								</h4>
								<Row className='justify-content-center'>
									<Col>
										<p style={{ width: "max-content" }}>
											Spice and tomato tangy
										</p>
									</Col>
									<Col>
										<p className='text-danger fw-bold'>$35</p>
									</Col>
								</Row>
							</Row>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	);
}

FeaturedFood.propTypes = {
	data: propTypes.array.isRequired,
};
