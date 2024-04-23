import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TAB_MENU } from '../../constants/common';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {TAB_MENU.map((menu) => {
        return (
          <Tab.Screen
            key={menu.name}
            name={menu.name}
            component={menu.component}
            options={{
              tabBarIcon: ({ size, color }) => <MaterialIcons name={menu.icon} size={size} color={color} />,
              headerShown: false,
              tabBarActiveTintColor: '#292f47',
              tabBarInactiveTintColor: '#c0c0c0',
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
