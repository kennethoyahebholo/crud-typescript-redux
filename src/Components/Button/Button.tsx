import React,{MouseEventHandler} from 'react'

type Props = {
	className: string;
	children:   JSX.Element | string | JSX.Element[];
  btnType?: 'submit' | 'reset' | 'button';
  btnFunc: MouseEventHandler;
};

const Button: React.FC<Props>  = ({children, className, btnFunc, btnType }) => {
  return (
    <div>
     <button className={className} type={btnType} onClick={btnFunc}>{children}</button>
    </div>
  )
}

export default Button



type SProps = {
	className: string;
	children?: JSX.Element|JSX.Element[];
  btnType?: 'submit' | 'reset' | 'button';
  btnFunc: MouseEventHandler;
  id: number,
  value: string,
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
};

export const SelectButton: React.FC<SProps> = ({ children, className, id, value, onChange}) => {
   return (
    <select onChange={onChange} value={value} className={className}>{children}</select>
   )
}

