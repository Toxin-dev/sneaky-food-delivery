import proptypes from "prop-types";
import { Col, ListGroup } from "react-bootstrap";
export default function ListView(props) {
	return (
		<Col sm={6}>
			<ListGroup as='ul' className='mb-4'>
				<ListGroup.Item as='li' className='fw-bold fs-5'>
					{props.title}
				</ListGroup.Item>
				{props.item.map(li => (
					<ListGroup.Item action variant='light'>{li}</ListGroup.Item>
				))}
			</ListGroup>
		</Col>
	);
}

ListView.propTypes = {
	title: proptypes.string.isRequired,
	item: proptypes.array.isRequired,
};
