import React from "react";
import Konami from 'react-konami-code';


export default function KonamiCode(props) {

    const easterEgg = () => {
        alert('Omg, you found me!');
    }

    return (
        <Konami action={easterEgg}>
            <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <div class="content">
                        <div class="text-center space-x-4 md:block">
                            <p class="text-black">If you're seeing this, you've found a easter egg on my webpage!</p>
                            <p class="text-black">That means you win a nice discount code for my online courses</p>
                            <p class="text-black">The code is:</p>
                            <p class="text-black">{ props.courseKey }</p>
                            <br />
                            <p class="text-black">Reload the page to close this modal.</p>
                        </div>
                    </div>
                </div>
            </div>


        </Konami >
    )

}

