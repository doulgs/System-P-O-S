import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../pages/app/Main";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
