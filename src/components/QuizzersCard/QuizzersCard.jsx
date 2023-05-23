import React from 'react';
import styles from './QuizzersCard.module.scss';
import Image from 'next/image';
import Link from 'next/link'

const QuizzersCard = ({imgURL, imgALT, Tittle, Lorem, buttonNameInfo, buttonNameMore, routeButton1, routeButton2, bgcColorBox}) => {
	return (
	<div className={styles.quizzersCard} style={{backgroundColor: `${bgcColorBox}`}}>
		<div className={styles.QuizzersCard__Container}>
			<h5 className={styles.Tittle__QuizzersCard}>
				{Tittle}
			</h5>
			<div className={styles.img__QuizzersCard}>
				<Image
				width={100}
				height={100}
				src={imgURL} 
				alt={imgALT}
				// objectFit="contain"
				// layout="responsive"
				className={styles.img} 
				/>	
			</div>
			<div className={styles.lorem__QuizzersCard}>
				<p>
					{Lorem}
				</p>
				<button>
					<Link href={routeButton1}>
						{buttonNameInfo}
					</Link>
				</button>
				<button>
					<Link href={routeButton2}>
						{buttonNameMore}
					</Link>
				</button>
			</div>
		</div>
		
	</div>
)};

export default QuizzersCard;
