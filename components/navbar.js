import { FiSearch } from 'react-icons/fi';
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 my-8 px-12 transition ease-in-out">
                <div className="flex-1">
                    <h1 className="text-[38px] font-inder desktop7:ml-[300px] desktop6:ml-[300px] desktop5:ml-[300px] desktop4:ml-[300px] desktop3:ml-[-12px] desktop2:ml-[52px] desktop:ml-96 font-bold transition-all">Vitaj, Kristian👋</h1>
                </div>
                <div className="flex-none gap-2 ">
                    <div className="flex flex-row form-control mr-32 w-96 desktop4:w-[290px] desktop5:w-[290px] desktop7:mr-16 desktop7:w-[290px]  desktop6:w-[290px] rounded-[8px] bg-gray-100 outline outline-gray-100 transition-all">
                        <i className='flex-none mt-[11px] ml-4 bg-gray-100 text-[28px]'><FiSearch/></i>
                        <input type="text" placeholder="Hľadať" className="input bg-gray-100 flex-1 placeholder:text-black placeholder:font-inder focus:outline-none" />

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full bg-black">

                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}