import React from 'react';
import './Footer.scss';
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
	return <div className='Footer'>
		<div className='div__logo'>
			<Text color={'#999'} fontSize={'30px'} as='b' >Footer</Text>
		</div>
		<div className='div__ul__links'>
			<ul className='ul__links'>
				<li className='links'>faceb</li>
				<li className='links'>twitt</li>
				<li className='links'>insta</li>
				<li className='links'>faceb</li>
				<li className='links'>twitt</li>
				<li className='links'>insta</li>
			</ul>
		</div>
	</div>;
};

export default Footer;
