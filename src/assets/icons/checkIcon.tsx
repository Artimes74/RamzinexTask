import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width: number | string;
  height: number | string;
  color: string;
};

const CheckIcon = (props: Props) => {
  const {width, height, color} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill-rule="evenodd"
        d="M 22.59375 3.5 L 8.0625 18.1875 L 1.40625 11.5625 L 0 13 L 8.0625 21 L 24 4.9375 Z"
        fill={color}
      />
    </Svg>
  );
};

export default CheckIcon;
