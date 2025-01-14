import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose the icon set you prefer
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // You can choose the icon set you prefer
import {palettes} from './utils/palettes';
// import Home from './screens/home';
// import Login from './screens/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const Beranda = () => {
//   const header = {
//     headerShown: false,
//     tabBarActiveTintColor: palettes.red_primary,
//     tabBarLabelStyle: {marginTop: -5, marginBottom: 5, fontWeight: 'bold'},
//   };
//   return (
//     <Tab.Navigator tabBar={props => <TabBar {...props} />}>
//       <Tab.Screen
//         name="home"
//         component={Home}
//         options={{
//           ...header,
//         }}
//       />
//       <Tab.Screen
//         name="history"
//         component={History}
//         options={{
//           ...header,
//         }}
//       />
//       <Tab.Screen
//         name="arisan"
//         component={Arisan}
//         options={{
//           ...header,
//         }}
//       />
//       <Tab.Screen
//         name="toko"
//         component={Toko}
//         options={{
//           ...header,
//         }}
//       />
//       <Tab.Screen
//         name="member"
//         component={Member}
//         options={{
//           ...header,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const privateRoute = [
  // {
  //   key: 'login',
  //   name: 'login',
  //   component: Login,
  //   options: {headerShown: false},
  // },
  // {
  //   key: 'home',
  //   name: 'home',
  //   component: Home,
  //   options: {headerShown: false},
  // },
];

export {privateRoute};
