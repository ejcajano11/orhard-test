import { title, subtitle, content, subcontent} from '../../const/constants'

export default function Component1() {

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="grid gap-5 p-10
                grid-cols-1 grid-rows-1 grid-flow-rows 
                sm:grid-cols-2 sm:grid-rows-1 sm:grid-flow-rows sm:p-20
                md:grid-cols-3 md:grid-rows-2 md:grid-flow-col md:p-40
                lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col lg:p-60
                ">
                <div className="row-span-2">
                    <picture>
                        <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-01@2x.jpg" />
                        <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-01.jpg" />
                        <img className="w-full h-full object-cover" src="src/assets/component-01/Image-01.jpg" alt="IfItDoesntMatchAnyMedia" />
                    </picture>
                </div>
                <div className="row-span-1">
                    <picture>
                        <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-02@2x.jpg" />
                        <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-02.jpg" />
                        <img className="w-full h-full object-cover" src="src/assets/component-01/Image-02.jpg" alt="IfItDoesntMatchAnyMedia" />
                    </picture>
                </div>
                <div className="row-span-1">
                    <picture>
                        <source media="(min-width: 900px)" srcSet="src/assets/component-01/Image-03@2x.jpg" />
                        <source media="(min-width: 640px)" srcSet="src/assets/component-01/Image-03.jpg" />
                        <img className="w-full h-full object-cover" src="src/assets/component-01/Image-03.jpg" alt="IfItDoesntMatchAnyMedia" />
                    </picture>
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
    )
}