import propTypes from "prop-types";
import { useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

export default function FeaturedFood(props) {
	return (
		<Container as='section'>
			{props.children}
			<Carousel indicatorLabels={["test1"]}>
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
							<Row as='span'>
								<Col
									as='h4'
									xs={6}
									className='mx-auto text-capitalize py-1'
									style={{ background: "rgba(10,10,10,.4)" }}>
									mountain mike pizza
								</Col>
								<Row className='justify-content-center'>
									<Col as='p' xs='auto'>
										Spicey and tangy tomato flavour
									</Col>
									<Col as='p' xs='auto'>
										$35
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
