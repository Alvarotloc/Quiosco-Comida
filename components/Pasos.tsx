import { useRouter } from "next/router"

const pasos = [
    {paso : 1, nombre : 'Menú', url: '/'},
    {paso : 2, nombre : 'Resumen', url: '/resumen'},
    {paso : 3, nombre : 'Datos y Total', url: '/total'}
]
const Pasos = ():JSX.Element => {
    const router = useRouter();

    const calcularProgreso = ():number => {
        const valores = {
            '/' : 2,
            '/resumen' : 46,
            '/total' : 100
        };
        return valores[router.pathname as keyof typeof valores];
    }
  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(({paso,url,nombre}) => (
                <button key={paso} className='text-2xl font-bold' onClick={() => {
                    router.push(url);
                }}>
                    {nombre}
                </button>
            ))}
        </div>
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width : `${calcularProgreso()}%`}}></div>
        </div>
    </>
  )
}

export default Pasos