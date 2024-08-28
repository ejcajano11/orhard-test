export default function Modal({showModal, setShowModal, url}) {
    console.log("image clicked: ", url)
    return (
        <>
        {showModal ? (
        <>
          <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative my-10 mx-80">
                    <div className="secondary-bg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between pr-5 border-b border-solid border-blueGray-200 rounded-t">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="primary-color h-6 w-6 text-2xl">
                                ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <img className="object-cover" src={`${url}.jpg`} alt="IfItDoesntMatchAnyMedia" />
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : null}
        </>
    )

}