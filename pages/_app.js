import React from 'react'
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <DefaultSeo
      title="Movie bazzar"
      description="Movie bazzar movie review"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://movie-bazzar.vercel.app/',
        site_name: 'Movie bazzar',
      }}
    />
    <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp