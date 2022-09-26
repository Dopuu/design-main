import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import List from '../components/list'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className='grid grid-cols-2 gap-4  '>
        <h1 className='text-[40px] text-black ml-[430px] font-inder font-semibold'>Statistiky</h1>
        <div className='col-start-1 col-end-1 '>
          <div className='flex flex-nowrap max-w-max'>
            <Sidebar />
            <div className='flex flex-nowrap gap-16 h-40 ml-[430px] max-w-max '>
              <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px]'>
                <Card />
              </div>
              <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px] flex-1'>
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className='col-start-2 px-12'>
          <div className='w-[700px] h-64 bg-black ml-auto '>
              <h1 className='text-white'>graph</h1>
          </div>
        </div>
        <div className='col-start-1 px-12 ml-96 mr-auto'>
          <div className='w-[666px] h-96  ml-auto '>
              <List/>
          </div>
        </div>
        <div className='col-start-2 px-12 '>
          <div className='w-[700px] h-96 bg-black ml-auto '>
              <h1 className='text-white'>history</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
