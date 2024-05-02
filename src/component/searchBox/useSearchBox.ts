import React from 'react';
import {marketDatatype} from '../../utils/types';

export const useSearchBox = () => {
  const [text, setText] = React.useState<string>('');
  const inputRef = React.useRef<any>();

  return {
    text,
    setText,
    inputRef,
  };
};
