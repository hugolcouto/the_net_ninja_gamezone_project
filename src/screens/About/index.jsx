import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const About = () => {
	return (
		<View style={style.container}>
			<Text>About</Text>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		backgroundColor: 'palegreen',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})