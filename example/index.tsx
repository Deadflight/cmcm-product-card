import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const productExample = {
  id: '1',
  title: 'Coffee Mug 1',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={productExample}
      initialValues={{
        count: 0,
        maxCount: 14,
      }}
    >
      {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
