import Image from "next/image";
import type { ICategoria, InterfaceUseQuiosco } from "../types/index";
import useQuiosco from "../hooks/useQuiosco";
const Categoria = ({ categoria }: { categoria: ICategoria }) => {
  const { categoriaActual, handleClickCategoria }: InterfaceUseQuiosco =
    useQuiosco();
  const { id, nombre, icono } = categoria;
  return (
    <div className={`${categoriaActual[0]?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-colors cursor-pointer`} onClick={() => handleClickCategoria(id)}>
      <Image
        width={70}
        height={70}
        alt="Imagen Icono"
        src={`/assets/img/icono_${icono}.svg`}
        className="mr-5"
      />
      <p className="text-xl font-bold cursor-pointer">{nombre}</p>
    </div>
  );
};

export default Categoria;
