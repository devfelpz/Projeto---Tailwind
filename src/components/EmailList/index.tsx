import emails from '../../email.json';
import EmailListItem from './EmailListIten';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EmailList({setOpenEmail}:any){
 return(
    <div className="relative overflow-y-scroll grow">
        {emails.map(e=> (
            <EmailListItem key={e.id} onClick={()=> setOpenEmail(e)} email={e}/>

        ))}
    </div>
 );
}