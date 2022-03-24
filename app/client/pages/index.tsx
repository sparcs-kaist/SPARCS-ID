import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter();
  const { t } = useTranslation('home');

  return (
    <div className={ styles.container }>
      <header className={ styles.header }>
        Header
      </header>
      <Link href='/' locale={ locale === 'ko' ? 'en' : 'ko' }>
        <button>
          { t('buttons.change-lang') }
        </button>
      </Link>
      <div className={ styles.mainBanner }>
        <h1 className={ styles.titleText }>{ t('main-banner.title') }</h1>
        <h2 className={ styles.subtitleText }>{ t('main-banner.subtitle') }</h2>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ... await serverSideTranslations(locale as string, ['home'])
  }
});

export default Home
