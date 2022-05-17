export interface ICategoria {
    id        : number;
    nombre    : string;
    icono     : string;
    productos : IProducto[]
}
export interface IProducto {
    id          : number;
    nombre      : string;
    precio      : number;
    imagen      : string;
    categoriaId : number;
}
export interface IChildren {
    children : JSX.Element | JSX.Element[]
}
export interface InterfaceUseQuiosco {
    categorias           : ICategoria[];
    categoriaActual      : ICategoria[];
    handleClickCategoria : (id:number) => void;
    producto             : IProducto[];
    handleSetProducto    : (producto:IProducto) => void;
    isModalActive        : boolean;
    handleChangeModal    : () => void
}