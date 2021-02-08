import Head from 'next/head'

interface Tags {
  title?: string
  keywords?: string
  description?: string
}

const Meta: React.FC<Tags> = ({ title, keywords, description }: Tags) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    </div>
  )
}

Meta.defaultProps = {
  title: 'CK Codes',
  keywords: 'web development, programming, coding',
  description: 'Personal site for CK Codes Web Developer',
}

export default Meta
