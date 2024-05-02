import React from 'react';
import {View, Text} from 'react-native';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  rotation: string;
  color: string;
};

const Back = (props: Props) => {
  const {width, height, color, rotation} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      style={{transform: [{rotate: rotation}]}}>
      <Path
        d="M 43.486328 11.978516 A 1.50015 1.50015 0 0 0 42.439453 12.439453 L 24 30.878906 L 5.5605469 12.439453 A 1.50015 1.50015 0 0 0 4.484375 11.984375 A 1.50015 1.50015 0 0 0 3.4394531 14.560547 L 22.939453 34.060547 A 1.50015 1.50015 0 0 0 25.060547 34.060547 L 44.560547 14.560547 A 1.50015 1.50015 0 0 0 43.486328 11.978516 z"
        fill={color}
      />
    </Svg>
  );
};

export default Back;
