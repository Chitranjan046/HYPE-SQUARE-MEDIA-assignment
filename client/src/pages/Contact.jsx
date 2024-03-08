import React from 'react';

const heading = 'Contact Me';

function Contact(props) {
    return (
            <div className="bg-backgroundColorPrimary">
                <div id="Contact" className="mx-auto flex flex-col min-h-screen justify-center items-center">

                        <h1 className="text-3xl font-bold leading-tight text-textColorSecondary text-center">{heading}</h1>

                    <form className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className=" border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="number"
                                className="border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Number"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                className="border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-textColorPrimary text-backgroundColorPrimary mx-auto mt-4 p-2 w-48"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>

    );
}

export default Contact;