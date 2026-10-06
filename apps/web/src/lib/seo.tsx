import { Helmet } from 'react-helmet-async';

interface PageSeoProps {
  title: string;
  description: string;
  keywords?: string;
}

export const PageSeo = ({ title, description, keywords }: PageSeoProps) => {
  return (
    <Helmet>
      <title>{title} — Multiservicios Muños</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};
