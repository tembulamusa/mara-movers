import React from "react";
const Subscribe = (props) => {

    return (
        <>
            <div className="container py-24">
            <div class="relative mt-4 flex flex-wrap items-stretch w-1/3 m-auto">
                <input
                    type="text"
                    className="bg-white rounded-3xl relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Your email"
                    aria-label="Your Email"
                    aria-describedby="button-addon2" />
                <button
                    className="z-[2] absolute right-0 rounded-3xl bg-gray-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                    data-te-ripple-init
                    type="button"
                    id="button-addon2">
                    Send
                </button>
                </div>
            </div>
        </>
    )
}

export default React.memo(Subscribe);