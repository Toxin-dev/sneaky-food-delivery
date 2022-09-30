import propTypes from "prop-types";

export default function Heading(props) {
	return (
		<>
			<h2 className='text-danger'>{props.primary}</h2>
			<h3 className='text-dark-blue'>{props.secondary}</h3>
		</>
	);
}

Heading.propTypes = {
	primary: propTypes.string,
	secondary: propTypes.string,
};
