import { useState } from "react";
import BottomBar from "./components/BottomBar";
import Container from "./components/Container";
import Header from "./components/Header";
import SideBar from "./SideBar";
import EmailList from "./components/EmailList";
import EmailContent from "./components/EmailContent";

export default function App() {
const[openEmail, setOpenEmail] = useState(null);
  return (
    <>
      <Header />
      <Container>
        <div 
          className="
          flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
        <SideBar />
        <EmailList setOpenEmail={setOpenEmail}/>
        {openEmail && <EmailContent email={openEmail} setOpenEmail={setOpenEmail}/>}
        <BottomBar/>
        </div>
      </Container>
    </>

  )
}

