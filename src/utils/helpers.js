import {Text, View} from 'react-native';
import {palettes} from './palettes';

export const setCurrency = number => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  } else {
    return number;
  }
};

export const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const arrayBackground = [
  '#00a8ff',
  '#273c75',
  '#e84118',
  '#44bd32',
  '#9c88ff',
  '#fbc531',
  '#3F3B6C',
  '#624F82',
  '#570A57',
  '#2D2424',
  '#00a8ff',
  '#273c75',
  '#e84118',
  '#44bd32',
  '#9c88ff',
  '#fbc531',
  '#3F3B6C',
  '#624F82',
  '#570A57',
  '#2D2424',
];

export const arrayColor = [
  {backgroundColor: '#55efc4', contentColor: '#00b894'},
  {backgroundColor: '#f3a683', contentColor: '#e15f41'},
  {backgroundColor: '#95afc0', contentColor: '#2d3436'},
  {backgroundColor: '#7ed6df', contentColor: '#22a6b3'},
  {backgroundColor: '#a29bfe', contentColor: '#be2edd'},
  {backgroundColor: '#ffeaa7', contentColor: '#fbc531'},
  {backgroundColor: '#74b9ff', contentColor: '#273c75'},
  {backgroundColor: '#95afc0', contentColor: '#2f3640'},
  {backgroundColor: '#55efc4', contentColor: '#00b894'},
  {backgroundColor: '#f3a683', contentColor: '#e15f41'},
  {backgroundColor: '#95afc0', contentColor: '#2d3436'},
  {backgroundColor: '#7ed6df', contentColor: '#22a6b3'},
  {backgroundColor: '#a29bfe', contentColor: '#be2edd'},
  {backgroundColor: '#ffeaa7', contentColor: '#fbc531'},
  {backgroundColor: '#74b9ff', contentColor: '#273c75'},
  {backgroundColor: '#95afc0', contentColor: '#2f3640'},
];

export const randomBackground = total => {
  const array = [];
  for (let i = 0; i < total; i++) {
    const randomIndex = Math.floor(Math.random() * arrayColor.length); // Generate random index
    console.log('randomIndex ', randomIndex);
    if (i == 0) {
      array.push(arrayColor[randomIndex]); // Push color object at randomIndex to array
    }
    if (
      i != 0 &&
      array[i - 1].backgroundColor != arrayColor[randomIndex].backgroundColor
    ) {
      array.push(arrayColor[randomIndex]); // Push color object at randomIndex to array
    }
  }
  return array;
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};

export const ListEmptyComponent = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120,
    }}>
    <Text
      style={{color: palettes.text_primary, fontSize: 14, fontWeight: 'bold'}}>
      Belum ada data
    </Text>
  </View>
);

export const listPasar = [
  'Semua',
  'Pasar Gurem',
  'Pasar Panempan',
  'Pasar Parteker',
  'Pasar Kolpajung',
  'Pasar Gaden',
  'Pasar Pao',
];
