import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 1.5A12 12 0 001.32 8.05a2.06 2.06 0 000 1.9 12 12 0 0021.36 0 2.06 2.06 0 000-1.9A12 12 0 0012 1.5v0z"
        stroke="#91919F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="#91919F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
