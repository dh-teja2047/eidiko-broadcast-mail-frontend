import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({value,onChange,label,placeholder,type}) => {
  return (
<TextField value={value} onChange={onChange} label={label} placeholder={placeholder} type={type?type:"text"}/>
    )
}

export default CustomTextField