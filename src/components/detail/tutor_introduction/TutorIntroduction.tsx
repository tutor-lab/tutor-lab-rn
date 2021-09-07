import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

interface Props {
  content: string;
}
const TutorIntroduction = ({content}: Props) => {
  const {widthContent} = useWindowDimensions();
  // const source = {
  //     html: content
  //   };

  const source = {
    html: `
    <p style='text-align:center;'>
    Hello World!
    </p>`,
  };

  return (
    <>
      <RenderHtml contentWidth={widthContent} source={{html: content}} />
    </>
  );
};

export default TutorIntroduction;
