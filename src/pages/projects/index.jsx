import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import coverTheUrbanJungle from './the-urban-jungle/cover.webp'
import coverArtOfCeramics from './art-of-ceramics/cover.webp'
import coverBathroomRenovation from './bathroom-renovation/cover.webp'

const projects = [
  {
    name: 'The Urban Jungle',
    description: 'Final project',
    link: { href: '/projects/the-urban-jungle' },
    logo: coverTheUrbanJungle,
    location: 'Tel Aviv'
  },
  {
    name: 'Art of Ceramics',
    description: 'Commercial spaces',
    link: { href: '/projects/art-of-ceramics' },
    logo: coverArtOfCeramics,
    location: 'Tel Aviv'
  },
  {
    name: 'Bathroom renovation',
    description: 'Superposition programs',
    link: { href: '/projects/bathroom-renovation' },
    logo: coverBathroomRenovation,
    location: 'Holon'
  }
]

const description = 'Projects I’ve made trying to discover my unique style';
const intro = "I’ve worked on many projects over the years but these are the ones that I’m most proud of. They're all in real spaces, aimed to provide practical and elegant solutions.";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Linoy Avraham</title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <SimpleLayout
        title={description}
        intro={intro}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                    src={project.logo}
                    alt={`${project.name} cover photo`}
                  />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <Card.Description>📍 {project.location}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
