import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Linking} from 'react-native';
import Button from '../../components/common/button';
import CheckBox from '@react-native-community/checkbox';
import {fonts, colors} from '../../constants';
interface Props {
  title: string;
  isSelectedParam: boolean;
  setSelectionParam: any;
  linktitle: string;
}
interface TermProps {
  navigation: any;
}
const TermsOfUse = ({navigation}: TermProps) => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isAllCheck, setIsAllCheck] = useState(false);

  const CheckBoxCotainer = ({
    title,
    isSelectedParam,
    setSelectionParam,
    linktitle,
  }: Props) => {
    const seeTerms = (title: string) => {
      // Linking.canOpenURL('http://tutorlab.co.kr/terms');
      if (title == '이용약관') {
        Linking.openURL('http://tutorlab.co.kr/terms');
      } else {
        Linking.openURL('http://tutorlab.co.kr/terms2');
      }
    };
    return (
      <View style={styles.CheckboxContainer}>
        <CheckBox
          value={isSelectedParam}
          onValueChange={setSelectionParam}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          {title}
          <TouchableOpacity onPress={() => seeTerms(title)}>
            <Text>{linktitle}</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  };
  const allCheck = () => {
    setSelection(!isSelected);
    setSelection1(!isSelected1);
    setSelection2(!isSelected2);
  };
  useEffect(() => {
    if (isSelected && isSelected1 && isSelected2) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }
  }, [isSelected, isSelected1, isSelected2]);

  const onNext = () => {
    navigation.navigate('Signup');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.case1} />
        <View style={styles.case2}>
          <View style={{marginTop: '15%'}}>
            <Button.Container divider={100} maxWidth={185}>
              <Button.Button_48 text={'모두 동의'} onPress={allCheck} />
            </Button.Container>
          </View>
        </View>
        <View style={styles.case3}>
          <CheckBoxCotainer
            title="이용약관"
            linktitle="[보기]"
            isSelectedParam={isSelected}
            setSelectionParam={setSelection}
          />
          <CheckBoxCotainer
            title="개인정보 처리 방침"
            linktitle="[보기]"
            isSelectedParam={isSelected1}
            setSelectionParam={setSelection1}
          />
          <CheckBoxCotainer
            title="악의적 콘텐츠 제한 동의"
            linktitle=""
            isSelectedParam={isSelected2}
            setSelectionParam={setSelection2}
          />
          <View style={{marginLeft: '20%', marginRight: '20%'}}>
            <Text>튜터랩은 건강하고 합법적인 콘텐츠를 지향합니다.</Text>
            <Text>
              다음과 같은 콘텐츠를 업로드한 이용자는 경고 또는 서비스 제한을
              받을 수 있습니다.
            </Text>
            <Text>
              1.음란 콘텐츠 2.폭력적 콘텐츠 3.타인의 권리를 침해하는 콘텐츠
              4.기타 튜터랩 운영에 방해가 되는 콘텐츠 악의적 콘텐츠로 판단되는
              콘텐츠가 발견되면 적극적인 신고를 부탁드립니다.
            </Text>
            <View style={{marginTop: '10%'}}>
              {isAllCheck ? (
                <TouchableOpacity style={styles.btnContainer} onPress={onNext}>
                  <View style={styles.btn_box}>
                    <Text style={[fonts[500], styles.btn_text]}>{'다음'}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.btnContainer}>
                  <View style={styles.btn_boxDisable}>
                    <Text style={[fonts[500], styles.btn_text]}>{'다음'}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  case2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  case3: {
    flex: 3,
    backgroundColor: '#fff',
  },
  checkbox: {},
  label: {
    margin: 8,
  },
  CheckboxContainer: {
    flexDirection: 'row',
    marginLeft: '25%',
  },
  btnContainer: {
    height: 48,
    width: '100%',
  },
  btn_box: {
    borderRadius: 8,
    backgroundColor: colors.main,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_boxDisable: {
    borderRadius: 8,
    backgroundColor: colors.main,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  btn_text: {color: colors.white, fontSize: 15},
});
export default TermsOfUse;
