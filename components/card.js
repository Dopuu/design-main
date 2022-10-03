export default function Card() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="mt-8">
                    <h1 className="ml-8 text-[28px] font-inriasans">1 000 000</h1>
                </div>
                <div className="whitespace-nowrap mt-3 ml-8 ">
                    <h1 className="text-[17px] font-inder ">Počet Nepreberačov</h1>
                </div>
                <div className="whitespace-nowrap mt-2 ml-8 ">
                    <h1 className="text-[14px] font-inder text-gray-300">24/06/2022 - {date}</h1>
                </div>
            </div>
            <div className="flex flex-col bg-purple-200 w-16 ml-[51px] rounded-r-[15px] h-[160px]">
                <div className="h-[144px] w-16  whitespace-nowrap mt-[80px]">
                    <h1 className="text-[18px] font-inriasans text-black -rotate-90 font-semibold tracking-[4px]">Celkovo</h1>
                </div>
            </div>
            
        </div>
    )
}