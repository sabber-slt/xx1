import React from "react";
import ContainerGrid from "./containers/ContainerGrid";
import LinkText from "./links/LinkText";
import { BsFileCode } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import LinkSocial from "./links/LinkSocial";

const Footer = () => {
    return (
        <div className="w-full h-[60vh] bg-blue-800 vstack justify-around mt-10">
            <LinkSocial color="text-white" />
            <ContainerGrid gridCols="grid-cols-3 lg:grid-cols-4 space-x-5">
                <LinkText href="/" txt="خانه" color="text-white" />
                <LinkText href="/about" txt="درباره من" color="text-white" />
                <LinkText href="/foods" txt="آشپزی" color="text-white" />
                <LinkText href="/articles" txt="مقالات" color="text-white" />
                <LinkText href="/contact" txt="تماس با من" color="text-white" />
            </ContainerGrid>
            <div className="vstack items-center justify-center w-96 lg:w-[60vw]">
                <p className="text-white text-sm text-center px-3">
                    برنامه نویس فول استک زبان های typescript و rust ، طراح و
                    سازنده اپلیکیشن موبایل ، کامپیوتر و وب سایت
                </p>
                <div className="w-80 hstack justify-around mt-4">
                    <BsFileCode className="text-white w-8 h-8" />
                    <FaCodeBranch className="text-white w-8 h-8" />
                    <MdQrCodeScanner className="text-white w-8 h-8" />
                </div>
            </div>
            <p className="text-white mt-8">developer@sabber.dev</p>
        </div>
    );
};

export default Footer;
