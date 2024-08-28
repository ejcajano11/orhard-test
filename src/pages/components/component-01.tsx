import { useState } from 'react';
import { title, subtitle, content, subcontent} from '../../const/constants'
import Modal from "./modal"

export default function Component1() {
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

            <div className="min-h-screen flex justify-center items-center" data-modal-target="popup-modal" data-modal-toggle="popup-modal" >

                <div className="grid gap-5 p-10
                    grid-cols-1 grid-rows-1 grid-flow-rows 
                    sm:grid-cols-2 sm:grid-rows-1 sm:grid-flow-rows sm:p-20
                    md:grid-cols-3 md:grid-rows-2 md:grid-flow-col md:p-40
                    lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col lg:p-60
                    ">

                    <div className="relative group row-span-2 cursor-pointer" onClick={() => onClickImg("src/assets/component-01/Image-01")}>
                        <picture>
                            <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-01@2x.jpg" />
                            <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-01.jpg" />
                            <img className="w-full h-full object-cover" src="src/assets/component-01/Image-01.jpg" alt="IfItDoesntMatchAnyMedia" />
                        </picture>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100"></span>
                    </div>

                    <div className="relative group  row-span-1 cursor-pointer" onClick={() => onClickImg("src/assets/component-01/Image-02")}>
                        <picture>
                            <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-02@2x.jpg" />
                            <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-02.jpg" />
                            <img className="w-full h-full object-cover" src="src/assets/component-01/Image-02.jpg" alt="IfItDoesntMatchAnyMedia" />
                        </picture>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100"></span>
                    </div>
                    <div className="relative group  row-span-1 cursor-pointer" onClick={() => onClickImg("src/assets/component-01/Image-03")}>
                        <picture>
                            <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-03@2x.jpg" />
                            <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-03.jpg" />
                            <img className="w-full h-full object-cover" src="src/assets/component-01/Image-03.jpg" alt="IfItDoesntMatchAnyMedia" />
                        </picture>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100"></span>
                    </div>
                    <div className="row-span-2 sm:col-span-2">
                        <div className="text-2xl lg:text-3xl pb-3">
                            {title}
                        </div>
                        <hr className="w-full pb-4 lg:pb-6"/>
                        <div className="text-base lg:text-2xl secondary-color pb-8">
                            {content}
                        </div>
                        <div className="highlight-color text-sm lg:text-xl font-semibold pb-3">
                            {subtitle}
                        </div>
                        <div className="text-sm lg:text-xl font-semibold pb-3">
                            {subcontent}
                        </div>
                    </div>
                </div>
                
            </div>
        </>

    )
}