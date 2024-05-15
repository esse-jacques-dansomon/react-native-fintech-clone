import {View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Platform} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {CustomButton, PhoneFormField, TextIconButton} from "../../components";
import {router} from "expo-router";
import * as PropTypes from "prop-types";



TextIconButton.propTypes = {
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    title: PropTypes.string
};
const Login = () => {
    const [form, setForm] = useState({
        phone: '', countryCode: '',
    });
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

    const onSubmit = () => {

    }
    return (
        <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={keyboardVerticalOffset}
            className={"flex-1 px-4 bg-white"}>
            <ScrollView>

            <View className="flex-1 mb-10 mt-4">
                <Text className="text-4xl font-bold">Welcome back</Text>
                <Text className="text-lg mt-3">
                    Enter the phone number associated with account
                </Text>

                <PhoneFormField
                    countryCode={form.countryCode}
                    phone={form.phone}
                    countryCodeChanged={(countryCode) => setForm({...form, countryCode})}
                    phoneChanged={(phone) => setForm({...form, phone})}
                />

                <CustomButton
                    title="Sign Up"
                    onSubmit={onSubmit}
                    disabled={form.countryCode === '' || form.countryCode ===''} />

                <View className="flex-row gap-3 mt-3 w-full justify-center items-center">
                    <View className="flex-1 divide-x border-[1px] border-gray-100" />
                    <Text className="text-black px-1">or</Text>
                    <View className="flex-1 divide-x border-[1px] border-gray-100" />
                </View>

                <TextIconButton
                 title="Continue with email"
                 iconName="mail"
                 iconColor="blue"
                 iconSize={20}
                />

                <TextIconButton
                 title="Continue wirh Google"
                 iconName="logo-google"
                 iconColor="blue"
                 iconSize={20}
                />

                <View className="flex-row gap-3 mt-3 w-full justify-center items-center ">
                    <TouchableOpacity onPress={ () => router.replace('/signup')}>
                        <Text className="text-lg">
                            Don't have an account? <Text className="text-blue-700 px-4">Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Login
