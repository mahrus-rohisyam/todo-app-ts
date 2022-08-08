import React, { ChangeEvent } from "react";

type Props = {
  type: string;
  placeholder: string;
  button?: boolean;
  onChange? (e: ChangeEvent<HTMLInputElement>): void
  onClick?: () => void | undefined | any | React.SyntheticEvent;
};

const InputComponent:React.FC<Props> = ({ type, placeholder, onChange, button, onClick }) => {
  return (
    <div id="input" className="shadow-sm border-2 border-sec-gray p-2 py-3 rounded-xl relative max-w-md flex items-start min-w-[60%]">
      <input className="text-left h-full w-full" type={type} placeholder={placeholder} onChange={onChange} onKeyUp={onClick} />
      {button && <button onClick={onClick} className="absolute right-4">Enter</button>}
    </div>
  )
};

export default InputComponent;
