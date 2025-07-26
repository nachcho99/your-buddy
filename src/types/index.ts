import {type SVGProps} from 'react'

export interface ChatMessage {
    id: string;
    content: string;
}


export type IconProps = {
    size?: number
    color?: string
    className?: string
    style?: React.CSSProperties
} & SVGProps<SVGSVGElement>



