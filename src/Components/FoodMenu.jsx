import propTypes from "prop-types";
import { Container, Col, Row, Image, Stack } from "react-bootstrap";
export default function FoodMenu(props) {
	return (
		<Container as='section'>
			{props.children}
			{props.data.map((item, index) => (
				<Stack
					key={index}
					direction='horizontal'
					gap={2}
					className='mb-3 p-3'
					style={{ boxShadow: "0 0 10px rgba(200,200,200,.5)" }}>
					<Image
						className='rounded-circle'
						src='https://source.unsplash.com/random/?food'
						width={85}
						height={85}
						style={{ objectFit: "cover", objectPosition: "center right" }}
					/>
					<Stack className='my-auto'>
						<h4>Roasted Maarow</h4>
						<p className='text-gray-600' style={{ width: "max-content" }}>
							cold drinks, franch fries for best price
						</p>
					</Stack>
					<p className='text-danger fw-bold'>$32</p>
				</Stack>
			))}
		</Container>
	);
}

FoodMenu.propTypes = {
	data: propTypes.array.isRequired,
};
