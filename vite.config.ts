import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:[
        [
          "formatjs",
          {
            "idInterpolationPattern": "[sha512:contenthash:base64:6]",
            "ast": true
          }
        ]
      ]
    }
  })],

  base: "/kaian/"
})
