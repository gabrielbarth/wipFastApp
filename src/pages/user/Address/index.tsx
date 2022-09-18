import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../../components/Button';
import { PageContainer } from '../../../components/Container';
import { CustomIcon } from '../../../components/CustomIcon';
import { InputForm } from '../../../components/InputForm';

import {
  AddressList,
  FormContainer,
  ItemContainer,
  ItemText,
  ListContainer,
  TextContainer,
  Line,
} from './styles';

const fake: UserAddress[] = [
  {
    id: '1',
    street: 'Rua Taioba',
    number: '123',
    neighborhood: 'Centro',
    complement: 'casa 123',
    default: true,
  },
  {
    id: '2',
    street: 'Rua Abcd',
    number: '4423',
    neighborhood: 'Cidade Abcd',
    default: false,
  },
  {
    id: '3',
    street: 'Rua Amarela',
    number: '123543',
    neighborhood: 'Jardim das flores',
    complement: 'casa dos fundos',
    default: false,
  },
];

type UserAddress = {
  id: string;
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  default: boolean;
};

const Address = () => {
  const { control, handleSubmit } = useForm();
  const [addressList, setAddressList] = useState<UserAddress[]>(fake);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    setAddressList((prev) => [...prev]);
  };

  return (
    <PageContainer>
      <FormContainer>
        <InputForm label="Rua/Avenida" name="street" control={control} />
        <InputForm label="Número" name="number" control={control} />
        <InputForm label="Bairro" name="neighborhood" control={control} />
        <InputForm label="Complemento" name="complement" control={control} />

        <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
      </FormContainer>
      <ListContainer>
        <AddressList
          data={addressList}
          keyExtractor={(item: UserAddress) => `${item.id}`}
          //@ts-ignore
          renderItem={({ item }: { item: UserAddress }) => (
            <ItemContainer onPress={() => alert('PRESSED')}>
              <TextContainer>
                <ItemText>{item.street}</ItemText>
                <ItemText>{item.number}</ItemText>
                <ItemText>{item.neighborhood}</ItemText>
                {item.complement && <ItemText>{item.complement}</ItemText>}
              </TextContainer>
              {item.default && (
                <CustomIcon
                  iconName="checkmark-circle"
                  size="small"
                  color="primary"
                />
              )}
            </ItemContainer>
          )}
          ItemSeparatorComponent={Line}
        />
      </ListContainer>
    </PageContainer>
  );
};

export { Address };
