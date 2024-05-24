import {useEffect, useRef} from "react";
import {AppState} from "react-native";
import {useRouter} from "expo-router";
import {AppStateStatus} from "react-native";
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
    id: 'inactivty-storage',
});

export const UserInactivityProvider = ({children}): Screen => {
    const appState = useRef(AppState.currentState);
    const router = useRouter();
    const { isSignedIn } = true;

    useEffect(() => {
        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, []);

    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
        console.log('🚀 ~ handleAppStateChange ~ nextAppState', nextAppState);

        if (nextAppState === 'background') {
            recordStartTime();
        } else if (nextAppState === 'active' && appState.current.match(/background/)) {
            const elapsed = Date.now() - (storage.getNumber('startTime') || 0);
            console.log('🚀 ~ handleAppStateChange ~ elapsed:', elapsed);

            if (elapsed > 3000 ) {
                console.log("locked app state")
                router.replace('/lock');
            }
        }
        appState.current = nextAppState;
    };

    const recordStartTime = () => {
        console.log('🚀 ~ startTime')
        storage.set('startTime', Date.now());
    };

    return children;
}