import { createContext, useEffect, useState } from "react";
import type { IChildren,ICategoria } from '../types/index';
import axios from 'axios';

const QuioscoContext = createContext<any>({});

const QuioscoProvider = ({children}:IChildren) => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoriaActual, setCategoriaActual] = useState<ICategoria[]>([]);

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
        console.log(id)
        const categoria = categorias.filter(categoriaFiltrar => categoriaFiltrar.id === id);

        setCategoriaActual(categoria);
    }
    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext