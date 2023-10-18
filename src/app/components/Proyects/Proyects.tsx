import { proyects } from '../links'
import { CardProyect } from './CardProyect'

export function Proyects() {
    return(
        <div className="pt-24 w-screen flex flex-col items-center gap-10">
            <div className="w-full justify-start px-20 max-md:px-10">
                <h1 className="font-['Oswald'] text-6xl">Proyectos</h1>
            </div>
            <div className='flex flex-col gap-20'>
                {proyects.map(proyect => {
                    return(
                        <CardProyect 
                            name={proyect.name}
                            description={proyect.description}
                            technologies={proyect.technologies}
                            link={proyect.link}
                            images={proyect.images}
                        />
                    )
                })}   
            </div>
        </div>
    )
}