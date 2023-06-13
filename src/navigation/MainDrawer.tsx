import {createDrawerNavigator} from '@react-navigation/drawer';

import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Orders from '../screens/Orders';
import StartTab from './StartTab';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
	<Drawer.Navigator>
		<Drawer.Screen name="Start" component={StartTab}/>
		<Drawer.Screen name="Your Cart" component={Cart}/>
		<Drawer.Screen name="Favourites" component={Favourites}/>
		<Drawer.Screen name="Your Orders" component={Orders}/>
	</Drawer.Navigator>
);

export default MainDrawer;
