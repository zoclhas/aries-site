import Head from "next/head";

import { Hero } from "@/components/home/hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Aries</title>
                <link
                    rel="shortcut icon"
                    href="/favicon.svg"
                    type="image/x-icon"
                />
            </Head>
            <main>
                <Hero />
            </main>
        </>
    );
}
