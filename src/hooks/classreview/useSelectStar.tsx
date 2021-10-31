import {useCallback, useState} from 'react';
import {Data} from '../../components/common';

const useSelectStar = (initialVal = Data.StarSelectData) => {
  const [stars, setStars] =
    useState<{id: number; isSelected: boolean}[]>(initialVal);

  const rating = useCallback(
    (value: {id: number; isSelected: boolean}) => {
      const star = stars.map(item =>
        item.id > value.id
          ? {...item, isSelected: false}
          : {...item, isSelected: true},
      );
      setStars(star);
    },
    [stars],
  );

  return [stars, rating];
};

export default useSelectStar;
