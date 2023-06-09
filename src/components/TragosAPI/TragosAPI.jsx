'use client'
import React, { useState, useEffect } from 'react';
import styles from './TragosAPI.module.scss';
import Image from 'next/image';
import { PuffLoader  } from 'react-spinners';
import { css } from '@emotion/react';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;




const URL_API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

const TragosAPI = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL_API);
      const result = await response.json();

      if (!result.drinks) {
        throw new Error('Ha ocurrido un problema al consumir la API');
      }

      setData(result.drinks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className={styles.TragosAPI}>
      {loading && <div className={styles.containerLoading}><PuffLoader className={styles.iconLoading} css={override} size={100} color={"#888"} loading={true} /></div>}

      {data.map(({ idDrink, strDrinkThumb, strDrink }) => (
        <div key={idDrink} className={styles.cad}>
          <h2>{strDrink}</h2>
					<Image
					src={strDrinkThumb}
					alt="hola"
					width={300}
					height={300}
					/>
        </div>
      ))}
    </div>
  );
};

export default TragosAPI;
