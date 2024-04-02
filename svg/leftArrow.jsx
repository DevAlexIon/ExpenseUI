import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={18}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.375 8.5l.863-.855 5.41-5.36L1.375 8.5zm0 0H2.59m-1.215 0H2.59m0 0H23a.5.5 0 110 1H1.383l.853.854 5.36 5.36.002.001a.5.5 0 010 .71h0a.501.501 0 01-.355.145h0a.5.5 0 01-.35-.144v-.001l-5.66-5.658s0 0 0 0a2.5 2.5 0 010-3.533s0 0 0 0l5.709-5.659h0a.5.5 0 01.705 0h0M2.59 8.5l5.058-6.925m0 0a.5.5 0 010 .71v-.71z"
        fill="#7F3DFF"
        stroke="#212325"
      />
    </Svg>
  );
}

export default SvgComponent;
