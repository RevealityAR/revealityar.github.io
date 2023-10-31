import 'normalize.css'
import './src/i18n'
import { UmbrellaProvider } from '@reveality/bits'

import { theme } from './src/theme'
import { globalStyle } from './src/globalStyles'

export function wrapPageElement({ element, props }) {
  return (
    <UmbrellaProvider theme={theme} globalStyle={globalStyle(theme)} {...props}>
      {element}
    </UmbrellaProvider>
  )
}
