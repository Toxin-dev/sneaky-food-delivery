import { Card, Image, Container } from "react-bootstrap";

export default props => {
	return (
		<Container className='d-flex flex-wrap'>
			{props.children}
			{props.data.map((item, index) => (
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
							width={300}
							height={400}
							src='https://source.unsplash.com/random/?person'
							fluid
						/>
					</Card.Body>
					<Card.Footer className='text-center'>
						<h4>Daniesl Laron</h4>
						<p className='text-gray-600'>Executive Chef</p>
					</Card.Footer>
				</Card>
			))}
		</Container>
	);
};
