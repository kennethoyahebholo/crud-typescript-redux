import React from 'react'

type Props = {
	className: string;
	children: string;
};

const PageTitle: React.FC<Props> = ({ className, children}) => {
  return (
     <h1 className={className}>{children}</h1>
  )
}

export default PageTitle;

export {};