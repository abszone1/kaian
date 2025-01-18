import { NavLink } from 'react-router'
import cs from './header.module.css'
import { cx } from '../utils/cx'
import { ReactNode } from 'react'


type Item = {
    name:string
    path?: string
}

type Props = {
    start?: ReactNode
    center?: ReactNode
    end?: ReactNode
    menuItems?: Item[]

}

export function Header({
    menuItems,
    center,
    end,
    start
}:Props){

    return(
        <>
            <div className={cs.shadow}></div>
            <div className={cs.container}>
                <div className={cs.first}>
                    <div className={cs.start}>
                        {start}
                    </div>
                    <div className={cs.center}>
                        { center || menuItems?.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path ? item.path : ''}
                                className={({ isActive }) => (cx(cs.itemA , isActive ? cs.active : undefined))}
                                end
                                >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className={cs.end}>
                        {end}
                    </div>
                </div>
                <div className={cs.second}>
                {center &&  menuItems?.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path ? item.path : ''}
                                className={({ isActive }) => (cx(cs.itemA , isActive ? cs.active : undefined))}
                                end
                                >
                                {item.name}
                            </NavLink>
                        ))}
                </div>
            </div>
        </>
       
    )
}