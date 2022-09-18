import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input, InputLabel } from './styles';

type InputFormProps = TextInputProps &
  UseControllerProps & {
    label?: string;
  };

const InputForm = ({ label, name, control }: InputFormProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Input value={field.value} onChangeText={field.onChange} />
    </>
  );
};

export { InputForm };
