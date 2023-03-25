import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    href: string;
    title: string;
    src: string;
    cls: string;
};

const LinkImage = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`relative ${props.cls} rounded-lg shadow-xl hov overflow-hidden vstack justify-center bg-blue-800`}
        >
            <Image
                src={props.src}
                alt={props.title}
                sizes="60%"
                fill
                style={{ objectFit: "cover", opacity: 0.7 }}
            />

            <h3 className="z-40 font-semibold text-white text-center text-xl">
                {props.title}
            </h3>
        </Link>
    );
};

export default LinkImage;
