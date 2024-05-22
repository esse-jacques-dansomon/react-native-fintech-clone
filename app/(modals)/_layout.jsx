import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="lock" options={{headerShown: false}}/>
        </Stack>
    )
}
export default _Layout
