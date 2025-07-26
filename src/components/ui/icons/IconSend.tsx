import React from 'react'
import {IconBase} from './IconBase.tsx'
import type {IconProps} from "../../../interfaces/common.ts";

export const IconSend: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path
      d="M12 5V19M12 5L6 11M12 5L18 11"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconBase>
)

