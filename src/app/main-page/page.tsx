import AboutMe from '../sections/about/page';
import HeaderPage from '../../components/header/page';
import HeroPage from '../sections/hero/page';
import MarqueeHero from '../../components/marqueHero/page';
import SkillPage from '../sections/skill/page';
import ChooseMePage from '../sections/chooseMe/page';
import WorkPage from '../sections/work/page';
import FooterPage from '@/components/footer/page';
import ClientStory from '../sections/clientStory/page';
import FAQPage from '../sections/faq/page';
import ContactPage from '../sections/contact/page';

const MainPage = () => {
  return (
    <>
      <HeaderPage />
      <HeroPage />
      <MarqueeHero />
      <AboutMe />
      <SkillPage />
      <ChooseMePage />
      <WorkPage />

      <ClientStory />
      <FAQPage />
      <ContactPage />
      <FooterPage />
    </>
  );
};

export default MainPage;
