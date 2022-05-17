import { NextPage } from "next";
import Layout from "../layout/Layout";
import useQuiosco from '../hooks/useQuiosco';
import { InterfaceUseQuiosco } from '../types/index';
import Producto from "../components/Producto";

const Home: NextPage = () => {
  const {categoriaActual}:InterfaceUseQuiosco = useQuiosco()
  return (
    <Layout pagina={`Menú ${categoriaActual[0]?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual[0]?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categoriaActual[0]?.productos.map(producto => (
        <Producto key={producto.id} producto={producto}/>
      ))}
      </div>
    </Layout>
  );
};

export default Home;
