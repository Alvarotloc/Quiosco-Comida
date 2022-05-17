import Image from 'next/image';
import type { ICategoria } from '../types/index';
const Categoria = ({categoria}:{categoria :ICategoria}) => {
    const {id,nombre,icono} = categoria;
  return (
    <div className='flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-colors'>
        <Image width={70} height={70} alt='Imagen Icono' src={`/assets/img/icono_${icono}.svg`} className='mr-5'/>
        <button type='button' className='text-xl font-bold cursor-pointer'>
            {nombre}
        </button>
    </div>
  )
}

export default Categoria