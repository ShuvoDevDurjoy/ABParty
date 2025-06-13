import StarBanner from "./Components/StarBanner";
import Banner from "./Container/Banner/Banner";
import Footer from "./Container/Footer/Footer";
import Hero from "./Container/Hero/Hero";
import MenuItemBanner from "./Container/MenuItemBanner/MenuItemBanner";
import Navbar from "./Container/Navbar/Navbar";
import CustomSlider from "./Container/Slider/CustomSlider";
import { LanguageProvider } from "./LanguageContext";
import RevealBatch from "./RevealBatch";

const sliderImage = [
  {
    src: "./images/rikshaw_puller.jpg",
  },
  {
    src: "./images/slider_2.png",
  },
  {
    src: "./images/rikshaw_puller.jpg",
  },
];

const page = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="page_main_container sticky">
        <Hero />
        <StarBanner />
        <MenuItemBanner />
        <CustomSlider sliderImage={sliderImage} />
        <StarBanner />
        <Banner />
        <Footer />
        <RevealBatch />
      </div>
    </LanguageProvider>
  );
};

export default page;
