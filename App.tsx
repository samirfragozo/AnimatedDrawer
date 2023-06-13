import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainDrawer from './src/navigation/MainDrawer';

function App() {
	return (
		<NavigationContainer>
			<MainDrawer/>
		</NavigationContainer>
	);
}

export default App;
