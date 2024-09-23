import React from 'react';
import Image from 'next/image';
import NavLink from './NavLink';

interface INavLinkElement {
	path: string;
	name: string;
}

const Navbar = () => {
	const navLinks: INavLinkElement[] = [
		{
			path: '/',
			name: 'HOME',
		},
		{
			path: '/about-us',
			name: 'ABOUT US',
		},
		{
			path: '/faqs',
			name: 'FAQS',
		},
		{
			path: '/contact-us',
			name: 'CONTACT US',
		},
	];
	return (
		<div className="navbar bg-base-100 justify-between sticky top-0 px-5 border-b-[1px] z-10 pb-4">
			<Image
				src={'public/logo.png'}
				height={120}
				width={120}
				alt="mount-sinai-hospice-logo"
			/>
			<div className="navbar-end lg:flex lg:navbar-start">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{navLinks.map((link, i) => {
							return (
								<NavLink
									key={i}
									path={link.path}
									name={link.name}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks.map((link, i) => {
						return (
							<NavLink
								key={i}
								path={link.path}
								name={link.name}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
