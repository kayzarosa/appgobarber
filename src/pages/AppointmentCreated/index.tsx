import React from 'react';
import { View, Button } from 'react-native';

const AppointmentCreated: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sair" onPress={() => console.log('dsds')} />
    </View>
  );
};

export default AppointmentCreated;
