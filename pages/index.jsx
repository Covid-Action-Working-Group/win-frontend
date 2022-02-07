import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "../styles/Home.module.scss";

import Shit from "../public/icons/Shit.svg"
import Group from "../public/icons/Group_331.svg"
import WBE from "../public/icons/WBE.svg"
import Sneezing from "../public/icons/sneezing.svg"
import Shedding from "../public/icons/Shedding.svg"
import SampleCollection from "../public/icons/Sample_Collection.svg"
import Consortium from "../public/icons/Consortium.svg"
import ContainmentZones from "../public/icons/Containment_zones.svg"
import DataAnalytics from "../public/icons/Data_Analytics.svg"
import Deployment from "../public/icons/Deployment.svg"
import EarlyWarning from "../public/icons/Early_Warning.svg"
import RNAExtraction from "../public/icons/RNA_Extraction.svg"
import RNAMeasurement from "../public/icons/RNA_Measurement.svg"
import SampleConcentration from "../public/icons/Sample_Concentration.svg"
import TestingStrategy from "../public/icons/Testing_strategy.svg"
import TimelyUpdates from "../public/icons/Timely_Updates.svg"
import TrackingTheSpread from "../public/icons/Tracking_the_spread.svg"
import WBETesting from "../public/icons/wbe_testing.svg"

import MoHUALogo from "../public/icons/mohua.svg";
import NIUALogo from "../public/icons/niua.svg";
import ISCFLogo from "../public/icons/iscf.svg";
import SSCDLLogo from "../public/icons/sscdl.svg";
import SMCLogo from "../public/icons/smc.svg";

