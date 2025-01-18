import { ReactNode } from 'react'
import cs from './button.module.css'
import { cx } from '../utils/cx' 
import { Icon } from './icon'

type Color =  "default" | "primary" | "secondary" | "tertiary" | "surface" 
    | "success" | "warning" | "danger" | 'black'| "semiBlack" | "white" | "semiWhite"
    

type Props = {
    type?: 'elevated' | 'filled' | 'flat' | 'stroked' | 'basic' | 'light' | 'float' | 'ghost'
    color?: Color
    selectedColor?: Color
    text?:string
    iconName?:string
    endIconName?:string
    selectedIconName?:string
    icon?: ReactNode
    selected?:boolean
    disabled?:  boolean
    classname?:string
    iconSize?: number
    height?: number
    size?: number
    shape?: number
    Wide?: boolean
    expanded?:boolean
    onTap?: ()=>void
}


export const Button = ({
    type='flat',
    color = 'default',
    selectedColor,
    text,
    selected,
    iconName,
    selectedIconName,
    icon,
    disabled,
    classname,
    iconSize,
    Wide,
    endIconName,
    height= 40,
    shape= 16,
    expanded = true,
    size,
    onTap
}:Props)=>{

    const cn = cx(
        cs.button,
        !(text && (iconName || endIconName)) && cs.miniPadding,
        Wide && cs.wide,
        selected && selectedColor ? cs[selectedColor] : cs[color],
        cs[type],
        "ripple",
        classname);


    return (
        <button 
            onClick={(e)=>{onTap?.();e.stopPropagation()}} 
            disabled={disabled} 
            style={{
                minHeight:size? size : height,
                maxHeight:size? size : height,
                minWidth:size,
                maxWidth:size,
                paddingInline: size ? 0 : type == "float" ? (height - (iconSize || text?8:24)) / 2 :undefined,
                borderRadius:shape}} 
            className={cn}>
            
            {(iconName || icon) &&<Icon classname={text && cs.startIcon} size={iconSize} selected={selected} selectedName={selectedIconName} name={iconName} >{icon}</Icon>}
            
            {text && <div className={[cs.textContainer, !expanded && cs.hidden].filter(i=>i).join(" ")}>{text}</div>}
            
            {endIconName &&<Icon classname={cs.endIcon} size={iconSize} name={endIconName || ""} />}
        </button>
    )

}


