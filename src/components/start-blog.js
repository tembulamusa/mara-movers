import React from "react";

const StartBlog = (props) => {

    return (
        <>
            <div className="container text-center py-24">
                <span className="text-center mx-auto">
                    <svg className="mx-auto rotate-180 w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#444444" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                        
                </span>

                <div className="text-4xl font-bold py-4">
                    You’ve got something to say.<br/>We’ve got people who want to hear it.
                </div>

                <button className="bg-white my-4 py-2 px-3 rounded-3xl text-green-600 uppercase">Start your SportsBlog</button>

            </div>
        </>
    )
}
export default React.memo(StartBlog);