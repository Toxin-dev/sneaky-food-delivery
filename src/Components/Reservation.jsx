import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
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
				<h2 className='bg-dark p-4 rounded text-white mb-4'>
					Under replenish give saying thing
				</h2>
				<Button variant='danger'>Reservation</Button>
			</div>
		</Stack>
	);
};
