import { AppProps } from "next/app";
// import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: "dark",
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
