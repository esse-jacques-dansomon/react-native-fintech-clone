import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {FontAwesome} from "@expo/vector-icons";

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
            router.replace('/home');
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
        </ThemeProvider>
    );
}
