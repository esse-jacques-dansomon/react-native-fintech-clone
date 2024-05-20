import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {router, Stack, Tabs} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CustomHeader} from "../components";
import {TouchableOpacity, View} from "react-native";
// import { UserInactivityProvider } from '@/context/UserInactivity';
const queryClient = new QueryClient();


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            // router.replace('/crypto');
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
        <QueryClientProvider client={queryClient}>
            {/*<UserInactivityProvider>*/}
            <GestureHandlerRootView style={{flex: 1}}>
                <StatusBar style="dark"/>
                {/*<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>*/}
                <Stack>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Tabs.Screen
                        key="crypto/[id]"
                        name="crypto/[id]"
                        options={{
                            title: '',
                            headerLargeTitle: false,
                            headerTransparent: false,
                            headerLeft: () => (
                                <TouchableOpacity onPress={router.back}>
                                    <Ionicons name="arrow-back" size={30} color="black"/>
                                </TouchableOpacity>
                            ),
                            headerRight: () => (
                                <View className="flex-row gap-3">
                                    <TouchableOpacity onPress={router.back}>
                                        <Ionicons name="notifications-outline" size={30} color="black"/>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={router.back}>
                                        <Ionicons name="star-outline" size={30} color="black"/>
                                    </TouchableOpacity>
                                </View>
                            ),
                        }}
                    />
                    <Stack.Screen name="+not-found"/>
                </Stack>
                {/*</ThemeProvider>*/}
            </GestureHandlerRootView>
            {/*</UserInactivityProvider>*/}
        </QueryClientProvider>
        // </ClerkProvider>

    );
}


