import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  rotation: string;
  color: string;
};

const ArrowIcon = (props: Props) => {
  const {width, height, rotation, color} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      style={{transform: [{rotate: rotation}]}}>
      <Path
        d="M39.845,34.165c0.253-0.511,0.193-1.122-0.152-1.575l-14.5-19c-0.568-0.744-1.816-0.744-2.385,0l-14.5,19 c-0.346,0.453-0.405,1.064-0.152,1.575C8.408,34.677,8.93,35,9.5,35h29C39.07,35,39.592,34.677,39.845,34.165z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowIcon;

const styles = StyleSheet.create({});
