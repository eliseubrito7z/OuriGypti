import React from 'react';

import {View, Pressable, Dimensions, StyleSheet, Animated} from 'react-native'
import FaIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

// @ts-ignore
function selectIcon(label: 'HOME' | 'INFORMATION' | 'INFORMATIONCENTER' | 'MAP'): string
{
    switch (label) {
        case 'HOME': return 'grid-outline'
        case 'INFORMATION': return 'cube-outline'
        case 'INFORMATIONCENTER': return 'chatbox-outline'
        case 'MAP': return 'map-outline'
        default: ''
    }
}

const TabBar = ({ state, descriptors, navigation, position}: any) =>{

    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route: any , index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <View key={index} style={[styles.mainItemContainer, {borderRightWidth: label=="notes"? 3:0}]}>
                        <Pressable
                            onPress = {onPress}>
                            <View
                                style = {{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                    gap: 5,
                                }}>
                                <Ionicons
                                    name={selectIcon(label.toUpperCase())}
                                    size={28}
                                />
                                {isFocused &&
                                    <FaIcons
                                        name={'circle'}
                                        size={10}
                                        color={'blue'}
                                    />}
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",
        padding: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 1,
        borderColor: "#333B42"
    },
})


export default TabBar;