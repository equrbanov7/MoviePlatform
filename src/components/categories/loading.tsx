import React from 'react'
import styles from "./styles.module.css"
import Skeleton from '../skeleton'

const CategoryLoading = () => {
  return (
    <div className={styles.categories}>
        {Array(5).fill(null).map((_,index)=>(
                <Skeleton key={index} height={"72"} width={"100%"} />
        ))}
    </div>
  )
}

export default CategoryLoading