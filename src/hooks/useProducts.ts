import { useState, useEffect, useRef } from 'react';
import { Product, InitialValuesProps, onChangeArgs } from '../interfaces';

interface useProducsArgs {
  product: Product;
  value?: number;
  initialValues?: InitialValuesProps;
  onChange?: (args: onChangeArgs) => void;
}

export const useProducts = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProducsArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (isMounted.current) return;

    setCounter(value);
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    reset,
    increaseBy,
  };
};
