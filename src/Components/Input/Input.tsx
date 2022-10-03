import React from 'react'

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label: string
}

const Input:React.FC<InputProps> = ({name, type, label, className, value ,placeholder, onChange}) => {
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <input type={type} value={value} className={className} placeholder={placeholder} onChange={onChange} name={name}/>
    </>
  )
}

export default Input