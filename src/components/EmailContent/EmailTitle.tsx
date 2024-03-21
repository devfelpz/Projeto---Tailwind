import { ReactNode } from "react";

export default function EmailTitle({children}:{children:ReactNode}){
    return(
        <h2 className="text-2xl font-bold mb-2">{children}</h2>
    )
}