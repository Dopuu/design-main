import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import facebook from '../public/Facebook.svg';

const History = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex w-full k align-middle'>
                <h1 className='text-[30px] text-black font-inder font-semibold flex-1 inline-block self-center'>Historia</h1>
                <h1 className='text-[14x]  text-gray-400 font-inder inline-block self-center'>Zobrazit viacej</h1>
            </div>
            <div className='flex w-full h-full'>
                <div class="table w-full border-spacing-y-4 h-full overflow-y-scroll overflow-hidden">
                    <div class="table-row-group w-full h-full overflow-y-scroll overflow-hidden absolute scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar<br className='desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden'></br>
                                <div className="font-inriasans text-gray-500 font-normal text-[16px] desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden">23/09/22</div>
                            </div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500 desktop10:hidden">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Bazos</div>
                            <a className="table-cell align-middle pl-[93px] cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar<br className='desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden'></br>
                                <div className="font-inriasans text-gray-500 font-normal text-[16px] desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden">23/09/22</div>
                            </div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500 desktop10:hidden">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Bazos</div>
                            <a className="table-cell align-middle pl-[93px] cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar<br className='desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden'></br>
                                <div className="font-inriasans text-gray-500 font-normal text-[16px] desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden">23/09/22</div>
                            </div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500 desktop10:hidden">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Bazos</div>
                            <a className="table-cell align-middle pl-[93px] cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar<br className='desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden'></br>
                                <div className="font-inriasans text-gray-500 font-normal text-[16px] desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden">23/09/22</div>
                            </div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500 desktop10:hidden">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Bazos</div>
                            <a className="table-cell align-middle pl-[93px] cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar<br className='desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden'></br>
                                <div className="font-inriasans text-gray-500 font-normal text-[16px] desktop:hidden desktop2:hidden desktop3:hidden desktop4:hidden desktop5:hidden desktop6:hidden desktop7:hidden desktop8:hidden desktop9:hidden">23/09/22</div>
                            </div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500 desktop10:hidden">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Bazos</div>
                            <a className="table-cell align-middle pl-[93px] cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History