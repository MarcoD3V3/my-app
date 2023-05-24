'use client'
import Image from 'next/image';
import './NavBar.scss';
import Link from 'next/link';
import React, {useRef  ,useState} from 'react'

const Links_Page = [
	{
		Nombre: 'Home',
		ruta: '/',
	},
	{
		Nombre: 'About',
		ruta: '/About',
	},
	{
		Nombre: 'Contact',
		ruta: '/Contact',
	},
	{
		Nombre: 'portafolio',
		ruta: '/Portafolio',
	}
]




function NavBar (){

		const inputRef = useRef('');
	
		function handleClick() {
			const value1 = inputRef.current.value;
			alert(value1);
		}



	// const [value, setValue] = useState('');

  // function handleChange(event) {
  //   setValue(event.target.value);
	// 	alert(value)
  // }




	return <div className='NavBar'>
		<header>
			<nav>
				<div className='div__logo__navbar'>
					<Image 
					src="/logo_hoja.svg" 
					alt="logo de mi pagina" 
					width={40} 
					height={40}
					/>
				</div>
				<div className='div__container__barSearch'>
					<input 
					type="text" 
					ref={inputRef} 
					placeholder='Search...' 
					autoComplete='false' 
					onSubmit={handleClick} />
				</div>
				<div className='div__ul__links'>
					<ul className='ul__links'>
						{Links_Page.map(({Nombre, ruta}) => (
							<li className='links' key={ruta}>
								<Link className='Links__route' href={ruta}>
									{Nombre}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	</div>;
};

export default NavBar;
