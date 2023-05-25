import React from 'react';
import styles from './PhotosApi.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const URL_API = "https://picsum.photos/v2/list"


const PhotosApi = ({color}) => {

	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const fetchAllData = async () => {
		try {
			setLoading(true)

			const response = await fetch(URL_API)
			const data = await response.json();
			// console.log(response.status, data)

			if(!data)
				throw 'problemas han pasado'
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
	<div className={styles.photosApi}>
		{loading && !data && 
		<h1>cargando...</h1>
		}

		{data && data.map((item, index) => {
			return (
			<div key={index} className={styles.card} style={{backgroundColor: `${color}`}}>
				<div className={styles.title__card}>
					<h3>
						{item.author}
					</h3>
				</div>
				<div className={styles.img__card}>
					<Image
					src={item.download_url}
					width={200}
					height={200}
					alt={`El autor es: ${item.author}`}
					/>
				</div>
			</div>
			)})
		}
	</div>
	)
};

export default PhotosApi;
