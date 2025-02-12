import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RecoveryPassword from "../screens/RecoveryPassword";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import AccountScreen from "../screens/AccountScreen";
import NoteScreen from "../screens/NoteScreen";
import MusicScreen from "../screens/AlbumsScreen";
import I_Love_You_Screen from "../screens/I_Love_You_Screen";
import Wiped_Out_Screen from "../screens/Wiped_Out_Screen";
import Hard_To_Imagine_Screen from "../screens/Hard_To_Imagine";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RecoveryScreen" component={RecoveryPassword} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: "Início",
          tabBarIcon: "home",
        }}
        component={HomeScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: "note",
        }}
        name="NotesScreen"
        component={NoteScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Álbuns",
          tabBarIcon: "albuns",
        }}
        name="AlbumsScreen"
        component={MusicScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Sua conta",
          tabBarIcon: "account",
        }}
        name="AccountNavigator"
        component={AccountNavigator}
      />
    </Tabs.Navigator>
  );
};
