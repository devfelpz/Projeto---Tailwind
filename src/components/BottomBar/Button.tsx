import { MouseEventHandler, ReactNode } from "react";

export default function Button({children,active, onClick}: {children:ReactNode, active:boolean,onClick:MouseEventHandler<HTMLButtonElement>}){
    return(
        <button className={
            `flex-1 p-2 mb-0.5 rounded-lg shadow
            text-gray-900 dark:text-gray-50 
            ${active 
                ? "bg-primary-300 dark:bg-primary-600" 
                : "bg-gray-200 dark:bg-gray-900"
            }`
        } 
        onClick={onClick}>
            {children}
        </button>
    );
}