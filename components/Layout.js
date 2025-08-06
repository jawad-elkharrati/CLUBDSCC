import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const siteTitle = 'DSCC – Club Data Science & Cloud Computing ENSA Oujda'
const siteDescription = 'Official site for DSCC – Club Data Science & Cloud Computing ENSA Oujda, promoting data science and cloud computing in Morocco.'
const siteKeywords = 'Club Data Science ENSA Oujda, DSCC ENSA, Data Science Morocco club, cloud computing, ENSA Oujda'
const siteUrl = 'https://clubdscc.vercel.app'
const ogImage = '/favicon.png'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | DSCC` : siteTitle}</title>
        <meta name='description' content={description || siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index,follow' />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={ogImage} />
        <meta property='og:url' content={siteUrl} />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow  -mt-[81px]'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
