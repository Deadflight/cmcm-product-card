import React, { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';

import { useProducts } from '../hooks';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValuesProps,
} from '../interfaces';
// import { ProductTitle, ProductImage, ProductButtons } from "./";
import { ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;
export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  //children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValuesProps;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  value,
  style,
  initialValues,
  onChange,
}: ProductCardProps) => {
  const {
    counter,
    maxCount,
    isMaxCountReached,
    reset,
    increaseBy,
  } = useProducts({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        product,
        maxCount,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} + ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset,
        })}
        {/* <ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
