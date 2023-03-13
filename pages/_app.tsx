import { AppProps } from "next/app";
// import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@/styles/main.css";

import { Navbar } from "@/components/header/header";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    const links = [
        { link: "/", label: "Home" },
        { link: "/docs", label: "Docs" },
        { link: "/faq", label: "FaQ" },
    ];

    return (
        <>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: "dark",
                    colors: {
                        brand: [
                            "#F0BBDD",
                            "#ED9BCF",
                            "#EC7CC3",
                            "#ED5DB8",
                            "#F13EAF",
                            "#F71FA7",
                            "#FF00A1",
                            "#E00890",
                            "#C50E82",
                            "#AD1374",
                        ],
                    },
                    primaryColor: "brand",
                }}
            >
                <Navbar links={links} />
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
