import { MouseEventHandler, ReactNode } from "react";

export default function Button({active,children,onClick}:{active:boolean,children:ReactNode, onClick:MouseEventHandler<HTMLButtonElement>}){
    const backgroundColor = `${active ? "bg-gray-200 dark:bg-gray-900" : ""}`
    return(
      <button 
        className={`py-2 px-4 w-full text-left rounded-lg
        transition-colors ${backgroundColor}
        hover:bg-gray-200 dark:hover:bg-gray-900`}
        onClick={onClick}>
        {children}
      </button>  
    );
}