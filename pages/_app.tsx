import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import localFont from "@next/font/local";
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";

const inter = localFont({
    src: [
        {
            path: "../public/fonts/Iranyekan.ttf",
            style: "normal",
        },
        {
            path: "../public/fonts/IranyekanMedium.ttf",
            style: "medium",
        },
        {
            path: "../public/fonts/IranyekanExtrabold.ttf",
            style: "bold",
            weight: "700",
        },
    ],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <DefaultSeo
                title="صابر سلطانی ✌"
                description="صابر سلطانی برنامه نویسی و کارشناس نرم افزار ، طراح و توسعه دهنده سرور، وب سایت ، اپلیکیشن و تکنولوژی های روز دنیا"
                canonical="https://sabber.dev/"
                openGraph={{
                    type: "website",
                    locale: "fa_IR",
                    url: "https://sabber.dev/",
                    siteName: "صابر سلطانی",
                    images: [
                        {
                            url: "https://sabber.dev/profile.jpg",
                            width: 1920,
                            height: 1080,
                            alt: "صابر سلطانی",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@sadratech",
                    site: "@sadratech",
                    cardType: "summary_large_image",
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "https://sabber.dev/logo.ico",
                    },
                ]}
            />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <main className={inter.className}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </main>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
