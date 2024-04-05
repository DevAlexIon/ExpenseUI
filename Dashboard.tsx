import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Text, View} from 'react-native';

interface DashboardProps {
  navigation: NavigationProp<ParamListBase>;
}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};
export default Dashboard;
