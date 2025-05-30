'use client'

import { useInView } from '@nff/design-system/hooks/use-in-view'
import { cn } from '@nff/design-system/lib/utils'
import Image from 'next/image'

export const Projects = () => {
  const { ref: cardOneRef, isInView: isCardOneInView } = useInView()
  const { ref: cardTwoRef, isInView: isCardTwoInView } = useInView()
  const { ref: cardThreeRef, isInView: isCardThreeInView } = useInView()
  const { ref: cardFourRef, isInView: isCardFourInView } = useInView()

  const isDevEnv = process.env.NODE_ENV === 'development'

  return (
    <div className="mx-[72px] mb-[72px] xl:flex xl:flex-wrap 2xl:w-[1400px]">
      <div
        ref={cardOneRef}
        className={cn(
          isCardOneInView ? 'card-animate' : '',
          'card-base mt-[initial] flex flex-col items-center justify-center xl:[display:initial]'
        )}
      >
        <a
          href="https://apps.apple.com/gb/app/pleo/id1110743278"
          target="_blank"
          rel="noreferrer"
          className="decoration-none"
        >
          <div className="multi-gradient mt-[72px] flex h-[700px] w-[350px] items-center justify-center rounded-[44px] bg-foreground xl:mt-[initial] xl:h-[612px] xl:w-[366px] 2xl:w-[491px]">
            <video
              className="h-auto w-[270px] rounded-3xl shadow-xl xl:w-[230px]"
              aria-label="triple feedback project video"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                src={
                  isDevEnv
                    ? undefined
                    : 'https://qg4jfsqsfxj4pwmc.public.blob.vercel-storage.com/triple-feedback-NiTKjzZu9G6yQThFPFw1oH1UzxDXyq.mp4'
                }
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-[350px] xl:mt-6 xl:flex xl:w-[initial] xl:flex-col">
            <p className="mx-0 mt-6 mb-4 xl:m-0 2xl:my-[initial]">
              Triple Feedback
            </p>
            <p className="m-0 text-[#7c7c83] xl:max-w-[366px] 2xl:max-w-[491px]">
              Enhanced reporting of incorrect vendor data for Pleo customers,
              shifting from a manual process to a self-serve experience.
            </p>
          </div>
        </a>
      </div>
      <div
        ref={cardTwoRef}
        className={cn(
          isCardTwoInView ? 'card-animate' : '',
          'card-base flex flex-col items-center justify-center xl:ml-[72px] xl:[display:initial]'
        )}
      >
        <a href="/" className="decoration-none">
          <div className="mt-[72px] flex h-[350px] w-[350px] items-center justify-center rounded-[44px] bg-foreground xl:mt-[initial] xl:h-[612px] xl:w-[618px] 2xl:w-[690px] dark:bg-[#403DFF]">
            {isDevEnv ? (
              <div />
            ) : (
              <Image
                src={
                  'https://qg4jfsqsfxj4pwmc.public.blob.vercel-storage.com/Screenshot%202025-04-27%20at%2014.33.07-CLIk46tkB6ynvnCK1SHIZTd5nhEW2t.webp'
                }
                alt="Portfolio screenshot"
                width={2560}
                height={1440}
                quality={100}
                className="h-auto w-[290px] rounded-3xl shadow-xl xl:w-[520px] 2xl:w-[600px]"
              />
            )}
          </div>
          <div className="w-[350px] xl:mt-6 xl:flex xl:w-[initial] xl:flex-col">
            <p className="mx-0 mt-6 mb-4 xl:m-0 2xl:my-[initial]">Portfolio</p>
            <p className="m-0 text-[#7c7c83] xl:max-w-[618px] 2xl:max-w-[690px]">
              Personal site showcasing my work as a frontend engineer.
            </p>
          </div>
        </a>
      </div>
      {isDevEnv && (
        <div className="xl:mt-[72px] xl:flex">
          <div
            ref={cardThreeRef}
            className={cn(
              isCardThreeInView ? 'card-animate' : '',
              'card-base flex flex-col items-center justify-center xl:mr-[72px] xl:[display:initial]'
            )}
          >
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="decoration-none"
            >
              <div className="mt-[72px] flex h-[700px] w-[350px] items-center justify-center rounded-[44px] bg-foreground xl:mt-[initial] xl:h-[612px] xl:w-[618px] 2xl:w-[690px] dark:bg-[#403DFF]" />
              <div className="w-[350px] xl:mt-6 xl:flex xl:w-[initial]">
                <p className="mx-0 mt-6 mb-4 xl:m-0 2xl:my-[initial]">
                  Project
                </p>
                <p className="m-0 text-[#7c7c83] xl:ml-3">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </a>
          </div>
          <div
            ref={cardFourRef}
            className={cn(
              isCardFourInView ? 'card-animate' : '',
              'card-base mt-[initial] flex flex-col items-center justify-center xl:[display:initial]'
            )}
          >
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="decoration-none"
            >
              <div className="multi-gradient mt-[72px] flex h-[700px] w-[350px] items-center justify-center rounded-[44px] bg-foreground xl:mt-[initial] xl:h-[612px] xl:w-full 2xl:w-[491px]" />
              <div className="w-[350px] xl:mt-6 xl:flex xl:w-[initial]">
                <p className="mx-0 mt-6 mb-4 xl:m-0 2xl:my-[initial]">
                  Project
                </p>
                <p className="m-0 text-[#7c7c83] xl:ml-3">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
