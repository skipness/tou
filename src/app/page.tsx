import UploadZone from '@/components/upload-zone/upload-zone'
import { Monoton } from 'next/font/google'

const monoton = Monoton({ subsets: ["latin"], weight: "400" })

export default () => {
  return (<main className='flex flex-col h-full items-center justify-start'>
    <div className={`${monoton.className} select-none mt-16 text-9xl text-center md:text-14xl `}>
      <span className='text-gold'>T</span>ou
      <sup className='text-6xl md:text-9xl'>4</sup>
    </div>
    <UploadZone />
  </main>)
}
