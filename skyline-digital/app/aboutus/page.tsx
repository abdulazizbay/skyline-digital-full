import {Banner} from "@/components/aboutus/Banner";
import {BannerPost} from "@/components/BannerPost";
import {FaceOfCompany} from "@/components/aboutus/FaceOfCompany";
import {AgencyServices} from "@/components/aboutus/AgencyServices";
import {Principles} from "@/components/aboutus/Principles";
import {ContactForm} from "@/components/ContactForm";

export default function AboutUs(){
    return(
        <>
            <Banner/>
            <BannerPost
                pageName="aboutus"
                contMaxW="1090px"
                highlightTitle = "История"
                desc = " компании"
            />
            <FaceOfCompany/>
            <AgencyServices/>
            <Principles/>
            <div className="py-50">
                <ContactForm role="home"/>
            </div>

        </>
    )
}