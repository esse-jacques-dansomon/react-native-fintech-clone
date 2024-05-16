import {View, Platform, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {Fragment, useEffect, useState} from 'react'
import {router} from "expo-router";
import {CustomButton, PageTitle} from "../../../components";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";

const Verify = () => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

    const onSubmit = () => {
        router.replace('/home')
    }

    useEffect(() => {
        if (value.length === 6 ) {

        }
    }, [value]);

    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });



    return (
        <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={keyboardVerticalOffset}
            className={"flex-1 px-6 bg-white"}>
            <View className="flex-1 mb-10 mt-4">
                <PageTitle
                    title="Phone verification"
                    subtitle="Enter the 6 digit number received from the phone provider"
                />

                <CodeField
                    ref={ref}
                    //n users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                    testID="my-code-input"
                    renderCell={({index, symbol, isFocused}) => (
                        <>
                            <Fragment key={index}>
                                <View
                                    // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                                    onLayout={getCellOnLayoutHandler(index)}
                                    key={index}
                                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                                    <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                                </View>
                                {index === 2 ? <View key={`separator-${index}`} style={styles.separator} /> : null}
                            </Fragment>
                        </>
                    )}
                />

                <View>
                    <TouchableOpacity className="flex-row mt-1 w-full justify-center"
                                      onPress={() => router.replace('/login')}>
                        <Text className="text-lg text-center">
                            Already have an account? <Text className="text-blue-700 px-4">Log In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-1"></View>

                <CustomButton
                    title="Verify phone"
                    onSubmit={onSubmit}
                    disabled={value.length !== 6}/>

            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginVertical: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 12,
    },
    cellRoot: {
        width: 45,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(227,227,227)',
        borderRadius: 8,
    },
    cellText: {
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
    },
    focusCell: {
        paddingBottom: 8,
    },
    separator: {
        height: 2,
        width: 10,
        backgroundColor: 'rgb(227,227,227)',
        alignSelf: 'center',
    },
});
export default Verify

