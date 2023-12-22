import React from 'react'
import styles from "./styles.module.css"

interface SkeletonProps{
    width:string,
    height:string
}

const Skeleton:React.FC<SkeletonProps> = ({width, height}) => {
    const skeletonStyle = {
        width: width === 'auto' ? 'auto' : `${width}px`,
        height: `${height}px`,
      };
  return (
    <div className={styles.skeleton} style={skeletonStyle}></div>
  )
}

export default Skeleton