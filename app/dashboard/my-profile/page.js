import Image from "next/image";

export default function myProfile (){
    return(
        <main className="min-h-screen flex justify-center py-5 md:py-6 md:px-12 lg:py-8 lg:px-16">
            <div className="w-full flex flex-col px-4 md:w-[380px] rounded-md shadow-md md:shadow-indigo-400">
                <div>
                    <h1 className="text-center text-xl font-bold text-gray-800 mb-8">Customer Information</h1>
                <div className="mt-2 flex justify-center gap-6 border-b border-gray-300 mb-2">
                    <Image
                    src="/babywem.png"
                    alt="profile-img"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                    />
                <div>
                    <p className="text-sm text-gray-800">Emmanuel</p>
                    <p className="text-xs text-gray-800"> emmanuel@gmail.com</p>
                </div>
                </div>

                <div className="px-5">
                <p className="text-center text-lg ">Other Information</p>
                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">BVN</p>
                    <p className="text-gray-400">42766287484</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">NIN</p>
                    <p className="text-gray-400">42766287484</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">Gender</p>
                    <p className="text-gray-400">Male</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">Date of birth</p>
                    <p className="text-gray-400">42766287484</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">Phone Number</p>
                    <p className="text-gray-400">081214258401</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-gray-800">Adress</p>
                    <p className="text-gray-400">BLKF,NIA Quaters Maitama</p>
                </div>
                </div>

                </div>
            </div>

        </main>
    )
}