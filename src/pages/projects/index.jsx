import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import coverTheUrbanJungle from './the-urban-jungle/cover.webp'

const projects = [
  {
    name: 'The Urban Jungle',
    description: 'Atarim square as an urban jungle',
    link: { href: '/projects/the-urban-jungle' },
    logo: coverTheUrbanJungle
  }
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Linoy Avraham</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <Image
                  src={project.logo}
                  alt={`${project.name} cover photo`}
                />
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
