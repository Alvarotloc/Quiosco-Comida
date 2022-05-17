import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import type { InterfaceUseQuiosco } from '../types/index';
import Categoria from "./Categoria";

const Sidebar = (): JSX.Element => {
  const { categorias }:InterfaceUseQuiosco = useQuiosco();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Imagen logotipo"
      />
      <nav className="mt-10">{categorias.map(categoria => (
          <Categoria key={categoria.id} categoria={categoria}/>
      ))}</nav>
    </>
  );
};

export default Sidebar;
