import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash2 } from "react-icons/fi"
import WriteButton from "./WriteButton";
import Button from "./Button";
import { useState } from "react";

const inlineIcon = "inline mr-1 mb-1";

export default function SideBar() {
    const [activeCaixaDeEntrada, setActiveCaixaDeEntrada] = useState(false);
    const [activeEnviados, setActiveEnviados] = useState(false);
    const [activeRascunhos, setActiveRascunhos] = useState(false);
    const [activeArquivados, setActiveArquivados] = useState(false);
    const [activeSpam, setActiveSpam] = useState(false);
    const [activeLixeira, setActiveLixeira] = useState(false);
    return (
        <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
            <WriteButton>
                <FiEdit3 className="inline mr-1 mb-1" />
                Escrever
            </WriteButton>
            <Button
                active={activeCaixaDeEntrada}
                onClick={() => setActiveCaixaDeEntrada(!activeCaixaDeEntrada)}>
                <FiInbox className={inlineIcon} />
                Caixa de Entrada
            </Button>
            <Button 
                active={activeEnviados} 
                onClick={() => setActiveEnviados(!activeEnviados)}>
                    <FiSend className={inlineIcon} /> 
                    Enviados
            </Button>
            <Button 
                active={activeRascunhos} 
                onClick={() => setActiveRascunhos(!activeRascunhos)}>
                     <FiFileText className={inlineIcon}/>
                    Rascunhos
            </Button>
            <Button 
                active={activeArquivados} 
                onClick={() => setActiveArquivados(!activeArquivados)}>
                    <FiArchive className={inlineIcon} /> 

                    Arquivados
            </Button>
            <Button 
                active={activeSpam} 
                onClick={() => setActiveSpam(!activeSpam)}>
                    <FiAlertOctagon className={inlineIcon} />
                    Spam
            </Button>
            <Button 
                active={activeLixeira} 
                onClick={() => setActiveLixeira(!activeLixeira)}>
                    <FiTrash2 className={inlineIcon} />
                    Lixeira
            </Button>
        </aside>
    )
}