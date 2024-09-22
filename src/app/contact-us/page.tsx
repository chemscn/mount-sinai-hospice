import React from 'react';

const ContactUs = () => {
	return (
		<div className="flex flex-col w-full md:items-center m-10">
			<div className="flex flex-col">
				<h1 className=" text-3xl font-bold my-4">Send Us a Message</h1>
				<div className="flex flex-row">
					<label className="form-control w-full max-w-lg">
						<div className="label">
							<span className="label-text">Name</span>
							<span className="label-text-alt">Required*</span>
						</div>
						<input
							type="text"
							placeholder="Ex. John Smith"
							className="flex input input-bordered input-primary flex-row"
						/>
					</label>
				</div>
				<div className="flex flex-col md:flex-row gap-4">
					<label className="form-control w-full max-w-lg">
						<div className="label">
							<span className="label-text">Phone Number</span>
							<span className="label-text-alt">Required*</span>
						</div>
						<input
							type="text"
							placeholder="Ex. (111) 111-1111"
							className="input input-bordered input-primary w-full md:max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-lg">
						<div className="label">
							<span className="label-text">Email</span>
							<span className="label-text-alt">Required*</span>
						</div>
						<input
							type="text"
							placeholder="Ex. example@example.com"
							className="input input-bordered input-primary w-full md:max-w-xs"
						/>
					</label>
				</div>
				<div className="flex flex-col mt-5">
					<textarea
						placeholder="Type your message to us here"
						className="textarea textarea-bordered textarea-primary textarea-lg w-full max-w-lg"
					></textarea>
					<button className="btn btn-primary my-4 text-lg font-bold max-w-lg">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
