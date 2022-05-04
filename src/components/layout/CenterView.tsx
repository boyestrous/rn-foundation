import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'


export type CenterViewProps = {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export function CenterView({children, style}:CenterViewProps) {
    const userStyle = style
    return (
        <View 
            style={[userStyle,{flex: 1, alignItems: 'center',justifyContent: 'center'}]}>
            {children}
        </View>
    )
}