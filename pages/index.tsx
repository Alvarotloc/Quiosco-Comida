import { NextPage } from "next";
import Layout from "../layout/Layout";
import useQuiosco from '../hooks/useQuiosco';
import { InterfaceUseQuiosco } from '../types/index';

const Home: NextPage = () => {
  const {categoriaActual}:InterfaceUseQuiosco = useQuiosco()
  return (
    <Layout pagina={`Menú ${categoriaActual[0]?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual[0]?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
    </Layout>
  );
};

export default Home;
