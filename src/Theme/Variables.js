/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#f4f1ee',
  success: '#28a745',
  error: '#dc3545',
  chineseWhite: '#e4e2df',
  khaki: '#bbad9e',
  quickSilver: '#aca6a3',
  isabelline: '#f6f1ee',
  grullo: '#a49380',
}

export const NavigationColors = {
  primary: Colors.primary,
  card: 'white',
  border: 'transparent',
}

/**
 * FontSize
 */
export const FontSize = {
  tiny: 12,
  small: 16,
  regular: 20,
  large: 40,
}

/**
 * Metrics Sizes
 */
const mini = 3
const small = mini * 2 // 10
const regular = mini * 3 // 15
const large = regular * 2 // 30
const giant = large * 2
export const MetricsSizes = {
  mini,
  small,
  regular,
  large,
  giant,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
