export default function Footer(props) {

    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
            <div class="container mx-auto px-4">
                <hr class="my-6 border-blueGray-300"></hr>
                <div class="flex flex-wrap items-center justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold grid place-items-center">
                            <p class="py-2">Made with </p>
                            <svg class="fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                            <p class="text-blueGray-500 hover:text-blueGray-800 py-2">By Kevin Hernandez - {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );

}