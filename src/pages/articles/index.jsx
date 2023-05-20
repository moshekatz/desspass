import Head from 'next/head'

import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import upgradingAWhiteWallCover from './upgrading-a-white-wall/cover.webp'
import bauhausStyleDesignCover from './bauhaus-style-design/cover.webp'
import theListCover from './the-list/cover.webp'
import teenagersBedroomCover from './teenagers-bedroom/cover.webp'


const covers = {
  'upgrading-a-white-wall': upgradingAWhiteWallCover,
  'bauhaus-style-design': bauhausStyleDesignCover,
  'the-list': theListCover,
  'teenagers-bedroom': teenagersBedroomCover
};

function Article({ article }) {
  return (
      <Card as="article" className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="relative z-10 flex shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={covers[article.slug]} alt={`Cover photo for ${article.title}`}/>
        </div>
        <div className="md:col-span-3">
          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </div>
      </Card>
  )
}

const description = 'Writing on design, creation and practical everyday tips';
const intro = 'A curated collection of inspirational boards, materials, color palettes and other stuff that I wanted to bookmark and share.';
const helpText = 'I also added my design mood playlist, press play for the full experience.';

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Linoy Avraham</title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <SimpleLayout
        title={description}
        intro={intro}
        helpText={helpText}
      >
        <iframe style={{ borderRadius: 12 }} className="max-w-3xl -mt-8 mb-16" src="https://open.spotify.com/embed/playlist/0JoDPg3BRJy8DWOeMCvwwo?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.sort((a, b) => (a.slug === 'the-list' || b.slug === 'teenagers-bedroom') ? -1 : 1).map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
