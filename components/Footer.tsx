import React from 'react';

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<>
			<footer className="footer bg-gray-100 text-base-content p-10 justify-between">
				<nav className="text-md">
					<h6 className="footer-title font-extrabold">Locations</h6>
					<a
						href="https://maps.app.goo.gl/q47eGDyjFUqYuC7t5"
						className="link link-hover flex flex-row"
						target="_blank"
					>
						<svg
							className="w-6 h-6 text-primary me-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								className="fill-current text-primary"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
							/>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
							/>
						</svg>
						<p>513 E Jackson Ave. ste 201, Harlingen, TX 78550</p>
					</a>
					<a
						target="_blank"
						href="https://maps.app.goo.gl/G7tig3REFxHKVuLQA"
						className="link link-hover flex flex-row"
					>
						<svg
							className="w-6 h-6 text-primary me-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								className="fill-current text-primary"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
							/>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
							/>
						</svg>
						<p>101 Goodwin Ave. Suite #350, Victoria, TX 77901</p>
					</a>
				</nav>
				<nav className="text-md">
					<h6 className="footer-title font-extrabold">On Call Nurse - 24/7</h6>
					<a
						href="tel:+19562301627"
						className="link link-hover flex flex-row"
						target="_blank"
					>
						<svg
							className="w-6 h-6 fill-current text-primary me-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
							/>
						</svg>
						(956) 230-1627
					</a>
					<a
						href="tel:+19565450234"
						className="link link-hover flex flex-row"
						target="_blank"
					>
						<svg
							className="w-6 h-6 fill-current text-primary me-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z"
								clipRule="evenodd"
							/>
						</svg>
						(956) 545-0234
					</a>
				</nav>
				<nav>
					<h6 className="footer-title text-md font-extrabold">Social</h6>
					<div className="flex flex-row justify-between gap-6">
						<a
							title="instagram"
							aria-label="instagram"
							target="_blank"
							href="https://www.instagram.com/mountsinaihospice/?igsh=YTdnYzFlcThwbXk%3D"
							className="flex flex-col items-center hover:animate-bounce hover:text-primary hover:cursor-pointer text-md font-bold"
						>
							<svg
								className="w-8 h-8 fill-current text-primary"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
									clipRule="evenodd"
								/>
							</svg>
							Instagram
						</a>
						<a
							title="facebook"
							aria-label="facebook"
							target="_blank"
							href="https://www.facebook.com/share/p/9VigKkevUDCXzEST/?mibextid=QwDbR1"
							className="flex flex-col items-center hover:animate-bounce hover:text-primary hover:cursor-pointer text-md font-bold"
						>
							<svg
								className="w-8 h-8 fill-current text-primary"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fillRule="evenodd"
									d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
									clipRule="evenodd"
								/>
							</svg>
							Facebook
						</a>
						<a
							title="mail"
							aria-label="mail"
							href="mailto:mahdi@mountsinaihospice.net"
							className="flex flex-col items-center hover:animate-bounce hover:text-primary hover:cursor-pointer text-md font-bold"
						>
							<svg
								className="w-8 h-8 fill-current text-primary"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
								<path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
							</svg>
							Email
						</a>
					</div>
				</nav>
			</footer>
			<div className="bg-gray-100">
				<p className="text-center">&copy; {date}, Mount Sinai Hospice, All Rights Reserved.</p>
				<p className="text-center py-2">created by Diyar Karim</p>
			</div>
		</>
	);
};

export default Footer;
