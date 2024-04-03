import Link from 'next/link'
import { draftMode } from 'next/headers'

import Date from './date'
import CoverImage from './cover-image'
import MoreStories from './more-stories'

import { getAllPosts } from '@/lib/api'

function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-4'>
        Clement
      </h1>
      <h2 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        A mild blog
      </h2>
    </section>
  )
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
}) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default async function Page() {
  // const { isEnabled } = draftMode()
  // const allPosts = await getAllPosts(isEnabled)
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    <div className='container p-8 object-center'>
      <h1 className='text-3xl font-semibold'>I'm Clement Murphy</h1>
      <h3>I make software.</h3>
      <br />
      <p>
        Currently working for{' '}
        <img
          className='inline'
          src='https://www.premierleague.com/resources/rebrand/v7.142.1/i/favicon/favicon-16x16.png'
        />
        &nbsp;
        <a href='https://premierleague.com' className='font-style: underline'>
          The Premier League
        </a>
      </p>
      <br />
      <p>Previously of:</p>
      <p>
        <img
          className='inline'
          src='https://www.inyourarea.co.uk/assets/favicon/favicon-16x16.png'
        />
        &nbsp;
        <a href='https://inyourarea.co.uk' className='font-style: underline'>
          InYourArea
        </a>{' '}
        (Reach plc)
      </p>
      <p>
        <img
          className='inline'
          src='https://www.fnatic.com/favicons/favicon-16x16.png'
        />
        &nbsp;
        <a href='https://fnatic.com' className='font-style: underline'>
          FNATIC
        </a>
      </p>
      <p>
        <img
          className='inline'
          height={16}
          width={16}
          src='https://www.faceit.com/favicon.ico'
        />
        &nbsp;
        <a href='https://faceit.com' className='font-style: underline'>
          FACEIT
        </a>
      </p>
      <p>and many others</p>
      <br />
      <p>
        <a href='mailto:clemmurphy@gmail.com' className='font-style: underline'>
          Talk to me here
        </a>
      </p>
      {/* <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} /> */}
    </div>
  )
}
