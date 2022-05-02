import Image from 'next/image';
import Link from 'next/link';
import devIllustration from '../../../assets/dev.svg';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import Header from '../../../components/ui/theme/Header';
import { useTheme } from '../../../providers/ThemeProvider';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1 data-cy="intro">Hi There!</h1>
          <h2>I’m Albert and I’m suffering from imposter syndrome!</h2>
          <Link href="#contact" passHref>
            <Button as="a">Hire me, please!</Button>
          </Link>
        </Details>
        <Thumbnail>
          <Image
            src={devIllustration}
            alt="I’m Albert and I’m suffering from imposter syndrome!"
          />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
