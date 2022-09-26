import React from "react";
import { IoHelpCircleSharp } from 'react-icons/io5';
import { RiSettings3Fill } from 'react-icons/ri';
import { MdLogout, MdSpaceDashboard } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-80 m-0
                    flex flex-col
                    bg-slate-50 text-white items-center">
      <h1 className="mt-10 text-[38px] font-inder text-black text-center font-bold">Nepreberači</h1>

      <div className="mt-10 space-y-1">
        <div className="flex w-64 h-[70px] text-center mt-auto items-center gap-x-6 justify-start cursor-pointer group bg-purple-200 rounded-[9px]">
          <i className="text-[30px] text-black ml-4  ease-out duration-300"><MdSpaceDashboard /></i>
          <h1 className=" text-black font-semibold  ease-out duration-300">Dashboard</h1>
        </div>
        <div className="flex w-64 h-[70px]  text-center mt-auto items-center gap-x-6 justify-start cursor-pointer group  rounded-[9px]">
          <i className="text-[30px] text-gray-500 ml-4 group-hover:text-black ease-out duration-300"><BiUser /></i>
          <h1 className=" text-gray-500 font-semibold  group-hover:text-black ease-out duration-300">Profil</h1>
          
        </div>
      </div>
    
      <div className="mt-auto mb-12 space-y-1">
        <div className="flex w-64 h-[70px]  text-center mt-auto items-center gap-x-6 justify-start cursor-pointer group">
          <i className="text-[30px] text-gray-500 ml-4 group-hover:text-black ease-out duration-300"><IoHelpCircleSharp /></i>
          <h1 className="text-gray-500 font-semibold group-hover:text-black ease-out duration-300">Pomoc</h1>
        </div>
        <div className="flex w-64 h-[70px]  text-center mt-auto gap-x-6 items-center justify-start cursor-pointer group">
          <i className="text-[30px] text-gray-500 ml-4 group-hover:text-black ease-out duration-300"><RiSettings3Fill /></i>
          <h1 className="text-gray-500 font-semibold group-hover:text-black ease-out duration-300">Nastavenia</h1>
        </div>
        <div className="flex w-64 h-[70px]  text-center mt-auto gap-x-6 items-center justify-start cursor-pointer group">
          <i className="text-[30px] text-gray-500 ml-4 group-hover:text-black ease-out duration-300"><MdLogout /></i>
          <h1 className="text-gray-500 font-semibold group-hover:text-black ease-out duration-300">Odhlasit sa</h1>
        </div>
      </div>

    </div>
  )
}