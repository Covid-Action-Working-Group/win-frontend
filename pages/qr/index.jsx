import QRReader from "../../components/qr-reader/QRReader";

export default function Home() {
    return (
        <div>
            {/* <div className="px-10 h-screen bg-grey-300">
                <span className="col-span-1 ml-8 sm:ml-10 md:ml-20 ">
                <img src={hero_logo} alt="logo" layout='fill' objectFit='contain' className="w-1/4 sm:w-1/2 md:w-2/3 "/>
                <span className="w-1/2"> <img src="/icons/qr-code-scan.png" alt="logo" layout='fill' objectFit='contain' className="w-1/6 px-6 m-auto"/> </span>
                </span>
                <div className="pt-4 mb-8 text-center w-full">
                <span className="text-2xl">QR code scanner</span>
                </div>
                <div className=" mx-auto ">*/}
                <QRReader />
                {/*</div>
            </div> 
             <div className="mt-10 bg-red h-12 sm:h-16 lg:h-24 w-full text-center align-bottom text-white fixed bottom-0">
                <p className="text-xs lg:text-lg">Made in India with love from Government of India</p>
                <p className="text-xs lg:text-lg">© Ministry of Housing and Urban Affairs</p>
            </div> */}

        </div>
    );
}