"use client"
import React from 'react';
import styles from './About.module.scss';
import { useState,useEffect } from 'react';
// import React from 'react';



const URL_API = "https://jsonplaceholder.typicode.com/todos"

export default function About() {

	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const fetchAllData = async () => {
		try {
			setLoading(true)

			const response = await fetch(URL_API)
			const data = await response.json();
			console.log(response.status, data)

			if(!data)
				throw 'problemas hanpasado'
			setData(data)
		}catch(error) {
			cosole.log(error)
		}finally{
			setLoading(false)
		}
	}
	useEffect(() =>{
		fetchAllData()
	}, [])

return (
	<div className={styles.About}>
		{loading && !data && 
		<p>cargando...</p>
		}

		{data && data.map((item, index) => {
			return <p key={index} >{item.id} - {item.title}</p>
		})}
	</div>
	)
};