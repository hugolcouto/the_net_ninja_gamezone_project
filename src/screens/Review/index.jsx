import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Review = () => {
	return (
		<View style={style.container}>
			<Text>Review</Text>
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