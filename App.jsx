import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Home } from './src/screens';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = () => Font.loadAsync({
	'fira-mono-regular': require('./assets/fonts/FiraMono-Regular.ttf'),
	'fira-mono-medium': require('./assets/fonts/FiraMono-Medium.ttf'),
	'fira-mono-bold': require('./assets/fonts/FiraMono-Bold.ttf'),
});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	return fontsLoaded ? (
		<SafeAreaView style={{ flex: 1 }}>
			<Home />
		</SafeAreaView>
	) : (
		<AppLoading
			startAsync={loadFonts}
			onFinish={() => setFontsLoaded(true)}
			onError={console.warn}
		/>
	)
}