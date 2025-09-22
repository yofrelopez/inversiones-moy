// crea una página básica 

import AlwaysOnTime from "../../../../components/servicios/mudanzas/AlwaysOnTime";
import ContactBand from "../../../../components/servicios/mudanzas/ContactBand";
import FeatureCards from "../../../../components/servicios/mudanzas/FeatureCards";
import Hero from "../../../../components/servicios/mudanzas/Hero";
import Newsletter from "../../../../components/servicios/mudanzas/Newsletter";

export default function MudanzasPage() {
    return (
        <div>
        <Hero />
        <AlwaysOnTime />
        <Newsletter />
        <FeatureCards />
        <ContactBand />
               </div>


    );
}