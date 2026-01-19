
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
interface INavlinkProps {
    path: string;
    name: string;
}

const NavLink = ({ path, name}: INavlinkProps) =>  {
	const router = useRouter();
	const pathName = usePathname();
	const handleClick = (e:any)=>{
		e.preventDefault();
		(document.activeElement as HTMLElement | null)?.blur();
		router.push(path);
	}

	const style = {
		backgroundColor: '#604882',
		color: 'white'
	}

	return (
		<li onClick={handleClick} className='text-lg mx-1'>
			<Link
				className={`hover:bg-primary hover:text-white`}
				style={pathName === path ? style: {}}
				href={path}
			>
				{name}
			</Link>
		</li>
	);
};

export default NavLink;