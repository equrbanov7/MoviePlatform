import React from 'react'
import {Loading} from "@/components/loading/index"

import styles from "./styles.module.css"
const FeaturedMovieLoading = () => {
  return (
    <div style={{height:278}} className={styles.movieWrapper}>
        <Loading />
    </div>
  )
}

export default FeaturedMovieLoading