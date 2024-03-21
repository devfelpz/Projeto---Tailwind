// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Avatar({letter}:any){
    return(
        <div className="
            rounded-full bg-rose-300 dark:bg-rose-600
            w-10 h-10 grid place-content-center">
            <span className="mb-0.5 uppercase">
                {letter}
            </span>
        </div>
    )
}