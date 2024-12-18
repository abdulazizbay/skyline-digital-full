import {PRIORITYINFOSEC} from "@/constants";
import {Priorities} from "@/components/home/Priorities";
import {HomeBanner} from "@/components/home/Banner";
import {BannerPost} from "@/components/BannerPost";
import {KnowingLang} from "@/components/home/KnowingLang";
import {Questions} from "@/components/home/Questions";
import {ContactForm} from "@/components/ContactForm";

export default function Home() {
    return (
        <>
            <HomeBanner />
            <BannerPost
                pageName="home"
                contMaxW="1192px"
                highlightTitle="SKYLINE"
                desc=" - это исключительна уникальная кампания "
            />
            {PRIORITYINFOSEC.map((item, index) => (
                <Priorities
                    key={index}
                    priorityKey={index + 1}
                    imageTitle={item.mainIntro.mainTitle}
                    mainImage={item.mainIntro.mainImage}
                    secTitle={item.secTitle}
                    label={item.content.map((contentItem) => contentItem.label)}
                    desc={item.content.map((contentItem) => contentItem.desc)}
                />
            ))}
            <KnowingLang/>
            <Questions/>
            <div className="py-150 lg:pt-50">
                <ContactForm
                    role="home"
                />
            </div>

        </>
    );
}
