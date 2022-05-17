import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from 'react-modal';
import useQuiosco from '../hooks/useQuiosco';
import type { InterfaceUseQuiosco } from '../types/index';
import ModalProducto from "../components/ModalProducto";

interface LayoutParams {
    children : JSX.Element | JSX.Element[];
    pagina   : string;
};

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#__next');

export default function Layout({children,pagina}:LayoutParams) {
     const {isModalActive}:InterfaceUseQuiosco = useQuiosco()
    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafetería" />
            </Head>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                    {children}
                    </div>
                </main>
            </div>
            {isModalActive && (
                <Modal isOpen={isModalActive} style={customStyles}>
                    <ModalProducto />
                </Modal>
            )}
        </>
    )
}