export default function Home() {
  return (
    <div className="font-body ">


      <Head>
        <title>Wastewater Intelligence Network (WIN) Programme</title>
        <meta name="description" content="An initiative to bring together experts to manage the spread and impact of SARS-CoV-2 through Wastewater-based Epidemiology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      
      <div className = " text-center content-center px-4 md:px-12">
        {/* <h1 className="mt-16 sm:mt-16 md:mt-20 mb-9 sm:mb-10 md:mb-12 text-5xl sm:text-6xl md:text-7xl font-thin">Your <Shit className={styles.shit_icon}/> matters</h1> */}
        <p className=" xl:leading-relaxed text-3xl xl:text-4xl px-10 sm:px-0 sm:mx-10 xl:mx-36 mt-20 md:mt-22 font-light"><span className=" bg-red text-white px-2 py-1 font-bold">Wastewater Intelligence Network</span>  is an initiative to bring together experts to manage the spread and impact of SARS-CoV-2 through <span className=" bg-red text-white px-2 py-1 font-bold">Wastewater-based Epidemiology</span> in Indian cities.</p>
        
        <div className="mt-28 sm:mt-28 md:mt-32 mx-60 max-w-screen-lg mx-auto w-4/5">
          
          <NIUALogo className={styles.niua_logo}/>
          <ISCFLogo className={styles.iscf_logo}/>
          <MoHUALogo className={styles.mohua_logo}/>
          <SMCLogo className={styles.smc_logo}/>
          <SSCDLLogo className={styles.sscdl_logo}/>
          
          {/* <Group className=" mx-auto"/> */}
          
          {/* <img src={Group_331} alt="logo" layout='fill' objectFit='contain' className="w-1/3 mx-auto"/> */}
        </div>

        <div className="mt-24 sm:mt-24 md:mt-40 mx-40 sm:mx-40 md:mx-64 border-dotted border-t-4 border-red-400 "></div>

        <div className="">
          <h2 className="mt-16 sm:mt-16 md:mt-40 mb-9 sm:mb-10 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold  px-4 md:px-0">Wastewater-Based Epidemiology</h2>
          <div className="mx-60 max-w-screen-lg mx-auto w-4/5">
            <WBETesting className={styles.wbe_testing_icon}/>
          </div>
          <p className="md:leading-relaxed text-3xl md:px-20 sm:px-0 sm:mx-10 xl:mx-36 mt-0 sm:mt-20 md:mt-0 font-light">A method of <span className=" font-bold ">collecting samples of wastewater from sewers, STPs, lakes etc. and testing these samples for the presence and load of pathogens</span> like viruses and bacteria. Erstwhile, this method was successfully used in India to track Polio and Hepatitis A.</p>
        </div>
        
        <div className="mt-24 sm:mt-24 md:mt-40 mx-40 sm:mx-40 md:mx-64 border-dotted border-t-4 border-red-400 "></div>

        <div className="w-full">
          <h2 className="mt-16 sm:mt-16 md:mt-40 mb-9 sm:mb-10 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold  px-4 md:px-0">How does WBE work?</h2>
          {/* <p className="md:leading-relaxed text-3xl md:px-20 sm:px-0 sm:mx-10 xl:mx-36 mt-0 sm:mt-20 md:mt-0 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat, neque ac tempor egestas, neque massa tempus eros, eget maximus dolor nibh ac elit.</p> */}
          <div className="w-full h-full lg:px-16 mt-10">
            <WBE/>
            {/* <img src={WBE} alt="logo" layout='fill' objectFit='contain' className="w-full h-full mt-12 sm:mt-12 md:mt-20 px-4 md:px-12"/> */}
          </div>
        </div>

        <div>
          {/* <h3 className="mt-16 text-2xl sm:text-3xl md:text-4xl font-extrabold px-4 md:px-0">Lifecycle of the SARS-CoV-2 virus</h3> */}
          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className=" w-1/6 lg:w-1/4 lg:mr-20 mt-20 md:mt-16 lg:mt-20  col-start-1 row-start-1 max-w-screen-sm mx-auto content-center ">
              <Sneezing/>
              {/* <img src={sneezing} alt="logo" layout='fill' objectFit='contain' className=" mx-auto "/> */}
            </div>
            <div className="text-center lg:text-left col-start-1 lg:col-start-2 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold">Infection</h2>
              <p className="  lg:leading-normal lg:mr-40 text-2xl px-8 lg:px-0 font-light">CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.</p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className="text-center lg:text-right row-start-2 lg:row-start-1 col-start-1 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold">Shedding</h2>
              <p className="lg:leading-normal lg:ml-40 text-2xl px-8 lg:px-0 font-light">Humans start excreting the virus in the stools as soon as they are infected by it regardless of whether they are showing symptoms. Therefore, testing wastewater for SARS-CoV-2 can aid in the early detection of the virus in a given area, even before the infected individual(s) develop symptoms or before they are aware they are infected.</p>
            </div>
            <div className=" w-1/6 lg:w-1/4 lg:mt-20 xl:mt-24 lg:ml-24 col-start-1 lg:col-start-3 row-start-1 max-w-screen-sm mx-auto content-center ">
              <Shedding/>
              {/* <img src={shedding} alt="logo" layout='fill' objectFit='contain' className=" mx-auto "/> */}
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className=" w-1/6 lg:w-1/4 lg:mr-20 mt-20 md:mt-16 lg:mt-24  -pb-60 col-start-1 row-start-1 max-w-screen-sm mx-auto content-center ">
              <SampleCollection/>
              {/* <img src={Sample_Collection} alt="logo" layout='fill' objectFit='contain' className=" mx-auto "/> */}
            </div>
            <div className="text-center lg:text-left col-start-1 lg:col-start-2 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4  text-3xl sm:text-3xl md:text-4xl font-extrabold">Sample Collection</h2>
              <p className=" lg:leading-normal lg:mr-40 text-2xl px-8 lg:px-0 font-light">Samples from sewers, pumping stations, sewerage treatment plants or chambers in buildings are collected for testing. WIN uses grab and composite sampling at a set interval. In grab, a single sample is collected manually from the source. In composite, samples are collected by pooling multiple grab samples.</p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className="text-center lg:text-right row-start-2 lg:row-start-1 col-start-1 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4  text-3xl sm:text-3xl md:text-4xl font-extrabold">Sample Concentration</h2>
              <p className="lg:leading-normal lg:ml-40 text-2xl px-8 lg:px-0 font-light">By reducing the amount of water or any non-relevant materials in a diluted sample, the resulting concentrated sample contains higher amounts of SARS-CoV-2 RNA. This concentrated sample will yield better results.</p>
            </div>
            <div className=" w-1/6 lg:w-1/4 mt-20 lg:mt-24 lg:ml-24 col-start-1 lg:col-start-3 row-start-1 max-w-screen-sm mx-auto content-center ">
              <SampleConcentration/>
              {/* <img src={Sample_Concentration} alt="logo" layout='fill' objectFit='contain' className=" mx-auto "/> */}
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className=" w-1/6 lg:w-1/2 lg:mr-20 mt-20 md:mt-24 lg:mt-20  -pb-60 col-start-1 row-start-1 max-w-screen-sm mx-auto content-center ">
              <RNAExtraction/>
              {/* <img src={RNA_Extraction} alt="logo" layout='fill' objectFit='contain' className="mx-auto "/> */}
            </div>
            <div className="text-center lg:text-left col-start-1 lg:col-start-2 col-span-1 lg:col-span-2 pt-6">
              <h2 className="  mb-2 sm:mb-2 md:mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold">RNA Extraction</h2>
              <p className=" lg:leading-normal lg:mr-40 text-2xl px-8 lg:px-0 font-light">To count the SARS-CoV-2 RNA we first need to extract, isolate and purify the RNA from a complex sample mixture. It is performed by utilising a commercial kit for environmental sample extraction.</p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className="text-center lg:text-right row-start-2 lg:row-start-1 col-start-1 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold">RNA Measurement</h2>
              <p className="lg:leading-normal lg:ml-40 text-2xl px-8 lg:px-0 font-light">Count of RNA in the sample is important to quantify the load of the virus in the wastewater. This quantification is done with RNA Measurement using RT-qPCR and RT-ddPCR.</p>
            </div>
            <div className="w-1/6 lg:w-1/4 lg:mt-20 xl:mt-24 lg:ml-24 col-start-1 lg:col-start-3 row-start-1 max-w-screen-sm mx-auto content-center ">
              <RNAMeasurement/>
              {/* <img src={RNA_Measurement} alt="logo" layout='fill' objectFit='contain' className=" mx-auto "/> */}
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 mb-11 sm:mb-12 lg:mb-16 grid grid-flow-col grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className=" w-1/6 lg:w-1/4 lg:mr-20 mt-20 md:mt-16 lg:mt-20  -pb-60 col-start-1 row-start-1 max-w-screen-sm mx-auto content-center ">
              <DataAnalytics/>
              {/* <img src={Data_Analytics} alt="logo" layout='fill' objectFit='contain' className="mx-auto "/> */}
            </div>
            <div className="text-center lg:text-left col-start-1 lg:col-start-2 col-span-1 lg:col-span-2 pt-6">
              <h2 className=" mb-2 sm:mb-2 md:mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold">Data Analytics</h2>
              <p className="lg:leading-normal lg:mr-40 text-2xl px-8 lg:px-0 font-light">The measured RNA data along with additional datasets are analysed to infer the count of infected population, identify trends and patterns of infection in the catchment area. This will enable informed decision making by the governments and other stakeholders.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 sm:mt-24 md:mt-40 mx-40 sm:mx-40 md:mx-64 border-dotted border-t-4 border-red-400 "></div>
        
        <div>
          <h2 className="mt-16 sm:mt-16 md:mt-40 mb-9 sm:mb-10 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold px-4 md:px-0">Actionable Intelligence for Decision Makers</h2>
        </div>

        <div className="xl:px-36">
          <div className="text-2xl mt-10 sm:mt-14 lg:mt-24 mb-4 lg:mb-10 mx-6 md:mx-16 lg:mx-20 l:mx-12 grid grid-flow-col grid-row-3 md:grid-rows-1 grid-col-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 " >
            <div className="bg-light-yellow row-start-1 ">
              <div className="w-1/5 mx-auto mt-6 "><EarlyWarning/></div>
              {/* <img src={Early_Warning} alt="logo" layout='fill' objectFit='contain' className="w-1/5  mx-auto mt-6"/> */}
              <p className="px-10 py-6 font-light"><span className="font-bold"> Early warning</span> to cities (4 to 14 days ahead)</p>
            </div>
            <div className="bg-light-yellow row-start-2 md:row-start-1">
              <div className="w-1/5 mx-auto mt-6 "><TrackingTheSpread/></div>
              {/* <img src={Tracking_the_spread} alt="logo" layout='fill' objectFit='contain' className="w-1/5  mx-auto mt-6"/> */}
              <p className="px-10 py-6 font-light"><span className="font-bold">Estimating the infected population</span> &amp; type of variant</p>
            </div>
            <div className="bg-light-yellow row-start-3 md:row-start-1 ">
            <div className="w-1/5 mx-auto mt-6 "><ContainmentZones/></div>
              {/* <img src={Containment_zones} alt="logo" layout='fill' objectFit='contain' className="w-1/5  mx-auto mt-6"/> */}
              <p className="px-4 lg:px-10 py-6 font-light"><span className="font-bold">Identification of hotspots</span> and containment zones</p>
            </div>
          </div>

          <div className="text-2xl lg:mt-12 mb-6 lg:mb-10 mx-6 md:mx-40 lg:mx-40 xl:mx-60 grid grid-flow-col grid-row-2 md:grid-rows-1 grid-col-1 md:grid-cols-2 gap-3 md:gap-10 lg:gap-16" >
            <div className="bg-light-yellow row-start-1 ">
              <div className="w-1/5 mx-auto mt-6 "><TestingStrategy/></div>
              {/* <img src={Testing_strategy} alt="logo" layout='fill' objectFit='contain' className="w-1/5 mx-auto mt-6"/> */}
              <p className="px-10 py-6 font-light"><span className="font-bold">Optimising testing strategy</span> &amp; allocation of resources</p>
            </div>
            <div className="bg-light-yellow row-start-2 md:row-start-1 ">
              <div className="w-1/5 mx-auto mt-6 "><TimelyUpdates/></div>
              {/* <img src={Timely_Updates} alt="logo" layout='fill' objectFit='contain' className="w-1/5 mx-auto mt-6"/> */}
              <p className="px-10 py-6 font-light"><span className="font-bold">Alerts</span> to authorities and citizens</p>
            </div>
          </div>
        </div>

        <div className="mt-24 sm:mt-24 md:mt-40 mx-40 sm:mx-40 md:mx-64 border-dotted border-t-4 border-red-400 "></div>

        <div className="mt-36 md:mt-44">
          <h2 className="mt-10 md:mt-16 sm:mt-16 md:mt-40 mb-9 sm:mb-10 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold  px-4 md:px-0">Core components</h2>
          <p className="md:leading-relaxed text-3xl md:px-20 sm:px-0 sm:mx-10 xl:mx-36 mt-0 sm:mt-20 md:mt-0 font-light">Wastewater Intelligence Network (WIN) programme will work towards forming a <span className=" font-bold ">consortium</span> to handhold cities and <span className=" font-bold ">deploy</span> WBE to track the spread of pathogens in cities.</p>
        </div>

        <div className="mt-16 lg:mt-24 mx-14 sm:mx-28 xl:mx-46 grid grid-flow-col grid-row-1 lg:grid-rows-1 grid-col-2 lg:grid-cols-2 w-auto" >
          <div className="bg-light-yellow pb-6 lg:pb-0">
            <div className=" content-center max-w-screen-lg w-1/3 px-8 mt-12 mb-8 mx-auto">
              <Consortium/>
              {/* <img src={Consortium} alt="logo" layout='fill' objectFit='contain' className="w-1/3 px-8 mx-40 mt-12 mb-8 mx-auto"/> */}
            </div>
              <h4 className="text-3xl pb-4 font-bold">Consortium</h4>
              <p className="px-10 text-2xl font-light leading-10">WIN consortium will provide a platform to <span className=" font-extrabold ">bring together</span> researchers, scientists, start-ups, innovation based institutions and <span className=" font-extrabold ">aggregate </span>knowledge, technology and funds to strengthen Wastewater-Based Epidemiology (WBE) for healthcare in India.</p>
              {/* <p className="mt-10 px-8 pb-10 text-2xl leading-10 font-light">Until now, WBE has been carried out in India by scattered stakeholders through the implementation of diverse techniques and technologies. Therefore, the standardisation of protocols and knowledge sharing was required and will be ensured by the creation of the first WBE’s nation-wide consortium in India.<br/><br/> Furthermore, alliances with other consortiums dedicated to WBE around the world will strengthen the adoption, optimisation and standardisation of WBE on a global basis. Due to the importance and conditions of India, the WIN Consortium will be a determinant player of the network.</p> */}
          </div>
          <div className="bg-yellow row-start-3 lg:row-start-1 lg:col-start-2 pb-6">
            <div className=" content-center w-1/3 px-8 mx-40 mt-12 mb-8 mx-auto">
              <Deployment/> 
              {/* <img src={Deployment} alt="logo" layout='fill' objectFit='contain' className="w-1/3 px-8 mx-40 mt-12 mb-8"/> */}
            </div>
              <h4 className="text-3xl pb-4 font-bold">Deployment</h4>
              <p className="px-10 text-2xl font-light leading-10">WIN will be <span className=" font-extrabold ">piloted in Indian cities</span> to track SARS-CoV-2 which will strengthen practices for pre-emptive approaches to public health. The pilot will involve wastewater sampling, testing and using the results to inform decision-makers with <span className=" font-extrabold ">evidence-based CoViD-19 management.</span></p>
              {/* <p className="mt-10 px-8 text-2xl leading-10 font-light">During the planning and deployment phases the consortium will be able to visualize city population, the sewerage/drainage data layers, the case spread, sampling strategy, processing and lab testing, etc. Later on, decision makers will be able to analyze and correlate WBE data with population statistics and medical data for better decision making. <br/><br/>The CoViD-19 management at city level will be optimised by focused allocation of resources ie. testing and treatment, in the areas where higher caseload is detected through WBE. In the aforementioned zones, microcontaiment zones can be declared, reducing the economic and social repercussions of city-wide lockdowns. <br/><br/>After the successful piloting and obtaining tangible results, WBE will be replicated and hopefully deployed in all the +4000 ULB’s and statutory towns of India. Actively assisting on the detection of a wide range viruses, bacterias and substances (both medicines and illegal drugs) and decision making for its appropriate management.</p> */}
          </div>
        </div>

        <div className="mt-28 sm:mt-32 md:mt-40 lg:mt-36 mx-40 sm:mx-40 md:mx-64 border-dotted border-t-4 border-red-400 "></div>

        <div>
          <h1 className="mt-10 md:mt-16 sm:mt-16 md:mt-40 mb-9 sm:mb-10 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold  px-4 md:px-0">Implementation Agencies</h1>
          <div className="mt-20 mb-16 mx-96 max-w-screen-lg mx-auto w-4/5">
            <NIUALogo className={styles.niua_logo}/>
            <ISCFLogo className={styles.iscf_logo}/>
            <MoHUALogo className={styles.mohua_logo}/>
            <SMCLogo className={styles.smc_logo}/>
            <SSCDLLogo className={styles.sscdl_logo}/>
            {/* <img src={Group_331} alt="logo" layout='fill' objectFit='contain' className="w-3/5 lg:w-4/5 px-8 mt-6 mb-8 mx-auto"/> */}
          </div>
        </div>

      </div>

      <Footer/>
      
    </div>
  );
}


// export async function getStaticProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
