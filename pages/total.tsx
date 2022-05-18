import Layout from "../layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import type { InterfaceUseQuiosco } from "../types/index";
import { formatearDinero } from '../helpers/index';

export default function Total() {
  const { pedido,setNombre,nombre,ordenarPedido,total }: InterfaceUseQuiosco = useQuiosco();

  const comprobarPedido = useCallback(
    (): boolean => pedido.length === 0 || nombre.trim() === '' || nombre.trim().length > 3,
    [pedido]
  );

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);



  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total</h1>
      <p className="my-10 text-2xl">Revisa tu pedido</p>
      <form onSubmit={ordenarPedido}>
        <fieldset className="border-0">
          <div>
            <label
              htmlFor="nombre"
              className="block uppercase text-slate-800 font-bold text-xl"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
              value={nombre}
              onChange={evento => setNombre(evento.target.value)}
            />
          </div>
          <div className="mt-10">
            <p className="text-2xl">
              Total a pagar {""} <span className="font-bold">{formatearDinero(total)}</span>
            </p>
          </div>
          <input
            type="submit"
            value="Confirmar Pedido"
            className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer transition-colors mt-5 disabled:bg-indigo-300 disabled:cursor-default"
            disabled={comprobarPedido()}
          />
        </fieldset>
      </form>
    </Layout>
  );
}
