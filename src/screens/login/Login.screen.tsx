import React, { useState } from 'react';
import { Box, Button, Input, InputField, Text } from '@gluestack-ui/themed';
import { useDispatch } from 'react-redux';
import { UserActions } from '_redux/actions';

//* Services
import UserService from '_services/user';

const LoginScreen = () => {
  // Utils
  const { loginUser } = UserService;
  const dispatch = useDispatch();

  // Local state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login of user
  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      if (response && response.access_token) {
        const { access_token } = response;
        const { setToken } = UserActions;
        dispatch(setToken(access_token));
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
