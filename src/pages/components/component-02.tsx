import { title2, cards } from '../../const/constants'
import { useState } from 'react';
import Modal from "./modal"

export default function Component2() {
    const [showModal, setShowModal] = useState(false);
    const [imageURL, setImageURL] = useState(false);

    const onClickImg = (url) => {
        setImageURL(url)
        setShowModal(true)
    }

    return (
        <>
            <Modal
                showModal= {showModal}
                setShowModal= {setShowModal}
                url= {imageURL}
            />

            <div className="min-h-screen flex-row justify-center items-center">
                <div className="flex justify-center text-5xl pt-0 p-20">
                    {title2}
                </div>
                
                <div className="grid gap-5 pt-0 p-10 
                    grid-cols-1 grid-rows-1 grid-flow-rows 
                    sm:grid-cols-2  sm:p-20 sm:pt-0
                    md:grid-cols-3  md:p-40 md:pt-0
                    lg:grid-cols-3  lg:p-60 lg:pt-0
                    ">

                    {cards.map( (card) => (
                            <div className="row-span-1 group cursor-pointer" onClick={() => onClickImg(`${card.imageSrc}`)}>
                                <div className="relative">
                                    <picture>
                                        <source media="(min-width: 900px)" srcSet={`${card.imageSrc}@2x.jpg`} />
                                        <source media="(min-width: 640px)" srcSet={`${card.imageSrc}.jpg`} />
                                        <img className="w-full h-full object-cover" src={`${card.imageSrc}.jpg`} alt="IfItDoesntMatchAnyMedia" />
                                    </picture>
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100"></span>
                                </div>
                                
                                <p className="text-xl lg:text-2xl font-semibold pt-4 pb-3">
                                    {card.title}
                                </p>
                            
                                <p className="text-sm lg:text-base">
                                    {card.content}
                                </p>
                            
                                <p className="text-base lg:text-xl font-semibold pt-4 group-hover:underline-offset-8 group-hover:underline group-hover:decoration-red-500">
                                    {card.button}
                                </p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}