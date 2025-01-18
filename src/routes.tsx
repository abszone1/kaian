import { createBrowserRouter}  from 'react-router'

import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { App } from './App'
import { Destinations } from './pages/destinations'
import { Offers } from './pages/offers'

const routes = [
  { path: '/', name: 'Home', element: <Home /> },
  { path: '/about', name: 'About', element: <About /> },
  { path: '/contact', name: 'Contact', element: <Contact /> },
  {path: '/destinations',element:<Destinations />},
  {path: '/offers',element:<Offers />},
]
 
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),

  },
],{basename:'/kaian/'})
