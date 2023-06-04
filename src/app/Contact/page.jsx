'use client'
import React from 'react';
import styles from './Contact.module.scss';
import { ContactForm } from '../../components/ContactForm/index';
const Contact = () => {
	return (
	<div className={styles.Contact}>
		<ContactForm/>
	</div>
)};

export default Contact;
