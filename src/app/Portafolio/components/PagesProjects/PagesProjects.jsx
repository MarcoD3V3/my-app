import React from 'react';
import styles from './PagesProjects.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PagesProjects = ({name, lorem, img, imgAlt, nameButton, routeButton}) => {
	return (
	<div className={styles.pages_projects}>
		<div className={styles.Header__of__Page}>
		<Image 
		className={styles.ImgPerfil}
		src={img}
		alt={imgAlt}
		width={50}
		height={50}
		/>
			<h3>{name}</h3>
		</div>
		<div className={styles.lorem__infoETC}>
			<p>{lorem}</p>
			<button>
				<Link href={routeButton}>
					{nameButton}
				</Link>
			</button>
		</div>
	</div>
)};

export default PagesProjects;
