import React, {type ReactNode} from 'react'

type IconBaseProps = {
  children: ReactNode
  size?: number
  color?: string
  className?: string
} & React.SVGProps<SVGSVGElement>

export const IconBase: React.FC<IconBaseProps> = (
  {
    children,
    size = 24,
    color = 'currentColor',
    className = '',
    ...props
  }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      color={color}
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  )
}
