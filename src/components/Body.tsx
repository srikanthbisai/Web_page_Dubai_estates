import '../app/App.css'
import Image from 'next/image'

const Body = () => {
  return (
    <div className='body_container h-auto space-y-6'>
        <div className='body_text_container flex flex-col w-3/4 m-auto mt-10 items-center h-full'>
      <h1 className='text-2xl font-semibold text-blue-900 tracking-widest'>HARBOUR</h1>
      <h1 className='text-2xl font-semibold text-blue-900 tracking-widest'>LIGHTS</h1>
      <h6 className='text-[8px] text-blue-900 font-serif'>deGRISOGONO</h6>
      <h6 className='text-[4px] text-blue-900 font-serif'>GENEVE</h6>

      <h1 className='mt-3 text-2xl font-bold text-blue-900'>FEATURES AND AMENITIES</h1>

     <div className='w-auto mt-4 text-center'>
       Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront 
      <br></br> lifestyle.Its maritime-inspired amenities provide an unmatched seaside experience, offering a 
       <br></br>life of tranquility and bliss.
      </div>

    </div >
      
      <div className='body_image_container w-3/4 m-auto mt-4 flex items-center justify-between '>

        <div  className=' child_1 shadow-lg rounded-lg p-2 text-center'>
          <Image src="/Group 133.jpg" alt="" height={200} width={220} />
          <h3 className='description font-bold'>Floating</h3>
          <h3 className='description font-bold'>Pools</h3>
        </div>

        <div  className='child_2 shadow-lg rounded-lg p-2 text-center'>
        <Image src="/Ellipse 7.png" alt="" height={250} width={220} />
        <h3 className='description font-bold'>Spacious Cabins</h3>
        <h3 className='description font-bold'>Like Rooms</h3>
        </div>

        <div  className='child_3 shadow-lg rounded-lg p-2 text-center '>
        <Image src="/Group 135.jpg" alt="" height={250} width={220} />
        <h3 className='description font-bold'>Sea Facing</h3>
        <h3 className='description font-bold'>Swimming Pools</h3> 
        </div>

        <div className='child_4 shadow-lg rounded-lg p-2 text-center '>
        <Image src="/Ellipse1.png" alt="" height={200} width={220} />
        <h3 className='description font-bold'>Gymnasium</h3>
        <h3 className='description font-bold'>& Fitness</h3> 
        </div>

      </div>


      <div className='body_copywrite flex justify-end gap-2 w-3/4 m-auto'>
        <p className='text-[10px]'>
        *T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2
        </p>
      </div>

      <div className='body_buttons w-3/4 flex justify-end gap-2 m-auto'>
        <button className='color-button w-[150px] p-3 rounded-md text-white font-bold'>EXTERIORS</button>
        <button className="border-color-button w-[150px] p-3 rounded-md text-blue-800 font-bold">INTERIORS</button>
      </div>


      <div className='body_main_image w-3/4 m-auto mt-10 '>
       <Image src="/Rectangle 89.jpg "
       alt='Rectangle' width={1440} height={1440} />
      </div> 
      <div className='body_small_images flex w-3/4 m-auto justify-between'> 
         <div>
         <Image src="/Rectangle 90.jpg "
         alt='Rectangle' width={280} height={200} />
         </div>

         <div>
         <Image src="/Rectangle 91.jpg "
         alt='Rectangle' width={280} height={200} />
         </div>

         <div>
         <Image src="/Rectangle 92.jpg "
         alt='Rectangle' width={280} height={200} />
         </div>

         <div>
         <Image src="/Rectangle 93.jpg "
         alt='Rectangle' width={280} height={200} />
         </div>

      </div>

    </div>
  
  )
}

export default Body
