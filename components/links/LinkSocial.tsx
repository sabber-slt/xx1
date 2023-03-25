import Link from "next/link";
import React, { FC } from "react";
import {
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillGithub,
    AiFillPhone,
} from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {
    href: string;
    aria: string;
    icon: any;
};

const LinkItem = (props: Props) => {
    return (
        <Link
            href={props.href}
            passHref
            aria-label={props.aria}
            target="_blank"
        >
            {props.icon}
        </Link>
    );
};

const LinkSocial: FC<{ color: string }> = ({ color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            className="w-80 flex flex-row items-center justify-around"
        >
            <LinkItem
                href={"tel:09122863901"}
                aria="Phone"
                icon={<AiFillPhone className={`${color} w-10 h-10`} />}
            />
            <LinkItem
                href={"https://github.com/sabber-slt"}
                aria="Github"
                icon={<AiFillGithub className={`${color} w-10 h-10`} />}
            />
            <LinkItem
                href={"https://twitter.com/sabber_dev"}
                aria="Twitter"
                icon={<AiFillTwitterSquare className={`${color} w-10 h-10`} />}
            />
            <LinkItem
                href={"https://instagram.com/sabber_slt"}
                aria="Instagram"
                icon={<AiFillInstagram className={`${color} w-10 h-10`} />}
            />
        </motion.div>
    );
};

export default LinkSocial;
