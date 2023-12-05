import {useFonts, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";
import { StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from "@react-navigation/native";
import InformationCenter from "./src/screens/InformationCenter";
import Map from "./src/screens/Map"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from "./src/components/TabBar";
import {InformationStack} from "./src/screens/Information/InformationStack";

export default function App() {
    let [fontsLoaded] = useFonts({
        'Roboto-500': Roboto_500Medium,
        'Roboto-700': Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const {Navigator, Screen} = createBottomTabNavigator();

    return (
        <View style={styles.container}>
            <NavigationContainer>

                <StatusBar
                    barStyle={'light-content'}
                />

                <Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            padding: 10,
                        },
                        tabBarHideOnKeyboard: true,
                    }}
                    tabBar={(props) => <TabBar {...props} />}
                >

                    <Screen
                        name="Home"
                        component={Home}
                    />
                    <Screen
                        name="Information"
                        component={InformationStack}
                    />
                    <Screen
                        name="InformationCenter"
                        component={InformationCenter}
                    />
                    <Screen
                        name="Map"
                        component={Map}
                    />
                </Navigator>
            </NavigationContainer>
        </View>
    );
}

// export default function App() {
//     return (
//         <View style={{
//             flex: 1,
//             gap: 30,
//         }}>
//             <Home />
//         </View>
//     )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEF3'
  },
});
