interface props{
    name: string,
    title: string,
    year: string,
    profile: string,
    image: string,
    certificate: string | undefined
}
export function Card({name, title, year, profile, image, certificate}: props) {
    return(
        <div className="flex flex-col gap-6 max-w-md p-5">
            <div className="flex flex-row items-center gap-3">
                <img className="w-20 rounded-full" src={image} />
                <h1 className="font-['Oswald'] font-bold text-4xl">{name}</h1>
            </div>
            <p>{title}</p>
            <p>{year}</p>
            <p className="dark:text-slate-400"><span className="font-bold">Perfil Profecional: </span>{profile}</p>
            {certificate && <div className='flex gap-5'>
                <a className="p-3.5 text-white bg-blue-700 hover:bg-blue-900 font-bold rounded-full transition-all" href={certificate} target="_blank">Certificado</a>
            </div>}
        </div>
    )
}