import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiTrash2, FiX } from "react-icons/fi";
import Button from "./Button";
import { useState } from "react";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"
export default function BottomBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full flex gap-2 items-center relative md:hidden">
            <Button active onClick={() => null}>
                <FiEdit3 className={inlineIcon} />
                <span className={smOnlyText}>Escrever</span>
            </Button>
            <Button active={false} onClick={() => null}>
                <FiInbox className={inlineIcon} />
                <span className={smOnlyText}>Caixa de Entrada</span>
            </Button >
            <Button active={false} onClick={() => null}>
                <FiFileText className={inlineIcon} />
                <span className={smOnlyText}>Rascunhos</span>
            </Button>
            <Button active={false} onClick={() => setIsMenuOpen(state => !state)}>
                {isMenuOpen ? (
                    <>
                        <FiX className={inlineIcon} />
                        <span className={smOnlyText}>Fechar</span>
                    </>
                ) : (
                    <>
                        <FiMenu className={inlineIcon} />
                        <span className={smOnlyText}>Mais</span>
                    </>
                )}
            </Button>
            <div
                className={
                    `${isMenuOpen ? "absolute" : "hidden"}
                            right-0 bottom-12 flex flex-col gap-2 w-40`
                }>
                <Button active={false} onClick={() => null}>
                    <FiArchive className="inline mr-2 mb-1" />
                    Arquivados
                </Button>
                <Button active={false} onClick={() => null}>
                    <FiAlertOctagon className="inline mr-2 mb-1" />
                    Spam
                </Button>
                <Button active={false} onClick={() => null}>
                    <FiTrash2 className="inline mr-2 mb-1" />
                    Lixeira
                </Button>
            </div>
        </div>
    )
}