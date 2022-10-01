import React from "react";
import { Button, Stack } from "react-bootstrap";
export default () => {
	return (
		<Stack
			style={{
				background:
					"url('https://source.unsplash.com/random/?cooking') no-repeat center center",
				backgroundPosition: "fit",
				height: "500px",
			}}>
			<div className='m-auto text-center'>
				<h2
					className='p-4 rounded text-white mb-4'
					style={{ background: "rgba(var(--bs-dark-rgb), .8)" }}>
					Under replenish give saying thing
				</h2>
				<Button variant='primary' size='lg'>
					Reservation
				</Button>
			</div>
		</Stack>
	);
};
