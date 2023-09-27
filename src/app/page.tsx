import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-row gap-3 bg-red'>
      <img src="https://i.ibb.co/M6NSps9/retrato.png" alt="retrato" />
      <div className='flex flex-col items-center mt-28 gap-7 px-8'>
        <h1 className="font-['Oswald'] text-6xl drop-shadow-xl">FullStack Developer</h1>
        <p className="font-['Poppins'] text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Nostrum aspernatur sequi veniam adipisci! Vel sequi atque, alias dignissimos
          vitae deserunt quidem eaque perferendis reprehenderit pariatur temporibus 
          culpa eos asperiores eum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Officia, minus in odio excepturi soluta odit! Deleniti voluptates numquam blanditiis 
          fugiat nisi porro accusamus</p>
      </div>
    </div>
  )
}
