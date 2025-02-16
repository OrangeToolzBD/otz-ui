import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import type {IIconProps} from '../types/types';

export default  function YoutubeIcon({size, width, height, ...props }:IIconProps) {
  return (
    <Svg width={size || width || 24} height={size || height || 24} viewBox="0 0 28 28" fill="none" {...props}>
      <G clipPath="url(#clip0_249_8)">
        <Path
          d="M23.506 6.239a3.007 3.007 0 00-2.116-2.116C19.512 3.61 12 3.61 12 3.61s-7.512 0-9.39.495A3.068 3.068 0 00.493 6.239C0 8.117 0 12.01 0 12.01s0 3.915.494 5.773a3.007 3.007 0 002.116 2.115c1.897.514 9.39.514 9.39.514s7.512 0 9.39-.494a3.007 3.007 0 002.116-2.115C24 15.926 24 12.03 24 12.03s.02-3.914-.494-5.792z"
          fill="red"
        />
        <Path d="M9.608 15.61l6.247-3.599-6.247-3.598v7.196z" fill="#fff" />
      </G>
      <Defs>
        <ClipPath id="clip0_249_8">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}