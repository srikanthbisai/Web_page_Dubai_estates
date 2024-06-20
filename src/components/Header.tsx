import Image from "next/image";
import "../app/App.css";
export default function Header() {
  return (
    <div className="app flex flex-col">
      <div className="header flex flex-col w-auto h-full">
        <div className="navbar_container flex w-3/4 ml-auto mr-auto mt-10 justify-between">
          <div className="flex w-[165] h-[20px] items-center justify-center sm:max-w-[30%]">
            <Image
              src="/Logo.png"
              alt="logo"
              width={150}
              height={10}
              className="bg-cover"
            />
          </div>
          <button className="header-button w-[200px] rounded-md border p-2 hidden sm:block bg-transparent shadow-md ">
            ENQUIRE NOW
          </button>
        </div>

        <div className="navbottom_container flex h-full sm:flex-col xl:flex-row w-3/4 ml-auto mr-auto justify-between">
          <div className="container1_child1 flex flex-col mt-24 bg-transparent w-1/2 h-full">
            <h1 className="text-white text-3xl font-bold"> HARBOUR LIGHTS </h1>
            <h1 className="text-white text-3xl font-bold">
              DE
              <span className="text-blue-500 ml-2">GRESOGONO</span>
            </h1>
            <h1 className="text-white font-bold mt-3">
              {" "}
              1, 2 & 3 Bedrooms Seaside Apartments
            </h1>
            <h1 className="text-white font-bold">in Dubai Maritime City </h1>

            <h6 className="small-items bg-gray-800 w-[230px] mt-10 text-white text-[12px] p-2  bl-blue-400">
              Rental Returns of <span className="font-bold ">UPTO 11%</span>
            </h6>
            <h6 className="small-items  bg-gray-800 mt-3 w-[230px] text-white text-[12px] p-2 bl-blue-400">
              Rental Returns of <span className="font-bold ">UPTO 11%</span>
            </h6>
          </div>

          <div className="container2 flex flex-col  mt-24 w-1/4 h-1/2 ml-40 p-3">
            <div className="header-blur-div text-slate-300 h-full space-y-3 p-5">
              <h1 className="text-[10px] tracking-widest">
                PRICING STARTS FROM
              </h1>
              <h1 className="text-3xl text-white">$ 425,000</h1>
              <h1 className="text-md ">AED 1.3 Million</h1>
              <button className="presentation-button w-[95%] justify-center text-center text-white font-bold rounded-sm p-2 text-sm">
                GET A PRESENTATION
              </button>
            </div>
              <div className="bg-gray-600 h-auto">
                <p className="text-[12px] p-2 text-slate-400 text-wrap">
                Get an Expert’s Presentation of Real Estate in Dubai for Life and investment
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className="bottom_header flex h-[188px] bg-slate-300 ">
        <div className="navbottom_container flex w-3/4 h-auto m-auto  space-around gap-10">
          <div className="navbar_child_on w-1/4 h-full flex flex-col items-center justify-center text-center">
            <Image
              src="/Group 132.png"
              alt="logo"
              width={40}
              height={10}
              className="bg-cover bg-transparent"
            />
            <h5 className="mt-4 text-blue-800 font-bold text-sm">BOOK WITH</h5>
            <h1 className="description font-bold text-2xl">ONLY 20%</h1>
          </div>

          <div className="navbar_child_two w-1/4 h-full flex flex-col items-center justify-center text-center">
            <Image
              src="/Group.jpg"
              alt="logo"
              width={40}
              height={10}
              className="bg-cover bg-transparent"
            />
            <h5 className="mt-4 text-blue-800 font-bold text-sm">
              PAYMENT PLAN
            </h5>
            <h1 className="description font-bold text-2xl">EASY 70/30</h1>
          </div>

          <div className="navbar_child_three w-1/4 h-full flex flex-col items-center justify-center text-center">
            <Image
              src="/Group 16.png"
              alt="logo"
              width={40}
              height={10}
              className="bg-cover bg-transparent"
            />
            <h5 className="mt-4 text-blue-800 font-bold text-sm">
              HANDOVER ON
            </h5>
            <h1 className="description font-bold text-2xl">Q2 2027</h1>
          </div>

          <div className="navbar_child_four w-1/4 h-full flex flex-col items-center justify-center text-center">
            <Image
              src="/Group 40.jpg"
              alt="logo"
              width={40}
              height={10}
              className="bg-cover bg-transparent"
            />
            <h5 className="mt-4 description font-bold text-sm">
              AREA STARTS FROM
            </h5>
            <h1 className="description font-bold text-2xl">700 SQMT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
