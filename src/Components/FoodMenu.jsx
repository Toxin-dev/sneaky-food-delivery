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
						src={item.image}
						width={85}
						height={85}
						style={{ objectFit: "cover", objectPosition: "center right" }}
					/>
					<Stack className='my-auto'>
						<h4>{item.title}</h4>
						<p className='text-gray-600' style={{ width: "max-content" }}>
							{item.desctiption}
						</p>
					</Stack>
					<p className='text-danger fw-bold'>${item.price}</p>
				</Stack>
			))}
		</Container>
	);
}

FoodMenu.propTypes = {
	data: propTypes.array.isRequired,
};
