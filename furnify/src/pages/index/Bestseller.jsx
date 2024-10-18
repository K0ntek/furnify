import React from 'react'

const Bestseller = () => {
  return (
   <div>
      <div className=' mx-auto text-center'>
      <h1 className=' capitalize font-playfair text-4xl text-center mb-3 inline-block mx-auto justify-center clear-both'>Nasz
          <span className=' mx-2 w-[100px] h-[38px] relative top-2 inline-block overflow-hidden'><img src="https://images.unsplash.com/photo-1724582586458-a51791349977?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' w-[100px] h-[38px] object-cover mx-auto rounded-3xl relative' style={{objectPosition: '80% 80%'}} />
          </span>Bestseller</h1>
      </div>
     <div className='shadow-[0px_0px_20px_0px] shadow-black/50 w-full h-full min-h-[600px] p-4 bg-[url("https://images.unsplash.com/photo-1724582586458-a51791349977?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] rounded-[40px] bg-fixed relative' style={{backgroundPositionY:'78%', backgroundPositionX:'50%'}}>
      {/* <h1 className=' font-playfair text-2xl absolute top-3 left-3 text-white bg-zinc-800 p-3 rounded-full '>Bestseller</h1> */}
      <div className=' w-1/2 lg:w-1/3 font-playfair bg-white/90 absolute rounded-3xl right-4' style={{height: 'calc(100% - 32px)'}}>
        <div className='space-y-4 mx-auto text-center relative top-[50%] translate-y-[-50%]'>
            <h1 className=' text-4xl'>Przytulna <br /> sofa </h1>
            <img src="https://images.unsplash.com/photo-1724582586458-a51791349977?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' w-3/4 md:w-1/2 aspect-square object-cover mx-auto rounded-3xl'/>
            <p className=' text-3xl capitalize'>Cena: 4000 PLN</p>
            <button className=' font-montalt bg-zinc-950 text-white py-2 px-4 text-lg rounded-full hover:tracking-wider transition-all duration-150'>Zobacz więcej</button>
        </div>
      </div>
    </div>

    <div className=' w-4/5 mx-auto mt-10'>
    <h1 className=' inline-block text-6xl font-playfair text-center capitalize'>Odkryj piękno nowoczesnych <span className=' max-w-[100px] h-[42px] inline-block'><img src="https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className=' object-cover w-[100px] h-full rounded-full'/></span> wnętrz z naszymi wyjątkowymi meblami!</h1>
    </div>

   </div>
  )
}

export default Bestseller