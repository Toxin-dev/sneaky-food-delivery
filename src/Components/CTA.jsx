import { Stack, Form, Button } from "react-bootstrap";

export default props => {
	return (
		<Stack
			style={{
				padding: "2rem",
				height: "95vh",
				background:
					"url('https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60') no-repeat center fixed",
				backgroundSize: "cover",
			}}>
			<div
				style={{
					backdropFilter: "blur(20px)",
					borderRadius: "2rem",
					padding: "4rem",
					margin: "auto",
				}}>
				{props.children}{" "}
				<p className='text-dark'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil
					libero consequuntur?
				</p>
				<Form
					onSubmit={e => console.log(e)}
					noValidate
					validated={true}
					className='d-flex flex-column gap-4'>
					<Form.Control
						placeholder='Your Name'
						type='text'
						required></Form.Control>
					<Form.Control
						placeholder='Email Address'
						type='email'
						required></Form.Control>
					<Form.Control
						placeholder='Phone number'
						type='phone'
						required></Form.Control>
					<Form.Control placeholder='Select place' required></Form.Control>
					<Button type='submit' variant='danger'>
						Make reservation
					</Button>
				</Form>
			</div>
		</Stack>
	);
};
