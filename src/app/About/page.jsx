"use client"
import React from 'react';
import styles from './About.module.scss';
import { PhotosApi } from '../../components/PhotosApi/index';


export default function About() {
	return (
		<div className={styles.About}>
			<PhotosApi
			color='#8889'
			/>
		</div>
	)
};