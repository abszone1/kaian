import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/ripple.css'
import './utils/tokens.css'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { IntlProvider } from 'react-intl'

// function loadLocaleData(locale: string){
//   switch (locale) {
//     case "ar":
//       return import('../compiled-lang/ar.json')
//     case "en":
//       return import('../compiled-lang/en.json')
//     default:
//       return import('../compiled-lang/en.json')
//   }
// }


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale='en' >
      <RouterProvider  router={router} />
    </IntlProvider>
  </StrictMode>,
)
