import { Suspense } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import ImgBlur from "@/components/images/ImgBlur";
import TypeWriter from "@/components/contents/TypeWriter";
import { getMains } from "@/hooks/usePublic";
import { Main } from "../types/interfaces";
import LinkSocial from "../components/links/LinkSocial";
import LinkText from "@/components/links/LinkText";

const CardIntro = dynamic(() => import("../components/cards/CardIntro"));
const ContainerGrid = dynamic(
    () => import("../components/containers/ContainerGrid")
);
const LinkImage = dynamic(() => import("../components/links/LinkImage"));
const LinkCard = dynamic(() => import("../components/links/LinkCard"));

const Home: NextPage = () => {
    const { data, isLoading } = useQuery<Main[], Error>(["getMains"], getMains);
    if (isLoading) {
        return null;
    }

    console.log(data);
    return (
        <Suspense fallback={null}>
            <div className="overflow-hidden">
                <div className="w-full h-screen flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[50vw] h-[40vh] lg:h-full vstack justify-center">
                        <TypeWriter />
                        <h3 className="my-5 text-center text-xl lg:text-2xl font-bold z-50 px-3">
                            به وب سایت صابر سلطانی کارشناس و برنامه نویس
                            کامپیوتر خوش آمدید{" "}
                        </h3>

                        <LinkSocial color="text-blue-700" />
                    </div>
                    <ImgBlur
                        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1679668490/4f095b151ec6275a3632168e5cedc6c7_rmlglz.jpg"
                        alt="آواکادو"
                        pri={true}
                        size="100%"
                        cls="w-full lg:w-[50vw] h-[60vh] lg:h-full"
                    />
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-around space-y-7 lg:space-y-0 bg-blue-800 py-16">
                    <CardIntro
                        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676723881/pngwing.com_1_p5qtzr.png"
                        alt="تکنولوژی"
                        content="تکنولوژی برای آینده است و این ابزار به ایفای نقش مهم خود به عنوان عضو از زندگی روزمره ما با قدرت ادامه خواهد داد، برنده کسی است که از به این قدرت بزرگ چه در کسب و کار چه در زندگی شخصی نقش پررنگ تری ارائه دهد"
                    />
                    <CardIntro
                        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676723876/pngwing.com_3_dn5dhg.png"
                        alt="برنامه نویسی"
                        content="در چند سال گذشته و بعد از پاندمی کرونا کسب و کار ها مهاجرت گسترده ای را به دنیای دیجیتال انجام دادند و ایجاد بستری مناسب و امن برای فعالیت شما نیازمند مهندسان برنامه نویسی است که شما را با دانش برنامه نویسی در این راه همراهی کنند"
                    />
                    <CardIntro
                        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676723878/pngwing.com_2_dx6tky.png"
                        alt="اپلیکیشن"
                        content="امروزه داشتن برند و کسب و کار موفق بدون فعالیت در وب سایت یا اپلیکیشن شخصی معنی خاصی ندارد، با برخورداری از پلتفرم مناسب و دفتر یا فروشگاه مجازی خود می توانید حتی در ساعات استراحت و خارج از زمان کار هم درآمد خود را داشته باشید"
                    />
                </div>
                <div className="w-full vstack justify-center mt-10">
                    <ImgBlur
                        src="/profile.jpg"
                        alt="آواکادو"
                        pri={true}
                        size="100%"
                        cls="w-36 h-36 rounded-full overflow-hidden"
                    />
                    <h3 className="font-bold text-blue-800 text-xl mt-3">
                        درباره من
                    </h3>
                    <p className="text-center px-4 lg:px-10 mt-5">
                        به عنوان برنامه نویس در سالیان گذشته توانسته ام پلتفرم
                        های مختلفی در حوزه های گوناگون از شرکتی و فروشگاهی گرفته
                        تا پلتفرم های شبکه های اجتماعی در کارنامه خود به جای
                        بگذارم و در این مسیر با تیم های مختلفی از جمله شرکت های
                        ایرانی دیجی کالا و نت بار و شرکت ترکیه ای Ekska و شرکت
                        کانادایی Talkbox همکاری کرده ام. در این مسیر به اشتیاق
                        من به تکنولوژی و برنامه نویسی همواره به طور وصف ناپذیری
                        افزوده شده و اعتقاد و خط فکری خود را همواره بر یادگیری و
                        آموزش هر روزه گذاشته ام و در کنار تیم و دوستان خوبم به
                        ادامه کشف این دنیای جذاب ادامه خواهم داد.
                    </p>
                </div>
                <div className="w-full vstack items-center justify-center mt-10">
                    <h3 className="font-semibold text-xl mb-5 text-blue-800">
                        آخرین پروژه ها
                    </h3>
                    <div className="w-full lg:w-[60vw] vstack justify-center">
                        <LinkImage
                            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676735299/pexels-photo-48604_hr9g73.webp"
                            title="Avacado"
                            cls="w-96 lg:w-[60vw] h-36 lg:h-60"
                            href="/"
                        />
                        <div className="w-96 lg:w-[60vw] hstack justify-around mt-5">
                            <LinkImage
                                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676737873/pexels-photomix-company-242492-_1_xhiqsy_skhkzj.webp"
                                title="TalkBox"
                                cls="w-44 lg:w-96 h-56 lg:h-72"
                                href="/"
                            />
                            <LinkImage
                                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676737535/austin-distel-wawEfYdpkag-unsplash_veej91_dtqi9u_exgc3w_bqqfxd.webp"
                                title="Ekska"
                                cls="w-44 lg:w-96 h-72 lg:h-[60vh]"
                                href="/"
                            />
                        </div>
                        <LinkImage
                            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1676810847/b912c62622fcb5790597b99ca3990c04_uxyeii.jpg"
                            title="BladeCal"
                            cls="w-96 lg:w-[60vw] h-36 lg:h-60 mt-5"
                            href="/"
                        />
                    </div>
                </div>
                <div className="w-full vstack bg-blue-800 py-16 mt-10">
                    <div className="w-full hstack justify-between px-4 lg:px-20">
                        <h3 className="text-white font-semibold">
                            آخرین مقالات
                        </h3>
                        <LinkText
                            txt="مشاهده همه"
                            href="/"
                            color="text-white"
                        />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-10 space-y-5 lg:space-y-0">
                        {data?.map((item) => (
                            <LinkCard
                                key={item.id}
                                href="/"
                                title={item.title}
                                src={item.media}
                                content={`${item.desc.slice(0, 250)}...`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.fetchQuery(["getMains"], getMains);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
