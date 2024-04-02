import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GoogleIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.074 13.389H28v-.056H16v5.334h7.535C22.436 21.77 19.482 24 16 24a8 8 0 010-16c2.04 0 3.895.77 5.307 2.026l3.772-3.771A13.272 13.272 0 0016 2.667C8.637 2.667 2.667 8.637 2.667 16S8.637 29.333 16 29.333 29.333 23.363 29.333 16c0-.894-.092-1.767-.259-2.611z"
        fill="#FFC107"
      />
      <Path
        d="M4.204 9.794l4.38 3.213A7.997 7.997 0 0116 8c2.04 0 3.895.77 5.307 2.026l3.772-3.771A13.272 13.272 0 0016 2.667c-5.121 0-9.563 2.891-11.796 7.127z"
        fill="#FF3D00"
      />
      <Path
        d="M16 29.333c3.444 0 6.573-1.318 8.94-3.461l-4.127-3.492A7.941 7.941 0 0116 24c-3.468 0-6.413-2.211-7.522-5.297l-4.348 3.35c2.207 4.318 6.688 7.28 11.87 7.28z"
        fill="#4CAF50"
      />
      <Path
        d="M29.074 13.389H28v-.056H16v5.334h7.535a8.027 8.027 0 01-2.724 3.714l.002-.002 4.126 3.492c-.292.266 4.394-3.204 4.394-9.871 0-.894-.092-1.767-.259-2.611z"
        fill="#1976D2"
      />
    </Svg>
  );
}

export default GoogleIcon;
