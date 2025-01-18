import {
  useLocation,
  useOutlet,

} from 'react-router'
import {motion,AnimatePresence} from 'motion/react'
import cs from './App.module.css'
import { Header } from './component/header'

import { Button } from './component/button'
import { useIntl } from 'react-intl'


// initial={{origin:'center',scale: 1.1,opacity:0}}
// animate={{origin:'center',scale: 1,opacity:1}}
// exit={{origin:'center',scale: 1.1, opacity: 0}}

export function App() {
  const location = useLocation()
  const outlet = useOutlet()
  const intl = useIntl()

  const items = [
    {path:'/',name:intl.formatMessage({defaultMessage:'Home',description:'Home page'})},
    {path:'/about',name:intl.formatMessage({defaultMessage:'About',description:'About page'})},
    {path:'/destinations',name:intl.formatMessage({defaultMessage:'Destinations',description:'Destinations page'})},
    {path:'/offers',name:intl.formatMessage({defaultMessage:'Offers',description:'Offers page'})},
    {path:'/contact',name:intl.formatMessage({defaultMessage:'Contact',description:'Contact page'})},
  ]

  return (
      <div className={cs.container}>
        <Header 
              start={<div className={cs.logo}>KAIAN</div>} 
              // center={true}
              end={<div className={cs.headerEnd}>
                <Button type='basic' color='semiWhite' shape={26} text='العربية' />
                <Button type='basic' color='semiWhite' shape={26} text='EGP' />              
                <Button type='basic' color='semiWhite' shape={26} iconName='call-fill' 
                  text={intl.formatMessage({defaultMessage:"Call us",description:"call us button"})} />
                </div>}
              minEnd={<div className={cs.headerEnd}>
                <Button type='basic' color='semiWhite' shape={26} text='العربية' />
                <Button type='basic' color='semiWhite' shape={26} text='EGP' />              
              </div>}
              menuItems={items} />
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname? location.pathname : "empty"}
            initial={{y: -10,opacity:0}}
            animate={{y: 0,opacity:1}}
            exit={{y: -10, opacity: 0}}
            
            transition={{duration: .2}}
            className={cs.page}
          >
            
            {outlet}
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