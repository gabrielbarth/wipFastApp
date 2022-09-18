import React from 'react';
import { useForm } from 'react-hook-form';

import { PageContainer } from '../../components/Container';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';

import { CreateAccountText, TextContainer, FormContainer } from './styles';

const SignIn = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <PageContainer>
      <FormContainer>
        <InputForm label="E-mail" name="email" control={control} />
        <InputForm
          label="Senha"
          name="password"
          control={control}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
        <TextContainer>
          <CreateAccountText>Criar conta</CreateAccountText>
        </TextContainer>
      </FormContainer>
    </PageContainer>
  );
};

export { SignIn };
