import { ProductContext } from './ProductCard';
import React, { useContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';

export interface ProducTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: ProducTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} + ${className}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  );
};
