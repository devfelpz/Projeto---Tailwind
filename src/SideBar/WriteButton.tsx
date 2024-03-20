import { ReactNode } from "react";

export default function WriteButton({children}:{children:ReactNode}){
    return(
        <button 
            className="
            bg-primary-300 hover:bg-primary-400 
            dark:bg-primary-500 dark:hover:bg-primary-600 
            transition-colors py-2 w-full rounded-lg
            ">
            {children}
        </button>
    )
}