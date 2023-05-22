
import React from 'react';
import styles from './Portafolio.module.scss';
import { PagesProjects } from './components/PagesProjects';
import { CiAvocado } from "react-icons/ci";

export default function Portafolio() {
	return (
		<div className={styles.portafolio}>
			<div className={styles.body__portafolio}>
				<div className={styles.div__container__fortafolio}>
					<div className={styles.div__pages__projects}>
						<PagesProjects
						name="PagesProjects"
						img="https://www.dumpaday.com/wp-content/uploads/2017/03/random-pictures-33-2.jpg"
						imgAlt="logo"
						lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis, alias neque porro nostrum est voluptatem assumenda blanditiis iusto quam quaerat nobis perferendis quidem minus at consectetur eveniet! Nihil, laborum."
						nameButton="Chat"
						routeButton="Portafolio/Chat"
						/>

						<PagesProjects
						name="PagesProjects"
						img="https://cdn.pixabay.com/photo/2014/07/01/15/40/balloon-381334_960_720.png"
						imgAlt="logo"
						lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis, alias neque porro nostrum est voluptatem assumenda blanditiis iusto quam quaerat nobis perferendis quidem minus at consectetur eveniet! Nihil, laborum."
						nameButton="perfiles"
						routeButton="Portafolio/GameTyping"
						/>
						
					</div>
				</div>
			</div>
		</div>
)}



