import Container from "./components/Container";
import Header from "./components/Header";
import SideBar from "./SideBar";

export default function App() {

  return (
    <>
      <Header />
      <Container>
        <div 
          className="
          flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">

        <SideBar />
        </div>
      </Container>
    </>

  )
}

