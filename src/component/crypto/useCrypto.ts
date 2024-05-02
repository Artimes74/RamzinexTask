export const useCrypto = () => {
  const divided = (digit: number) => {
    if (digit.toString().length < 7) {
      return `${(digit / 1000).toFixed(2).toString()}K`;
    } else if (digit.toString().length < 10) {
      return `${(digit / 1000000).toFixed(2).toString()}M`;
    } else {
      return `${(digit / 1000000000).toFixed(2).toString()}B`;
    }
  };

  const isPositive = (number: number) => {
    if (number > 0) {
      return 'positive';
    } else if (number < 0) {
      return 'negative';
    } else {
      return 'neut';
    }
  };
  return {
    divided,
    isPositive,
  };
};
