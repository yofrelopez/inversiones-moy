import CityBestAlmacenaje from "../../../../components/servicios/almacenaje/CityBest";
import GalleryHighlights from "../../../../components/servicios/almacenaje/GalleryHighlights";
import HeroAlmacenaje from "../../../../components/servicios/almacenaje/Hero";
import PricingAlmacenaje from "../../../../components/servicios/almacenaje/Pricing";

// crea una página básica 
export default function AlmacenajePage() {
    return (
        <>
        <HeroAlmacenaje />
        <CityBestAlmacenaje />
        <PricingAlmacenaje />
        <GalleryHighlights />

        </>
    );
}