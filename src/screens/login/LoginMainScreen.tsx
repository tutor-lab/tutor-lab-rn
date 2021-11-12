import React, {useState, useCallback, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, Alert, Android} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GOOGLE_CLIENT_ID, GOOGLE_WEB_CLIENT_ID} from 'react-native-dotenv';
import axios from 'axios';
import {WithLocalSvg} from 'react-native-svg/src';
import {authorize} from 'react-native-app-auth';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {height, width, icons} from '../../constants';
import {
  Button,
  TextInput,
  ErrorText,
  Commonstyles,
} from '../../components/common';

interface Props {
  navigation: NativeStackNavigationProp<LoginStackParamList>;
  route: RouteProp<LoginStackParamList, 'LoginMain'>;
}
const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};
const LoginMainScreen = ({route, navigation}: Props) => {
  const [username, setUsername] = useState({text: '', error: ''});
  const [password, setPassword] = useState({text: '', error: ''});
  const [result, setResult] = useState<string>('');
  const [authState, setAuthState] = useState(defaultAuthState);
  const configs: any = {
    google: {
      issuer: 'https://accounts.google.com',
      clientId: GOOGLE_CLIENT_ID,
      redirectUrl: 'https://f35dd0783aa2.ngrok.io/oauth/google/callback',
      scopes: ['openid', 'profile', 'email'],
      usePKCE: false,
    },
  };

  // useEffect(() => {
  //   configureGoogleSign();
  // }, []);

  // function configureGoogleSign() {
  //   GoogleSignin.configure({
  //     webClientId: GOOGLE_WEB_CLIENT_ID,
  //     offlineAccess: false,
  //   });
  // }

  const handleAuthorize = useCallback(
    async provider => {
      try {
        const config = configs[provider];
        const newAuthState = await authorize(config);

        console.log('newAuthState', newAuthState);
        // setAuthState({
        //   hasLoggedInOnce: true,
        //   provider: provider,
        //   ...newAuthState
        // });
      } catch (error) {
        Alert.alert('Failed to log in123', error.message);
      }
    },
    [authState],
  );

  const onLogin = () => {
    AsyncStorage.removeItem('accessToken');
    if (username.text.length === 0) {
      setUsername({text: '', error: '아이디를 입력해 주세요.'});
    } else if (password.text.length === 0) {
      setUsername({...username, error: ''});
      setPassword({text: '', error: '비밀번호를 입력해 주세요.'});
    } else {
      axios
        .post('/login', {
          username: username.text,
          password: password.text,
        })
        .then(function (response) {
          const statusCode = response.status;
          if (statusCode === 200) {
            AsyncStorage.mergeItem('accessToken', response.data.split(' ')[1]);
            navigation.replace('Main');
          }
          // console.log(Object.keys(response.headers))
        })
        .catch(function (error) {
          const statusCode = error.response.data.code;
          if (statusCode === 401) {
            setUsername({
              text: '',
              error: '아이디 또는 비밀번호를 잘못 입력하셨습니다.',
            });
            setPassword({
              text: '',
              error: '아이디 또는 비밀번호를 잘못 입력하셨습니다.',
            });
          }
        });
    }
  };

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    // console.log("token=",token)
    setResult(JSON.stringify(token));
    const profile: KakaoProfile = await getKakaoProfile();
    // console.log("profile=",profile)
    handleAuthorize('auth0');
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();
    console.log('profile=', profile);

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  async function googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log("userInfo==",userInfo);
      handleAuthorize('google');
      // setUserInfo(userInfo);
      // setError(null);
      // setIsLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        Alert.alert('Play services are not available');
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        // setError(error);
      }
    }
  }

  return (
    <SafeAreaView style={[Commonstyles.container, styles.container]}>
      <KeyboardAwareScrollView style={styles.scroll}>
        <View style={styles.padding}>
          <View style={styles.logoContainer}>
            <WithLocalSvg asset={icons.logo} />
          </View>
          <View style={{marginTop: height * 72}}>
            <View style={Commonstyles.textInputContainer}>
              <View style={Commonstyles.textInputWrapper}>
                <TextInput
                  value={username.text}
                  placeholder={'ID(Email)'}
                  onChangeText={(e: string) =>
                    setUsername({...username, text: e})
                  }
                />
              </View>
              {username.error.length !== 0 && (
                <ErrorText text={username.error} />
              )}
            </View>
            <View style={Commonstyles.textInputContainer}>
              <View style={Commonstyles.textInputWrapper}>
                <TextInput
                  secureTextEntry
                  value={password.text}
                  placeholder={'Password'}
                  onChangeText={(e: string) =>
                    setPassword({...password, text: e})
                  }
                />
              </View>
              {password.error.length !== 0 && (
                <ErrorText text={password.error} />
              )}
            </View>
            <View style={styles.buttonWrapper}>
              <Button.Login title={'로그인 하기'} onPress={() => onLogin()} />
            </View>
            {/* <View style={styles.buttonWrapper}>
              <Button.Login
                title={'카카오로 로그인 하기'}
                onPress={() => signInWithKakao()}
              />
            </View>
            <GoogleSigninButton
              style={{width: '100%'}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => googleSignIn()}
            /> */}
            <View style={styles.row}>
              <View style={styles.subBtnWrapper}>
                <Button.Login_Sub
                  title={'아이디 찾기'}
                  onPress={() => navigation.navigate('FindId')}
                />
              </View>
              <View style={styles.subBtnWrapper}>
                <Button.Login_Sub
                  title={'비밀번호 찾기'}
                  onPress={() => navigation.navigate('FindPwd')}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginMainScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {width: '100%'},
  padding: {
    paddingHorizontal: width * 63,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginTop: height * 240,
    alignItems: 'center',
  },
  buttonWrapper: {marginVertical: 6.5},
  row: {flexDirection: 'row'},
  subBtnWrapper: {flex: 1, alignItems: 'center'},
});
