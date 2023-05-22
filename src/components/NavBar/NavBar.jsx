import Image from 'next/image';
import './NavBar.scss';
import Link from 'next/link';

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

const NavBar = () => {
	return <div className='NavBar'>
		<header>
			<div className='div__logo__navbar'>
				<Image 
				src="/logo_hoja.svg" 
				alt="logo de mi pagina" 
				width={40} 
				height={40}
				/>
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
		</header>
	</div>;
};

export default NavBar;
