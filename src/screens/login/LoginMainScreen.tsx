import React, {useState,useCallback,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {height, colors} from '../../constants';
import {TradeMark, SubBtn, Title} from '../../components/login';
import {Button, TextInput} from '../../components/common';

import axios from 'axios'
import { authorize } from 'react-native-app-auth';
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

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
  route: RouteProp<LoginStackParamList, 'LoginMain'>;
}
const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: ''
};
const LoginMainScreen = ({route, navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<string>('');
  const [authState, setAuthState] = useState(defaultAuthState);


  const configs:any = {
  
  // auth0: {
  //   // From https://openidconnect.net/
  //   issuer: 'https://developers.kakao.com/console/app/617439',
  //   clientId: '8dc9eea7e202a581e0449058e753beaf',    
  //   redirectUrl:"http://192.168.0.10:8080/oauth/kakao/callback",
  //   additionalParameters: {"code" : "23423432"},
  //   scopes: ['openid', 'profile', 'email', 'phone', 'address'],
  // }
    google:{
      issuer: 'https://accounts.google.com',
      clientId: '902783645965-ald60d1ehnaeaoetihtb1861u98ppf3u.apps.googleusercontent.com',
      redirectUrl: 'https://f35dd0783aa2.ngrok.io/oauth/google/callback',
      scopes: ['openid', 'profile','email'],
      usePKCE: false,
    }
};

useEffect(() => {
  configureGoogleSign();
}, []);

function configureGoogleSign() {
  GoogleSignin.configure({
    webClientId: '779338835350-2i5m24ouhqcb2rlumcu0dmv3dfcelcbc.apps.googleusercontent.com',
    offlineAccess: false
  });
}
// GoogleSignin.configure({
//   webClientId: '779338835350-2i5m24ouhqcb2rlumcu0dmv3dfcelcbc.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: 'https://902783645965-ald60d1ehnaeaoetihtb1861u98ppf3u.apps.googleusercontent.com/', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
// });
const handleAuthorize = useCallback(
  async provider => {
    try {
      const config = configs[provider];
      const newAuthState = await authorize(config);

      console.log('newAuthState',newAuthState)
      // setAuthState({
      //   hasLoggedInOnce: true,
      //   provider: provider,
      //   ...newAuthState
      // });
    } catch (error) {
      Alert.alert('Failed to log in123', error.message);
    }
  },
  [authState]
);

  const idOnChange = (text: string) => {
    setUsername(text);
  };

  const pwdOnChange = (text: string) => {
    setPassword(text);
  };
  const onLogin = () =>{

    axios.post("http://192.168.0.10:8080/login", {
        username: username,
        password: password      
    })
    .then(function (response) {
      console.log(response.headers.authorization);
      // console.log(Object.keys(response.headers))
    })
    .catch(function (error) {
      console.log(error);
    })

  }
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();


    // console.log("token=",token)
    setResult(JSON.stringify(token));
    const profile: KakaoProfile = await getKakaoProfile();
    // console.log("profile=",profile)
    handleAuthorize('auth0')
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();
    console.log("profile=",profile)

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
      
      handleAuthorize('google')
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
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title text={`${route.params.user} 로그인`} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              backgroundColor={colors.skyBlue}
              value={username}
              placeholder={'ID(Email)'}
              onChangeText={(e: string) => idOnChange(e)}
            />
            <TextInput
              backgroundColor={colors.skyBlue}
              value={password}
              placeholder={'Password'}
              onChangeText={(e: string) => pwdOnChange(e)}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button.Button
              title={'로그인 하기'}
              onPress={() => onLogin()}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button.Button
              title={'카카오로 로그인 하기'}
              onPress={() => signInWithKakao()}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button.Button
              title={'카카오로 로그아웃 하기'}
              onPress={() => signOutWithKakao()}
            />
          </View>
          <View style={styles.btnContainer}>
          <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => googleSignIn()}
          />
          </View>
          <View style={styles.subBtnContaier}>
            <View style={styles.subBtnBox01}>
              <SubBtn
                title={'아이디 찾기'}
                onPress={() => navigation.navigate('FindId')}
              />
            </View>
            <View style={styles.subBtnBox02}>
              <SubBtn
                title={'비밀번호 찾기'}
                onPress={() => navigation.navigate('FindPwd')}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TradeMark />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginMainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  titleContainer: {marginTop: height * 128, marginBottom: height * 127},
  inputContainer: {
    height: 106,
    justifyContent: 'space-between',
    marginBottom: height * 39,
  },
  btnContainer: {marginBottom: height * 14},
  subBtnContaier: {
    flexDirection: 'row',
  },
  subBtnBox01: {flex: 1, alignItems: 'flex-end', marginRight: 15},
  subBtnBox02: {flex: 1, alignItems: 'flex-start', marginLeft: 15},
  footer: {
    paddingTop: height * 160,
  },
});
