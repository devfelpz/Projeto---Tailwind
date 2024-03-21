import { ReactNode } from "react";

export default function EmailData({children}:{children:ReactNode}){
    return(
        <div className="text-gray-600 dark:text-gray-400">
            {children}
        </div>
    )
}