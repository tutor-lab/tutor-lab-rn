import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';

import {icons} from '../../constants';

type Props = {
  rating?: number;
  size: number;
};

const StarRating = ({rating = 0, size}: Props) => {
  const [starArray, setStarArray] = useState<{id: number; icon: number}[]>();

  useEffect(() => {
    const handleRating = (value: number) => {
      let array: {id: number; icon: number}[] = [];
      let count = 0;

      while (count !== 5) {
        let empty = count + 0.25;
        let half = count + 0.75;
        if (value < empty) {
          array = array.concat({id: count, icon: icons.star_blank});
        } else if (value >= empty && value < half) {
          array = array.concat({id: count, icon: icons.star_half});
        } else {
          array = array.concat({id: count, icon: icons.star});
        }
        count += 1;
      }
      setStarArray(array);
    };
    handleRating(rating);
  }, [rating]);

  return (
    <View style={styles.wrapper}>
      {starArray &&
        starArray.map(item => (
          <WithLocalSvg
            key={item.id}
            asset={item.icon}
            height={size}
            width={size}
          />
        ))}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({wrapper: {flexDirection: 'row'}});
