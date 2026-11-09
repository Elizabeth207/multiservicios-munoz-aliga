import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteConfig';

interface PageSeoProps {
  title: string;
  description: string;
  keywords?: string;
}

export const PageSeo = ({ title, description, keywords }: PageSeoProps) => {
  const fullTitle = `${title} — ${siteConfig.businessName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
