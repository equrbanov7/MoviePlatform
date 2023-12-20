import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";



// Types

interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  id: number;
  // Add other properties if needed
}

interface FeaturedMovieProps {
  movie?: Movie;
  isCompact?: boolean;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({
  movie = {} as Movie,
  isCompact = true,
}) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title} </h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}{" "}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>

        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
