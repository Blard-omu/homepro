// src/App.jsx
import { HelmetProvider, Helmet } from 'react-helmet-async';

function HelmetWrapper({children}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HomePro | Housing And Properties</title>
        <meta name="description" content="Find your dream home with HomePro, the leading real estate platform." />
        <meta property="og:title" content="HomePro - Find your dream home today" />
        <meta property="og:description" content="HomePro is a real estate hub committed to helping you find your dream home." />
        <meta property="og:image" content="/public/home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#9fa007" />
        <link rel="canonical" href="https://homepro-phi.vercel.app" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HomePro Properties",
            "url": "https://homepro-phi.vercel.app",
            "logo": "https://res.cloudinary.com/djkrhjgjd/image/upload/v1725207059/aylog654gxcs4qv2ykym.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234708132880957",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/homepro",
              "https://www.twitter.com/homepro",
              "https://www.linkedin.com/company/homepro"
            ]
          })}
        </script>
      </Helmet>
      {children}
    </HelmetProvider>
  );
}

export default HelmetWrapper;
