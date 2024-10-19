import React from 'react'

const LatestCollection = () => {
  return (
    <div>
      <h1 className=' font-playfair capitalize text-center text-4xl sm:text-5xl mb-10'> Nasza ostatnia kolekcja</h1>
      <div className="w-full h-fit min-h-[500px] md:min-h-[700px] overflow-hidden rounded-[40px] shadow-[0px_0px_20px_0px] shadow-black/50 bg-[url('https://img.freepik.com/darmowe-zdjecie/renderowania-3d-minimalna-skandynawska-drewniana-garderoba-z-szafa_105762-2302.jpg?t=st=1729279217~exp=1729282817~hmac=39fe7e01f06dd77607d147c37c3816d4e30fcefd880ba63551cb9a63a068c6ee&w=1380')] relative">
      {/* <div className="w-full h-full bg-black/30 absolute top-0 z-[95]"></div> */}
        <div className=' bg-white w-2/3 sm:w-1/2 lg:w-1/3 h-full p-5 absolute top-4 right-4 rounded-3xl mx-auto justify-center text-center' style={{height: `calc(100% - 32px)`}}>
            <div className=' relative top-[50%] translate-y-[-50%] space-y-5'>
                <h1 className=' font-playfair text-3xl sm:text-4xl'>Lorem ipsum dolor sit.</h1>
                <p className=' font-montalt w-4/5 mx-auto font-[200] text-md sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, optio.</p>
                <img src="https://img.freepik.com/darmowe-zdjecie/renderowania-3d-minimalna-skandynawska-drewniana-garderoba-z-szafa_105762-2302.jpg?t=st=1729279217~exp=1729282817~hmac=39fe7e01f06dd77607d147c37c3816d4e30fcefd880ba63551cb9a63a068c6ee&w=1380" alt=""  className='shadow-[0px_0px_20px_0px] shadow-black/30 aspect-square rounded-3xl w-3/4 md:w-1/2 mx-auto'/>
                <div>
                <button className=' font-montalt bg-zinc-950 text-white rounded-full p-2 hover:tracking-wider transition-all duration-150'>Zobacz więcej</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LatestCollection