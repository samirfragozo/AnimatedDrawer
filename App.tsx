import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainDrawer from './src/navigation/MainDrawer';

function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<MainDrawer/>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
