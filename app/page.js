import Image from "next/image"

export default function HomePage (){
    return(
        <main className="min-h-screen">
            

              <div className="bg-[url(/laptop.png)] bg-right h-screen bg-indigo-500 bg-no-repeat">
               <div className="pt-10 pl-20 md:pt-20">
                <p className="text-3xl text-white font-bold py-5 md:text-6xl md:text-white md:font-bold md:py-10">Banking the <br/>next billion</p>
                <p className="text-white text-xl mt-10 md:text-white md:text-xl">From smartphone ownership to full-stack digital 
                 banking, PalmPay<br/> makes financial
                 opportunity accessible at scale in high-growth <br/> emerging markets.</p>
                </div>

                <div className="flex mt-10 px-15 gap-5">
                  <button className="text-xl text-white rounded-full w-60 h-10 bg-red-800
                   hover:bg-indigo-800 hover:text-white ">About Us</button>

                  <button className="text-xl text-white rounded-full w-60 h-10 bg-indigo-700
                   hover:bg-red-800 hover:text-white">For Business</button>
                </div>
                
                <div className="flex gap-5 px-15 mt-15 md:flex md:gap-5 md:px-15 md:mt-10">
                <div className="">
                   <Image 
                   src="/ft1.png"
                   alt=""
                   width={200}
                   height={100}
                   />
                </div>

                <div className="">
                   <Image 
                   src="/ft2.png"
                   alt=""
                   width={200}
                   height={100}
                   />
                </div>
                </div>

             </div>

             <div className="grid grid-cols-1 px-20 mt-10 md:grid-cols-6 md:px-10 md:mt-10">
                <div>
                   <Image 
                   src="/nd2.png"
                   alt="nd2.png"
                   width={200}
                   height={100}
                   />
                </div>

                <div>
                   <Image 
                   src="/nd1.png"
                   alt="nd1.png"
                   width={200}
                   height={100}
                   />
                </div>

                 <div>
                   <Image 
                   src="/nd3.png"
                   alt=""
                   width={200}
                   height={100}
                   />
                </div>

                <div>
                   <Image 
                   src="/ndcbn5.png"
                   alt="nd3.png"
                   width={200}
                   height={100}
                   />
                </div>

                <div>
                   <Image 
                   src="/nd2.png"
                   alt="nd2.png"
                   width={200}
                   height={100}
                   />
                </div>

                <div>
                   <Image 
                   src="/ndcbn5.png"
                   alt="ndcbn5.png"
                   width={200}
                   height={100}
                   />
                </div>
                
             </div>
             <div className="grid grid-cols-1 gap-5 mt-18 md:grid-cols-1 md:px-30 lg:grid-cols-3 md:gap-5 md:mt-18 ">
                 <div className="bg-white shadow-md rounded-md w-79 md:w-100 h-60 pt-10 hover:bg-gray-100 lg:w-90">
                    <p className="text-2xl text-center text-indigo-800 ">Accessible</p>
                    <p className="text-xl text-indigo-800 pt-5 text-center justify-center">PalmPay removes cost barriers with<br/> fee-free accounts and transfers.<br/> 
                        Our smartphone app and mobile <br/> money agent network put  banking <br/> is within reach for everyone.</p>
                 </div>

                 <div className="bg-white shadow-lg rounded-md w-79 md:w-100 h-60 pt-5 mt-10 hover:bg-gray-100 lg:w-90">
                    <p className="text-2xl text-center text-indigo-800 pt-5">Reliable</p>
                    <p className="text-xl text-indigo-800 pt-5 text-center justify-center">With a 99.95% transaction success<br/> rate and real-time
                         fraud<br/> monitoring, PalmPay delivers <br/> payments and banking you can <br/> trust. </p>
                 </div>

                 <div className="bg-white shadow-md rounded-md w-79 md:w-100 h-60 pt-5 hover:bg-gray-100 lg:w-90">
                    <p className="text-2xl text-center text-indigo-800 pt-5">Comprehensive</p>
                    <p className="text-xl text-indigo-800 pt-5 text-center justify-center">From transfers and savings to credit, <br/> bill payments and rewards, <br/>
                        we provide a complete platform for<br/> managing and growing money.</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 py-20 px-10 md:grid-cols-2 md:py-20 md:px-10">
                <div className="mt-20 px-10 md:px-10">
                  <Image 
                   src="/smallatm.svg"
                   alt="smallatm"
                   width={50}
                   height={20}
                   />
                   <p className="text-2xl  font-bold text-indigo-500 mt-5">Custom Cards</p>
                   <p className="text-3xl font-bold mt-5">Experience Individuality in Every Swipe</p>
                   <p className="text-sm text-gray-500 mt-5">Make your transactions with our exclusive collection of personalized cards, allowing
                     you to <br/>express your unique style and preferences in every financial interaction and transaction you<br/> make</p>
                <div className="mt-5"><button className="text-xl text-white bg-indigo-500 hover:bg-gray-100
                            hover:text-indigo-500 w-40 h-15 rounded-full shadow-md">Learn More</button></div>
                </div>

                <div className="ml-10">
                    <Image 
                   src="/atmcard.gif"
                   alt="atmcard"
                   width={400}
                   height={40}
                   />
                </div>
             </div>

             <div className="text-indigo-500">
                <h1 className="text-4xl md:text-5xl text-center py-5">Security comes first</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 px-20 gap-5  ">
                   
                 <div className="bg-white text-indigo-500 rounded-md shadow-md hover:bg-gray-200 px-10 hover:text-white">
                    <Image className="pl-12 md:pl-15 py-5"
                    src="/licenseicon.png"
                    alt="licenseicon"
                    width={100}
                    height={50}
                    
                    />
                  <p className="text-2xl ">Licensed & Regulated</p>
                  <p className="text-sm"> Fully licensed in multiple 
                    <br/> markets under strict financial <br/> authority oversight.</p>
                </div>

                <div className="bg-white text-indigo-500 rounded-md shadow-md hover:bg-gray-200 px-10 hover:text-white">
                    <Image className="pl-12 md:pl-15 py-5"
                    src="/encryptionicon.png"
                    alt="licenseicon"
                    width={100}
                    height={50}
                    
                    />
                  <p className="text-2xl ">Licensed & Regulated</p>
                  <p className="text-sm"> Fully licensed in multiple 
                    <br/> markets under strict financial <br/> authority oversight.</p>
                </div>

                <div className="bg-white text-indigo-500 rounded-md shadow-md hover:bg-gray-200 px-10 hover:text-white">
                    <Image className="pl-15 py-5"
                    src="/privacyicon.png"
                    alt="licenseicon"
                    width={100}
                    height={50}
                    
                    />
                  <p className="text-2xl ">Licensed & Regulated</p>
                  <p className="text-sm"> Fully licensed in multiple 
                    <br/> markets under strict financial <br/> authority oversight.</p>
                </div>
                 
                </div>
             </div>

             <div className="bg-indigo-500 mt-10 flex justify-cener">
                  <div className="mt-10 px-30 grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2">
                   <div className="px-10">
                    <Image className=""
                    src="/phne.png"
                    alt="phone"
                    width={300}
                    height={100}
                    />

                  </div>

                  <div className="md:ml-20 lg:ml-20 ">
                        <p className="text-sm md:text-2xl lg:md:text-3xl text-white hover:text-black">Use your phones camera to scan <br/> and download the OPay app<br/>
                         Available on iOS and Android</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Image className="mt-5"
                    src="/gogle.png"
                    alt="gogle"
                    width={200}
                    height={100}
                    />

                    <Image className="mt-5"
                    src="/appleicon.png"
                    alt="apple"
                    width={200}
                    height={100}
                    /></div>
                  </div>
                  </div>
             </div>

             <div className="bg-indigo-100 h-100">
               <div className="text-center  md:pt-25">
                 <h1 className="text-2xl md:text-4xl">The future of finance is local, inclusive and digital</h1>
                  <p className="text-xl md:text-2xl">Join millions of users and businesses already banking the PalmPay way.About 
                    PalmPayWork With Us</p>
                  </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-5  md:pt-10">
                      <button className="text-2xl hover:bg-red-800 text-white rounded-full shadow-md bg-indigo-500 w-70 h-10">About Us</button>
                      <button className="text-2xl hover:bg-indigo-500 text-white rounded-full shadow-md bg-indigo-500 w-70 h-10">Work with Us</button>
                      <button className="text-2xl hover:bg-indigo-800 text-white rounded-full shadow-md bg-red-800 w-70 h-10">For Business</button>
                      <button className="text-2xl hover:bg-indingo-800 text-white rounded-full shadow-md bg-indigo-500 w-70 h-10">Our Services</button>
                 </div>

             </div>
             
        </main>
    )

}
