import 'normalize.css'
import './src/i18n'
import { UmbrellaProvider } from '@reveality/bits'

import { theme } from './src/theme'
import { globalStyle } from './src/globalStyles'
import { PageLayout } from './src/components'

export function wrapPageElement({ element, props }) {
  return (
    <UmbrellaProvider theme={theme} globalStyle={globalStyle(theme)} {...props}>
      <PageLayout>{element}</PageLayout>
    </UmbrellaProvider>
  )
}
