import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PersonProfile } from '../../screens/PersonProfile';
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="메인" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="실종자 정보" component={PersonProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
