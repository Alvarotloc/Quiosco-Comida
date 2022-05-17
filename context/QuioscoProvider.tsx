import { createContext, useEffect, useState } from "react";
import type { IChildren,ICategoria,IProducto } from '../types/index';
import axios from 'axios';

const QuioscoContext = createContext<any>({});

const QuioscoProvider = ({children}:IChildren) => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoriaActual, setCategoriaActual] = useState<ICategoria[]>([]);
    const [producto, setProducto] = useState<IProducto[]>([]);
    const [isModalActive, setIsModalActive] = useState<boolean>(false);

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
    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleSetProducto,
            producto,
            isModalActive,
            handleChangeModal
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext