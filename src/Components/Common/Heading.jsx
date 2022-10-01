import propTypes from "prop-types";

export default function Heading(props) {
	return (
		<span className="mb-3">
			<h2 className='text-primary'>{props.primary}</h2>
			<h3 className='text-dark-blue'>{props.secondary}</h3>
		</span>
	);
}

Heading.propTypes = {
	primary: propTypes.string,
	secondary: propTypes.string,
};
