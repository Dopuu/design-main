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
      <div className='grid grid-cols-2 min-h-0 min-w-0 desktop10:grid-cols-1 desktop10:justify-items-center desktop9:grid-cols-1 desktop9:justify-items-center desktop8:grid-cols-1 desktop8:justify-items-center desktop7:grid-cols-1 desktop7:justify-items-end desktop6:grid-cols-1 desktop6:justify-items-end desktop5:grid-cols-1 desktop5:justify-items-end desktop4:grid-cols-1 desktop4:justify-items-end gap-4 transition-all desktop3:overflow-x-hidden desktop3:overflow-y-hidden desktop10:overflow-x-hidden desktop10:overflow-y-hidden'>
        <div className='col-start-1 row-span-2 transition-all desktop:max-w-[936px] desktop2:max-w-[924px]'>
          <div className="flex flex-col h-full transition-all items-center">
          <h1 className='text-[40px] text-black desktop9:mr-[490px] desktop8:mr-[468px] desktop7:mr-[550px] desktop6:mr-[597px] desktop5:mr-[675px] desktop4:mr-[675px] desktop3:ml-[-462px] desktop2:ml-[-534px] desktop:ml-[-30px] font-inder font-semibold transition-all '>Statistiky</h1>
            <div className='flex flex-nowrap max-w-max transition-all desktop10:justify-self-center'>
              <Sidebar />   
              <div className='flex flex-nowrap items-center desktop10:flex-col desktop10:gap-8 desktop10:items-center desktop9:gap-16 desktop9:justify-center desktop8:gap-16 desktop8:justify-center desktop7:gap-16 desktop7:mr-[85px] desktop7:justify-center desktop6:gap-16 desktop6:mr-[130px] desktop6:justify-center desktop5:gap-16 desktop5:mr-[210px] desktop5:justify-center desktop4:gap-16 desktop4:mr-[210px] desktop4:justify-center desktop3:gap-16 desktop3:h-40 desktop3:ml-[6px] desktop2:gap-16 desktop2:h-40 desktop2:ml-[-66px] desktop:gap-16 desktop:h-40 desktop:ml-[430px] max-w-max transition-all'>
                <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px] transition-all'>
                  <Card />
                </div>
                <div className='bg-black w-72 text-white rounded-r-[0px] rounded-l-[15px] flex-1 transition-all'>
                  <Card />
                </div>
              </div>
            </div>
            <div className='w-[666px] desktop10:w-[470px] h-[500px] desktop8:ml-8 desktop3:ml-[30px] desktop2:ml-[-44px] desktop:ml-[450px] mt-8 transition-all desktop4:mr-48 desktop5:mr-48 desktop6:mr-28 desktop7:mr-16'>
              <List />
            </div>
          </div>
        </div>
        <div className='col-start-2 pr-8 desktop8:ml-16 desktop10:col-start-1 desktop6:mr-14 desktop5:mr-36 desktop4:mr-36 desktop3:ml-20 desktop9:col-start-1 desktop8:col-start-1 desktop7:col-start-1 desktop6:col-start-1 desktop5:col-start-1 desktop4:col-start-1 transition-all'>
          <div className='w-[700px] h-64 desktop10:w-[450px] desktop10:ml-[10px] desktop3:h-[200px] desktop3:ml-0 ml-auto transition-all desktop10:mt-8 desktop9:mt-8 desktop8:mt-8 desktop7:mt-8 desktop6:mt-8 desktop5:mt-8 desktop4:mt-8'>
            <Graph />
          </div>
        </div>

        <div className='col-start-2 pr-8 desktop10:ml-8 desktop8:ml-16 desktop10:col-start-1 desktop6:mr-14 desktop5:mr-36 desktop4:mr-36 desktop3:ml-20 desktop9:col-start-1 desktop8:col-start-1 desktop7:col-start-1 desktop6:col-start-1 desktop5:col-start-1 desktop4:col-start-1 mt-[70px] desktop10:mt-0 transition-all'>
          <div className='w-[700px] desktop10:w-[470px] desktop3:w-[600px] desktop3:h-[370px] h-[320px] desktop3:ml-0 desktop2:ml-auto desktop:ml-auto transition-all'>
            <History />
          </div>
        </div>
      </div>
    </div>
  )
}
