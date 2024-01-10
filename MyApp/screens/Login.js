import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {styles} from '../screensStyles/LoginScreenStyles';
import {LOCAL_STRINGS} from '../LocalizationStrings';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 50}}>{LOCAL_STRINGS.TITLE}</Text>
      <View>
        <TextInput
          placeholder={LOCAL_STRINGS.USERNAME}
          value={username}
          onChangeText={value => setUserName(value)}
          style={styles.usernameFiled}
        />
        <TextInput
          placeholder={LOCAL_STRINGS.PASSWORD}
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.usernameFiled}
        />
        <Button
          mode="contained"
          onPress={() => console.log('Login button pressed')}>
          {LOCAL_STRINGS.LOGIN_BUTTON}
        </Button>
      </View>
    </View>
  );
};

export default Login;
