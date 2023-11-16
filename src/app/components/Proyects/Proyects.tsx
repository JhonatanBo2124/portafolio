import { proyects } from '../links'
import { CardProyect } from './CardProyect'

export function Proyects() {
    return(
        <div className="pt-24 w-screen flex flex-col items-center gap-10">
            <div className="w-full justify-start px-20 max-md:px-10">
                <h1 className="font-['Oswald'] text-6xl">Proyectos</h1>
                <div className="py-8 flex items-start gap-6 flex-wrap">
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/rjiiu73d26agcyalxoyo.png" className="w-[40px] h-[40px]" alt="Image 1" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/rbaj9tm47ujpp5yekimc.png" className="w-[40px] h-[40px]" alt="Image 2" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985945/Skills/mry7ksselgmvfbyumt2h.png" className="w-[40px] h-[40px]" alt="Image 3" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/uqmnebqay31cruhwue4n.png" className="w-[40px] h-[40px]" alt="Image 4" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/ahulrtpw2ngj1m4yqi3r.png" className="w-[40px] h-[40px]" alt="Image 5" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/lmvcrm30z6n9jyjzbdvj.svg" className="w-[40px] h-[40px]" alt="Image 6" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985947/Skills/amhotrtu208iveqrvsxk.png" className="w-[40px] h-[40px]" alt="Image 7" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985947/Skills/fkip4608aetbzedjjygp.png" className="w-[40px] h-[40px]" alt="Image 8" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985947/Skills/pmqmsvpvydbmgqqvthde.png" className="w-[40px] h-[40px]" alt="Image 9" />
                    <img loading="lazy" src="https://res.cloudinary.com/da3li8fso/image/upload/v1699985946/Skills/z8lzpsqccqjsqkhzbx7o.png" className="w-[40px] h-[40px]" alt="Image 10" />
                </div>
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