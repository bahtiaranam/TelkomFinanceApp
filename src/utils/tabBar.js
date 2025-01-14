import {Dimensions, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose the icon set you prefer
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // You can choose the icon set you prefer
import {palettes} from '../utils/palettes';

export default TabBar = ({state, descriptors, navigation}) => {
  const handleIcons = (route, focused) => {
    if (route == 'home') {
      return (
        <Icon
          name={focused == 0 ? 'home' : 'home-outline'}
          size={28}
          color={focused == 0 ? '#3c40c6' : palettes.grey}
        />
      );
    } else if (route == 'history') {
      return (
        <MaterialIcons
          name={'history'}
          size={28}
          color={focused == 1 ? '#3c40c6' : palettes.grey}
        />
      );
    } else if (route == 'arisan') {
      return (
        <MaterialIcons
          name={focused == 2 ? 'clipboard-text' : 'clipboard-text-outline'}
          size={28}
          color={focused == 2 ? '#3c40c6' : palettes.grey}
        />
      );
    } else if (route == 'toko') {
      return (
        <MaterialIcons
          name={focused == 3 ? 'store' : 'store-outline'}
          size={28}
          color={focused == 3 ? '#3c40c6' : palettes.grey}
        />
      );
    } else {
      return (
        <MaterialIcons
          name={focused == 4 ? 'account-group' : 'account-group-outline'}
          size={28}
          color={focused == 4 ? '#3c40c6' : palettes.grey}
        />
      );
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 24,
        backgroundColor: '#182028',
        borderRadius: 12,
        paddingHorizontal: 10,
        marginHorizontal: 20,
      }}>
      {state?.routes?.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
              borderRadius: 1,
              borderColor: '#333B42',
            }}>
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused ? '#030D16' : '#182028',
                borderRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 10,
                }}>
                {handleIcons(route.name, state.index)}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
