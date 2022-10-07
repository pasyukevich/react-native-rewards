import {
  Common,
  Fonts,
  Gutters,
  Images,
  Layout,
  DefaultVariables,
} from '@/Theme'

export default function () {
  //Select the right theme light theme ({} if not exist)
  const { Variables: themeConfigVars = {}, ...themeConfig } = {}

  const themeVariables = mergeVariables(DefaultVariables, themeConfigVars)

  // Build the default theme
  const baseTheme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(themeVariables),
    Images: Images(themeVariables),
    Layout: Layout(themeVariables),
    Common: Common({
      ...themeVariables,
      Layout: Layout(themeVariables),
      Gutters: Gutters(themeVariables),
    }),
    ...themeVariables,
  }

  // Merge and return the current Theme
  return buildTheme(baseTheme, formatTheme(themeVariables, themeConfig || {}))
}

/**
 * Generate Theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (variables, theme) => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: generate(variables),
    }
  }, {})
}

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @Theme/Variables
 * @param themeConfig : currentTheme form @Theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (variables, themeConfig) =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...(themeConfig[group] || {}),
      },
    }
  }, {})

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param baseTheme
 * @param themeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (baseTheme, themeConfig) => {
  return mergeTheme(baseTheme, themeConfig)
}

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (baseTheme, theme) => ({
  ...Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...(theme[key] || {}),
      },
    }),
    {},
  ),
})
