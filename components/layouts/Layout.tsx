import { FC, ReactNode } from "react";

import Head from "next/head";
import { Navbar } from "../ui";
import { localFuntions } from "../../utils";

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const origen = (typeof window === 'undefined') ? '' : window.location.origin


export const Layout: FC<LayoutProps> = ({ children, title }) => {

    const newTitle = localFuntions.capitalizeTitle(title || '')

    return (
        <>
            <Head>
                <title>{`${newTitle} | Pokédex` || 'Pokédex'}</title>
                <meta name="author" content="Aldemar García" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokemon app, pokemon ${title}, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origen}/img/pokeball.png`} />
            </Head>

            { /* Navbar */}
            <Navbar />

            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    );
}