import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen key={"lock"} name="lock" options={{headerShown: false}}/>
            <StatusBar  key={'lock_status'} style={"dark"}  />
        </Stack>
    )
}
export default _Layout
