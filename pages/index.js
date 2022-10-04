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
      <div className='grid grid-cols-2 gap-4 transition-all'>
        <h1 className='text-[40px] text-black desktop3:ml-[30px] desktop2:ml-[100px] desktop:ml-[430px] font-inder font-semibold transition-all'>Statistiky</h1>
        <div className='col-start-1 row-span-2 transition-all'>
          <div className="flex flex-col h-full transition-all">
            <div className='flex flex-nowrap max-w-max transition-all'>
              <Sidebar />
              <div className='flex flex-nowrap desktop3:gap-16 desktop3:h-40 desktop3:ml-[30px] desktop2:gap-16 desktop2:h-40 desktop2:ml-[100px] desktop:gap-16 desktop:h-40 desktop:ml-[430px] max-w-max transition-all'>
                <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px] transition-all'>
                  <Card />
                </div>
                <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px] flex-1 transition-all'>
                  <Card />
                </div>
              </div>
            </div>
            <div className='w-[666px] h-[500px] desktop3:ml-[30px] desktop2:ml-[100px] desktop:ml-[430px] mt-8 transition-all'>
              <List />
            </div>
          </div>
        </div>
        <div className='col-start-2 px-12 transition-all'>
          <div className='w-[700px] h-64 desktop3:h-[200px] ml-auto transition-all'>
            <Graph />
          </div>
        </div>

        <div className='col-start-2 px-12 mt-[70px] transition-all'>
          <div className='w-[700px] desktop3:w-[600px] desktop3:h-[370px] h-[320px]  desktop3:ml-0 desktop2:ml-auto desktop:ml-auto transition-all'>
            <History />
          </div>
        </div>
      </div>
    </div>
  )
}
