import { createContext, useEffect, useState } from "react";
import type { IChildren,ICategoria,IProducto,IProductoPedido } from '../types/index';
import axios from 'axios';
import { toast } from "react-toastify";

const QuioscoContext = createContext<any>({});

const QuioscoProvider = ({children}:IChildren) => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoriaActual, setCategoriaActual] = useState<ICategoria[]>([]);
    const [producto, setProducto] = useState<IProducto[]>([]);
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [pedido, setPedido] = useState<IProductoPedido[]>([]);

    const obtenerCategorias = async () => {
        const {data}:{data : ICategoria[]} = await axios('/api/categorias');
        setCategorias(data);
    }
    useEffect(() => {
        obtenerCategorias();
    },[]);

    useEffect(() => {
        setCategoriaActual([categorias[0]])
    },[categorias])

    const handleClickCategoria = (id:number) => {
        const categoria = categorias.filter(categoriaFiltrar => categoriaFiltrar.id === id);

        setCategoriaActual(categoria);
    }

    const handleSetProducto = (producto : IProducto) => {
        setProducto([producto]);
    }

    const handleChangeModal = () => {
        setIsModalActive(!isModalActive);
    }
    const handleAgregarPedido = (producto:IProductoPedido) => {
        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            setIsModalActive(false);
            return toast.success('Guardado Correctamente');
        }
        setPedido([...pedido,producto]);
        setIsModalActive(false);
        toast.success('Agregado al Pedido')
    }
    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleSetProducto,
            producto,
            isModalActive,
            handleChangeModal,
            handleAgregarPedido,
            pedido
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext