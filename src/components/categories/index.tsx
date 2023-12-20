import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface Category {
    id:number,
    name:string,

}

interface CategoriesProps {
    categories: Category[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories?.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`

        }
        passHref
        >
          <div className={styles.name}>{category.name} </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
