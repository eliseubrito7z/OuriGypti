import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Information from "./Information";
import {Spread} from "./SubScreens/Spread";
import {Symptons} from "./SubScreens/Symptons";
import {Prevention} from "./SubScreens/Prevention";
import {Todo} from "./SubScreens/Todo";

const Stack = createNativeStackNavigator()

export function InformationStack() {
    const animationConfig = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                options={{
                    animation: 'fade_from_bottom'
                }}
                name="home"
                component={Information}
            />
            <Stack.Screen
                options={{
                    animation: 'fade_from_bottom'
                }}
                name="spread"
                component={Spread}
            />
            <Stack.Screen
                options={{
                    animation: 'fade_from_bottom'
                }}
                name="symptons"
                component={Symptons}
            />
            <Stack.Screen
                options={{
                    animation: 'fade_from_bottom'
                }}
                name="prevention"
                component={Prevention}
            />
            <Stack.Screen
                options={{
                    animation: 'fade_from_bottom'
                }}
                name="todo"
                component={Todo}
            />
        </Stack.Navigator>
    )
}