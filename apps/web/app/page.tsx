import { TickingClock } from '@nff/design-system/components/ticking-clock'
import { BriefcaseBusiness, Clock, MapPin } from 'lucide-react'

const Home = () => {
  return (
    <div className="mx-auto my-0 mt-[70px] 3xl:w-[1400px] animate-[fadeBlur_2.5s_ease-in-out_forwards] xl:my-0 xl:w-[1200px]">
      <div className="my-[72px] xl:mx-[72px] xl:flex xl:justify-between 2xl:mx-[72px] xl:[align-items:initial]">
        <div className="mx-auto my-0 mb-18 w-[330px] xl:flex xl:flex-col xl:justify-between xl:[margin:initial] xl:[padding-left:initial] xl:[width:initial]">
          <h1 className="color-white my-[30px] font-normal font-sans text-[44px] xl:m-0 xl:w-[800px] xl:text-[106px] xl:leading-[124px]">
            I enjoy creating{' '}
            <span className="-skew-x-[16deg] inline-block font-semibold text-[44px] text-white leading-tight tracking-tighter xl:text-[106px] xl:leading-[124px]">
              digital
            </span>{' '}
            products.
          </h1>
          <div className="text-white xl:mt-[72px] xl:flex">
            <div className="w-[300px] xl:[width:initial]">
              <BriefcaseBusiness className="mb-3 h-[20px] w-auto" />
              <p className="m-0 font-bold">Current Experience</p>
              <p className="m-0 mt-1 text-[#7c7c83]">
                Associate Frontend Engineer II @ Pleo.
              </p>
            </div>
            <div className="mt-11 xl:ml-[72px] xl:[margin-top:initial]">
              <MapPin className="mb-3 h-[20px] w-auto" />
              <p className="m-0 font-bold">Location</p>
              <p className="m-0 mt-1 text-[#7c7c83]">Berlin</p>
            </div>
            <div className="mt-11 hidden xl:ml-[72px] xl:block xl:[margin-top:initial]">
              <Clock className="mb-3 h-[20px] w-auto" />
              <p className="m-0 font-bold">Local Time</p>
              <TickingClock />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
