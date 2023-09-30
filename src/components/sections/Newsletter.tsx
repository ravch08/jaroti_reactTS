import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools';

import { Stack } from "@mui/system";

const Newsletter = () => {
	// eslint-disable-next-line no-unused-vars
	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onFormSubmit = (data) => {
		console.log("Form Submitted", data);
		reset();
	};

	return (
		<section className="newsletter" aria-labelledby="Newsletter">
			<div className="container">
				<div className="newsletter-wrapper">
					<div className="section-heading">
						<h2>Subscribe to Our Newsletter</h2>
						<p>Sign up to our Newsletter and get the discount code.</p>
					</div>

					<form onSubmit={handleSubmit(onFormSubmit)} noValidate>
						<Stack width={"80%"} direction={"row"} alignItems={"center"} justifyContent={"center"}>
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								id="email"
								placeholder="Enter email address..."
								{...register("email", {
									required: {
										value: true,
										message: "email is required!",
									},
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "invalid email format",
									},
									validate: {
										notBlacklisted: (fieldValue) => {
											!fieldValue.endsWith("yahoo.com") || "This domain is not Supported.";
										},
									},
								})}
							/>
						</Stack>
						<p className="form-error">{errors.email?.message}</p>
						<button type="submit" className="btn btn-dark">
							Subscribe
						</button>
					</form>
					{/* <DevTool control={control} /> */}
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
