import {router, Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen key={"lock"} name="lock" options={{headerShown: false}}/>
            <Stack.Screen key={"account"}
                          name="account"
                          options={{
                              headerTransparent: true,
                              headerBackTitleVisible: false,
                              presentation: 'transparentModal',
                              animation: 'fade',
                              title: '',
                              headerLeft: () => {
                                  return (
                                      <TouchableOpacity onPress={router.back}>
                                          <Ionicons name="close-outline" size={34} color={"white"} />
                                      </TouchableOpacity>
                                  )
                              }
                }}/>
            <StatusBar  key={'lock_status'} style={"dark"}  />
        </Stack>
    )
}
export default Layout
