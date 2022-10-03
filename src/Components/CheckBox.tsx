import React from 'react';

interface Props {
 isChecked?: boolean;
 handleCheck?: React.MouseEventHandler<HTMLInputElement>;
}

const CheckBox: React.FC<Props> = ( {isChecked, handleCheck} ) => {
  return (
    <>
    <div>
     <input type="checkbox" onClick={handleCheck} />
    </div>    
    </>    
  )
}

export default CheckBox