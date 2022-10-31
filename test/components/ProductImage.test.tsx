import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render the component with a custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https:\\hola.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
