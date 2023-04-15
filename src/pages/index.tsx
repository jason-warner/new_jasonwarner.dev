import Image from 'next/image'
import Layout from '@component/components/layout'
import BackgroundImg from '../../public/img/bgImg.jpg'
import { CodepenSVG, GithubSVG, LinkedInSVG } from '@component/components/icons'
import { TextWrapper } from '@component/components/utils/TextWrapper'

export default function Home() {

  return (
    <>
      <Image
        src={BackgroundImg}
        alt='tech background image of viewing computer through glasses'
        className='backdrop-brightness-50 fixed left-0 top-0 z-0 w-full h-full bg-cover bg-no-repeat'
      />
      <Layout>
        <div className={`bg-dark bg-opacity-60 w-full h-full bg-cover bg-no-repeat`}>
          <div className='flex flex-col p-4 mb-6 items-center lg:items-start h-full justify-between'>

            <div className='flex flex-row ml-0 lg:ml-16 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl justify-center lg:justify-start mt-28'>
              <TextWrapper size='xl' className='text-white'>Jason</TextWrapper>
              &nbsp;
              <TextWrapper size='xl' className='text-secondaryFont'>Warner</TextWrapper>
            </div>

            <div className='flex flex-row m-4 ml-0 lg:ml-16 justify-center lg:justify-start'>
              <TextWrapper size='md' className='bg-black bg-opacity-30 p-6 rounded'>
                Full Stack JavaScript Developer
              </TextWrapper>
            </div>

            <div className='flex flex-row ml-0 lg:ml-16 w-full justify-center lg:justify-start mb-28'>
              <a
                className='w-10 mx-4 lg:mx-6 md:w-12 lg:w-12 xl:w-14'
                href="https://github.com/jason-warner"
                target="_blank"
              >
                <GithubSVG />
              </a>
              <a
                className='w-10 mx-4 lg:mx-6 md:w-12 lg:w-12 xl:w-14'
                href="https://www.linkedin.com/in/jason-warner-216511156"
                target='_blank'
              >
                <LinkedInSVG />
              </a>
              <a
                className='w-10 mx-4 lg:mx-6 md:w-12 lg:w-12 xl:w-14'
                href="https://codepen.io/jason-warner"
                target="_blank"
              >
                <CodepenSVG />
              </a>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}

