import { Tabs} from "expo-router";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {Colors} from "../../constants/Colors";
import { BlurView } from 'expo-blur';
import {CustomHeader} from "../../components";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.dark.background,
                tabBarBackground: () => (
                    <BlurView
                        intensity={100}
                        tint={'extraLight'}
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                        }}
                    />
                ),
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}>
            <Tabs.Screen
                kek="home"
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="registered" size={size} color={color} />
                    ),
                    header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                key="invest"
                name="invest"
                options={{
                    title: 'Invest',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="line-chart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                key="transfers"
                name="transfers"
                options={{
                    title: 'Transfers',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="exchange" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                key="crypto"
                name="crypto"
                options={{
                    title: 'Crypto',
                    tabBarIcon: ({ size, color }) => <FontAwesome name="bitcoin" size={size} color={color} />,
                    header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                key="lifestyle"
                name="lifestyle"
                options={{
                    title: 'Lifestyle',
                    tabBarIcon: ({ size, color }) => <FontAwesome name="th" size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}
export default _Layout
