export interface ICategoria {
    id     : number;
    nombre : string;
    icono  : string;
}
export interface IChildren {
    children : JSX.Element | JSX.Element[]
}
export interface InterfaceUseQuiosco {
    categorias : ICategoria[];
    categoriaActual : ICategoria[];
    handleClickCategoria : (id:number) => void;
}