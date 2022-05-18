import { createContext, FormEvent, useEffect, useState } from "react";
import type { IChildren,ICategoria,IProducto } from '../types/index';
import axios from 'axios';
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext<any>({});

const QuioscoProvider = ({children}:IChildren) => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoriaActual, setCategoriaActual] = useState<ICategoria[]>([]);
    const [producto, setProducto] = useState<IProducto[]>([]);
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [pedido, setPedido] = useState<IProducto[]>([]);
    const [nombre, setNombre] = useState<string>('');
    const [total, setTotal] = useState<number>(0);

    const router = useRouter();

    const obtenerCategorias = async () => {
        const {data}:{data : ICategoria[]} = await axios('/api/categorias');
        setCategorias(data);
    }
    useEffect(() => {
        obtenerCategorias();
    },[]);

    useEffect(() => {
        setCategoriaActual([categorias[0]])
    },[categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad!) + total,0);
        setTotal(nuevoTotal);
    },[pedido])

    const handleClickCategoria = (id:number) => {
        const categoria = categorias.filter(categoriaFiltrar => categoriaFiltrar.id === id);

        setCategoriaActual(categoria);
        router.push('/');
    }

    const handleSetProducto = (producto : IProducto) => {
        setProducto([producto]);
    }

    const handleChangeModal = () => {
        setIsModalActive(!isModalActive);
    }
    const handleAgregarPedido = (producto:IProducto) => {
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
    const handleEditarCantidad = (producto:IProducto) => {
        setProducto([producto]);
        setIsModalActive(true);
    }

    const handleEliminarProducto = (id:number) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.warning('Producto Eliminado');
    }

    const ordenarPedido = async (evento: FormEvent) => {
        evento.preventDefault();
      };
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
            pedido,
            handleEditarCantidad,
            handleEliminarProducto,
            nombre,
            setNombre,
            ordenarPedido,
            total
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext