import React from 'react';

export const SuccessfulEmailSent = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
				{/* Success Icon */}
				<div className="flex justify-center mb-6">
					<svg
						className="w-16 h-16 text-green-500"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>

				{/* Heading */}
				<h1 className="text-2xl font-bold text-gray-800 mb-4">Email Sent!</h1>

				{/* Message */}
				<p className="text-gray-600 mb-6">
					Thank you for reaching out. Your message has been successfully sent. We’ll get back to you
					shortly.
				</p>

				{/* Button */}
				<a
					href="/"
					className="btn btn-primary text-lg font-bold"
				>
					Back to Home
				</a>
			</div>
		</div>
	);
};
