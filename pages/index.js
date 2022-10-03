import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import Graph from '../components/graph'
import History from '../components/history'
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
        <div className='col-start-1 row-span-2'>
          <div className="flex flex-col h-full">
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
            <div className='w-[666px] h-[500px]  ml-[430px] mt-8'>
              <List />
            </div>
          </div>
        </div>
        <div className='col-start-2 px-12'>
          <div className='w-[700px] h-64  ml-auto '>
            <Graph />
          </div>
        </div>

        <div className='col-start-2 px-12 mt-[70px]'>
          <div className='w-[700px] h-[320px]  ml-auto'>
            <History />
          </div>
        </div>
      </div>
    </div>
  )
}
