import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import facebook from '../public/Facebook.svg';

const History = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex w-full k align-middle'>
                <h1 className='text-[30px] text-black font-inder font-semibold flex-1 inline-block self-center'>Historia</h1>
                <h1 className='text-[14x] text-gray-400 font-inder  inline-block self-center'>Zobrazit viacej</h1>
            </div>
            <div className='flex w-full h-full'>
                <div class="table w-full border-spacing-y-4 h-full overflow-y-scroll overflow-hidden">
                    <div class="table-row-group w-full h-full overflow-y-scroll overflow-hidden absolute">
                        <div class="table-row h-8 w-64">
                            <div className="table-cell text-[55px] text-black  w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <a className="table-cell align-middle pl-32 cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div className="table-row h-8">
                            <div className="table-cell text-[55px] text-black min-w-full w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <a className="table-cell align-middle pl-32 cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div className="table-row h-8">
                            <div className="table-cell text-[55px] text-black min-w-full w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <a className="table-cell align-middle pl-32 cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div className="table-row h-8">
                            <div className="table-cell text-[55px] text-black min-w-full w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <a className="table-cell align-middle pl-32 cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div className="table-row h-8">
                            <div className="table-cell text-[55px] text-black min-w-full w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <a className="table-cell align-middle pl-32 cursor-pointer"><BsThreeDotsVertical /></a>
                        </div>
                        <div className="table-row h-8">
                            <div className="table-cell text-[55px] text-black min-w-full w-14 h-14"><Image src={facebook} width="64px" height="64px" alt="fb" layout="responsive" /></div>
                            <div className="table-cell align-middle pl-4 font-inriasans font-bold text-[18px]">Kristian Kotlar</div>
                            <div className="table-cell align-middle pl-20 font-inriasans text-gray-500">23/09/22</div>
                            <div className="table-cell align-middle pl-16 font-semibold">Facebook</div>
                            <div className="table-cell align-middle pl-16 cursor-pointer"><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History