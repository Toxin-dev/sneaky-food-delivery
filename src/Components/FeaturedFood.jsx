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
							src={item.image}
							height={400}
							style={{
								background: "rgb(22,22,20)",
								width: "100%",
								objectFit: "contain",
							}}
						/>
						<Carousel.Caption>
							<Row as='span'>
								<Col
									as='h4'
									xs={6}
									className='mx-auto text-capitalize py-1'
									style={{ background: "rgba(10,10,10,.4)" }}>
									{item.title}
								</Col>
								<Row className='justify-content-center'>
									<Col as='p' xs='auto'>
										{item.description}
									</Col>
									<Col as='p' xs='auto' className='border bg-dark'>
										@ {item.price}
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
