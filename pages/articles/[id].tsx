import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getَArticleById } from "@/hooks/usePublic";
import { useRouter } from "next/router";
import { Main } from "../../types/interfaces";
import { NextSeo } from "next-seo";
import ImgHeader from "@/components/images/ImgHeader";
import ContentP from "@/components/contents/ContentP";
import ContentH from "@/components/contents/ContentH";
import ImgBody from "@/components/images/ImgBody";

const Article = () => {
    const router = useRouter();
    const { query } = router;
    const id = parseInt(query.id as string);
    const { data, isLoading } = useQuery<Main, Error>(
        ["getَArticleById", id],
        () => getَArticleById(id)
    );
    if (isLoading) {
        return null;
    }
    return (
        <>
            <NextSeo
                title={data?.title}
                description={data?.desc}
                canonical={`https://sabber.dev/articles/${data?.id}`}
                openGraph={{
                    type: "article",
                    locale: "fa_IR",
                    url: `https://sabber.dev/articles/${data?.id}`,
                    article: {
                        authors: ["https://medium.com/@sabber_dev"],
                        tags: ["برنامه نویسی", "طراحی وبسایت", "ساخت وب سایت"],
                    },

                    images: [
                        {
                            url: data?.media!,
                            width: 768,
                            height: 384,
                            alt: data?.title,
                            type: "image/webp",
                        },
                    ],
                    site_name: "صابر سلطانی",
                }}
            />
            <div className="w-full vstack justify-center">
                <ImgHeader src={data?.media!} alt={data?.title!} />
                <h1 className="text-blue-800 font-bold mt-5 text-xl">
                    {data?.title}
                </h1>
                <div className="w-full lg:w-[60vw]">
                    <ContentP txt={data?.content!} cls="mt-5" />
                    <ImgBody src={data?.media1!} alt={data?.title1!} />
                    <ContentH txt={data?.title1!} cls="mt-5" />
                    <ContentP txt={data?.content1!} cls="mt-5" />
                    {data?.media2 && (
                        <ImgBody src={data?.media2!} alt={data?.title2!} />
                    )}
                    {data?.title2 && (
                        <ContentH txt={data?.title2!} cls="mt-5" />
                    )}
                    {data?.content2 && (
                        <ContentP txt={data?.content2!} cls="mt-5" />
                    )}
                    {data?.title3 && (
                        <ContentH txt={data?.title3!} cls="mt-5" />
                    )}
                    {data?.content3 && (
                        <ContentP txt={data?.content3!} cls="mt-5" />
                    )}
                </div>
            </div>
        </>
    );
};

export default Article;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = parseInt(ctx.params?.id as string);
    const queryClient = new QueryClient();
    await queryClient.fetchQuery(["getَArticleById", id], () =>
        getَArticleById(id)
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
