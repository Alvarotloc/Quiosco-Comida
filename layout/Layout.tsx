import Head from "next/head";

interface LayoutParams {
    children : JSX.Element | JSX.Element[];
    pagina   : string;
}

export default function Layout({children,pagina}:LayoutParams) {
    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafetería" />
            </Head>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <h1>SideBar aquí</h1>
                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    {children}
                </main>
            </div>
        </>
    )
}