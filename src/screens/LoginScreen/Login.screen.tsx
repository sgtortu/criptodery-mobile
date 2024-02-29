import React, { useState } from 'react';
import { Box, Button, Input, InputField, Text } from '@gluestack-ui/themed';
import { loginUser } from '../../services/user/User.service';
import { useDispatch } from 'react-redux';
import { UserActions } from '_redux/actions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      if (response.access_token) {
        const { setToken } = UserActions;
        dispatch(setToken(response.access_token));
      }
    } catch (error) {
      /* */
    }
  };
  return (
    <Box>
      <Text>LoginScreen</Text>
      <Input
        variant="underlined"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </Input>
      <Input
        variant="underlined"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </Input>

      <Button onPress={handleLogin}>
        <Text fontSize="$sm">Login</Text>
      </Button>
    </Box>
  );
};

export default LoginScreen;
