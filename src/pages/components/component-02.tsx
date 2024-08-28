import { title2, cards } from '../../const/constants'

export default function Component2() {

    return (
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
                        <div className="row-span-1">

                            <picture >
                                <source media="(min-width: 900px)" srcSet={`${card.imageSrc}@2x.jpg`} />
                                <source media="(min-width: 640px)" srcSet={`${card.imageSrc}.jpg`} />
                                <img className="w-full h-full object-cover" src={`${card.imageSrc}.jpg`} alt="IfItDoesntMatchAnyMedia" />
                            </picture>
                            
                            <div className="text-xl lg:text-2xl font-semibold pt-4 pb-3">
                                {card.title}
                            </div>

                            <div className="text-sm lg:text-base">
                                {card.content}
                            </div>

                            <div className="text-base lg:text-xl font-semibold pt-4">
                                {card.button}
                            </div>

                        </div>
                    ) )
                }
            </div>
        </div>
    )
}