'use client'
import { studies } from '../links'
import { Card } from './Card'
import { RevealWrapper } from 'next-reveal'

export function Studies() {
    return(
        <div className="pt-24 w-screen flex flex-col items-center gap-10">
            <div className="w-full justify-start px-20">
                <h1 className="font-['Oswald'] text-6xl">Estudios</h1>
            </div>
            <div className='flex flex-row justify-center gap-28 max-md:gap-10 flex-wrap'>
                {studies.map(study => {
                    return(
                        <RevealWrapper delay={600}>
                            <Card 
                                name={study.name}
                                title={study.title}
                                year={study.year}
                                profile={study.profile}
                                image={study.image}
                                certificate={study.certificate}
                            />
                        </RevealWrapper>
                    )
                })}
            </div>
        </div>
    )
}