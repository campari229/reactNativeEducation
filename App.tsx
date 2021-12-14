import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Svg, {Circle, SvgUri, SvgXml} from 'react-native-svg';

import Icon from './icons/icon-apple-pay.svg';

const xml = `<svg  viewBox="0 0 15 19"  xmlns="http://www.w3.org/2000/svg">
<path d="M9.55431 3.0015C8.93708 3.7881 7.94995 4.4091 6.96172 4.3194C6.83916 3.2568 7.32278 2.1252 7.88922 1.4283C8.50535 0.619851 9.58522 0.0437 10.4597 0C10.5624 1.10745 10.1616 2.19305 9.55431 3.0015ZM10.3449 4.87025C8.90505 4.87025 7.87486 5.68215 7.20243 5.68215C6.51895 5.68215 5.4998 4.8806 4.32165 4.8806C2.88182 4.8806 1.4718 5.8144 0.727586 7.176C-0.800582 9.89805 0.330086 13.9288 1.80746 16.1448C2.5318 17.2419 3.40519 18.4 4.58334 18.4C5.66322 18.3574 6.0287 17.7238 7.33272 17.7238C8.64668 17.7238 9.03535 18.4 10.2135 18.4C11.3916 18.4 12.106 17.2845 12.8293 16.1863C13.6552 14.942 13.9909 13.7275 14.0107 13.6643C13.9909 13.6436 11.7295 12.7466 11.7085 10.0453C11.6887 7.7878 13.4918 6.71025 13.5735 6.647C12.5543 5.08645 10.8683 4.8691 10.4763 4.8691L10.3449 4.87025Z" />
</svg>`;

const App = () => {
  const [circleColor, setCircleColor] = useState<'purple' | 'red'>('purple');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Svg height="300px" width="100%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="50"
            stroke="purple"
            strokeWidth=".5"
            fill={circleColor}
          />
        </Svg>
        <SvgUri
          width="100%"
          height="300px"
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
        />

        <SvgXml
          xml={xml}
          fill={circleColor}
          style={{width: '100%', height: '300px'}}
        />

        <Icon width="100%" height="300px" fill={circleColor} />

        <Button
          onPress={() =>
            setCircleColor(circleColor === 'purple' ? 'red' : 'purple')
          }
          title="Switch color"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
