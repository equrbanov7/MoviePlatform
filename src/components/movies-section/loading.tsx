import React from 'react'
import styles from "./styles.module.css"
import Skeleton from '../skeleton'


const MovieSectionLoading = () => {
  return (
    <div className={styles.moviesSection}>
        <Skeleton width={"128"} height={"36"} />

        <div className={styles.movies}>
    {Array(5).fill(null).map((_,index)=> (
        <Skeleton key={index} width={"100%"}  height={"100%"}/>
    ))}
        </div>


    </div>
  )
}

export default MovieSectionLoading