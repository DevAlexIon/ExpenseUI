import * as React from 'react';
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg';

function SecondSVGComponent() {
  return (
    <Svg width={312} height={312} viewBox="0 0 312 312" fill="none">
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={312}
        height={312}>
        <Rect width={312} height={312} rx={40} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M58.691 79.943C78.718 63.537 136 54.478 162.135 52c-11.121 5.729-30.535 26.713-19.216 64.814-40.106 6.658-82.331 18.767-98.43 23.99-3.61-13.452-5.825-44.456 14.202-60.861z"
          fill="#E5E5EE"
        />
        <Path
          d="M58.691 79.943C78.718 63.537 136 54.478 162.135 52c-11.121 5.729-30.535 26.713-19.216 64.814-40.106 6.658-82.331 18.767-98.43 23.99-3.61-13.452-5.825-44.456 14.202-60.861z"
          fill="url(#paint0_linear_1271_5668)"
          fillOpacity={0.36}
        />
        <Path
          d="M53.577 82.727a22.006 22.006 0 012.136-1.468C75.06 68.41 124.2 46.849 183.33 53.118c32.811 5.33 36.043 75.256 33.557 109.553-3.48 29.115-1.79 82.608 32.811 63.658-16.704 17.766-51.205 28.129-66.368 31.09-33.557 16.038-99.478 22.651-94.706-79.204 4.534-96.768-18.843-105.43-32.912-96.956-.758.503-1.47.993-2.136 1.468z"
          fill="#D2D2D2"
        />
        <Path
          d="M53.577 82.727a22.006 22.006 0 012.136-1.468C75.06 68.41 124.2 46.849 183.33 53.118c32.811 5.33 36.043 75.256 33.557 109.553-3.48 29.115-1.79 82.608 32.811 63.658-16.704 17.766-51.205 28.129-66.368 31.09-33.557 16.038-99.478 22.651-94.706-79.204 4.534-96.768-18.843-105.43-32.912-96.956-.758.503-1.47.993-2.136 1.468z"
          fill="url(#paint1_linear_1271_5668)"
        />
        <Path
          d="M246.623 244.377C225.847 259.882 149 268.5 140 266.5c11.377-5.218 33.758-24.359 24.26-63.12 40.365-4.77 83.105-14.908 99.429-19.38 2.968 13.666 3.71 44.873-17.066 60.377z"
          fill="#F1F1FA"
        />
        <Path
          d="M246.623 244.377C225.847 259.882 149 268.5 140 266.5c11.377-5.218 33.758-24.359 24.26-63.12 40.365-4.77 83.105-14.908 99.429-19.38 2.968 13.666 3.71 44.873-17.066 60.377z"
          fill="url(#paint2_linear_1271_5668)"
          fillOpacity={0.16}
        />
        <Path
          d="M306 104.051c-25.254 10.557-37.221 29.031-40.048 36.949-6.785-27.448-41.462-45.454-57.952-51.025 8.292 1.76 16.019-6.305 18.846-10.557 22.144-2.053 68.977 0 79.154 24.633z"
          fill="#B18AFF"
        />
        <Path
          d="M270.664 102.291c-1.987 3.515-8.875 5.048-15.549 1.76-6.673-3.288-12.192-9.917-10.206-13.431 1.987-3.514 15.311-3.288 21.985 0 6.674 3.288 5.756 8.157 3.77 11.671z"
          fill="#7F3DFF"
        />
        <Path
          d="M306 104.051c-25.254 10.557-37.221 29.031-40.048 36.949-6.785-27.448-41.462-45.454-57.952-51.025 8.292 1.76 16.019-6.305 18.846-10.557 22.144-2.053 68.977 0 79.154 24.633z"
          fill="url(#paint3_radial_1271_5668)"
          fillOpacity={0.64}
        />
        <Path
          d="M74 204.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5z"
          fill="#B18AFF"
        />
        <Ellipse
          cx={58.6058}
          cy={175.023}
          rx={15.1661}
          ry={12.6384}
          transform="rotate(-46.537 58.606 175.023)"
          fill="#7F3DFF"
        />
        <Path
          d="M74 204.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5z"
          fill="url(#paint4_linear_1271_5668)"
          fillOpacity={0.46}
        />
        <G filter="url(#filter0_f_1271_5668)">
          <Path
            d="M74 205.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5z"
            fill="url(#paint5_linear_1271_5668)"
            fillOpacity={0.64}
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1271_5668"
          x1={76}
          y1={136.5}
          x2={123}
          y2={41.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopOpacity={0.24} />
          <Stop offset={0.59375} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1271_5668"
          x1={106.5}
          y1={52}
          x2={209}
          y2={256.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1271_5668"
          x1={203.638}
          y1={200.985}
          x2={203.638}
          y2={349.485}
          gradientUnits="userSpaceOnUse">
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <RadialGradient
          id="paint3_radial_1271_5668"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(69.99996 32.00002 -50.43088 110.31741 218.5 80.5)">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="paint4_linear_1271_5668"
          x1={85}
          y1={138}
          x2={37}
          y2={231}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.421875} stopColor="#E3E3E3" stopOpacity={0.627968} />
          <Stop offset={0.765625} stopColor="#636363" stopOpacity={0.32483} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_1271_5668"
          x1={85}
          y1={139}
          x2={37}
          y2={232}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.421875} stopColor="#E3E3E3" stopOpacity={0.627968} />
          <Stop offset={0.765625} stopColor="#636363" stopOpacity={0.32483} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SecondSVGComponent;
