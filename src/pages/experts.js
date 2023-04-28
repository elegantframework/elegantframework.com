import Head from "next/head";
import socialCardLarge from '@/img/social-card-large.jpg';
import { SplashPageLayout } from "@/layouts/SplashPageLayout";

Experts.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
  },
  Layout: SplashPageLayout
};

export default function Experts() {
  return(
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content={"Elegant Experts"}
        />
        <meta
          key="og:title"
          property="og:title"
          content={"Elegant Experts"}
        />
        <title>Elegant Experts</title>
      </Head>
      <div>
        Hey now
      </div>
    </>
  );
}