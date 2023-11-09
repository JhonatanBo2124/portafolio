'use client'
import { studies } from '../links'
import { Card } from './Card'
import { RevealWrapper } from 'next-reveal'

export function Studies() {
    return(
        <div className="pt-24 w-screen flex flex-col items-center gap-10">
            <div className="w-full justify-start px-20 max-md:px-10">
                <h1 className="font-['Oswald'] text-6xl">Estudios</h1>
            </div>
            <div className='flex flex-row justify-center gap-10 flex-wrap mb-20'>
                {studies.map(study => {
                    return(
                        <RevealWrapper>
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