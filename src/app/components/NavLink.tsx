
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
interface INavlinkProps {
    path: string;
    name: string;
}

 const closeDropdown = () => {
    // daisyUI dropdown stays open because focus remains,
    // so we remove focus to close it
    (document.activeElement as HTMLElement | null)?.blur();
  };

const NavLink = ({ path, name}: INavlinkProps) =>  {
	const router = useRouter();
	const pathName = usePathname();
	const handleClick = ()=>{
		router.push(path);
	}

	const style = {
		backgroundColor: '#604882',
		color: 'white'
	}

	return (
		<li onClick={closeDropdown} className='text-lg mx-1'>
			<Link
				onClick={handleClick}
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