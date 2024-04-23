import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PersonProfile } from '../../screens/PersonProfile';
import { TabNavigation } from './TabNavigation';
import { Map } from '../../screens/Map';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="뒤로" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="실종자 정보" component={PersonProfile} />
        <Stack.Screen name="우리동네 실종자" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
