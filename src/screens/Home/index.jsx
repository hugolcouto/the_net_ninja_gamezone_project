import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Home = () => {
	return (
		<View style={style.container}>
			<Text style={style.text}>Home</Text>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		backgroundColor: 'palegreen',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'fira-mono-bold',
		fontSize: 60
	}
})