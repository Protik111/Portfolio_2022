import Head from 'next/head';

const HeadSeo = ({ title, description, keywords }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="icon" href="/bracket.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="viewport" content="width=device-width"></meta>
            </Head>
        </div>
    );
};

HeadSeo.defaultProps = {
    title: 'Protik The Dev',
    description: 'Protik The Developer',
    keywords: 'Protik The Developer',
  }

export default HeadSeo;