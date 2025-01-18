import {
  useLocation,
  useOutlet,

} from 'react-router'
import {motion,AnimatePresence} from 'motion/react'
import cs from './App.module.css'
import { Header } from './component/header'

import foto from './assets/react.svg'
import { Button } from './component/button'

const tabs = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
]
 
export function App() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
      <div className={cs.container}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname? location.pathname : "empty"}
            initial={{origin:'center',scale: 1.1,opacity:0}}
            animate={{origin:'center',scale: 1,opacity:1}}
            exit={{origin:'center',scale: 1.1, opacity: 0}}
            
            transition={{duration: .2}}
            className={cs.page}
          >
            <Header 
              start={<div className={cs.logo}>KAIAN</div>} 
              end={<div className={cs.headerEnd}>
                <Button type='basic' color='semiWhite' shape={26} iconName='wireframe' text='English' />
                <Button type='basic' color='semiWhite' shape={26} iconName='call-fill' text='Contact' />
                </div>}
              menuItems={tabs} />
            {outlet}
            <img src={foto} height={500} width={500} />
          </motion.div>
        </AnimatePresence>
      
      </div>
      
  )
}

// const AppContext = createContext({})

// type AppData = {
//   locale: string
//   title: string
//   dir: 'rtl' | 'ltr'
//   msgs: object

// }

// function AppProvider(){

//   const appData : AppData ={
//     locale: "ar",
//     title: "home",
//     dir: 'rtl',
//     msgs:{}
//   }

// }