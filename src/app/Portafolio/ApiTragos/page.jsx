'use client'
import React from 'react';
import styles from './ApiTragos.module.scss';
import { TragosAPI } from '@/components/TragosAPI';




export default function  ApiTragos() {
	return (
		<div className={styles.apiTragos}>
			<h1>ApiTragos</h1>
			<TragosAPI/>
		</div>
	)
};


