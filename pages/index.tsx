import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { locale, asPath, push } = useRouter();
  const { t } = useTranslation();

  const languageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push('/', asPath, { locale: e.currentTarget.value });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Doctorium</title>
      </Head>

      <main className={styles.main}>
        <select onChange={languageChange} value={locale}>
          <option value="en">English</option>
          <option value="uk">Ukrainian</option>
        </select>
        <h1 className={styles.title}>
          {t('welcome')}
          {` ${locale} `}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/example">Example</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default Home;
