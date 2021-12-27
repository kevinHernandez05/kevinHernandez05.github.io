import Superate from './images/superate.png';

export default function workPlaces(props) {
    return (
        <section class="px-36">
            <div class="grid grid-cols-2">
                <div class="px-2">
                    <p class="font-semibold">02. Where I've Worked</p>
                    <hr></hr>
                </div>
            </div>

            <div class="px-24">
                <div class="border-l-2 mt-10">
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                        <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                        <div class="flex-auto">
                            <h1 class="text-lg">Jul, 2019 - Today</h1>
                            <h1 class="text-xl font-bold">Software Developer @ Presidencia de la República Dominicana; Programa Supérate</h1>
                            <ul>
                                <li class="text-lg">Develop the necessary analysis and programs to improve, complete or expand existing systems, according to user needs.</li>
                                <li class="text-lg">Responsible for developing and maintaining the institution's web applications.</li>
                                <li class="text-lg">Pipelines settings in Azure DevOps Server (On Premise) for CI / CD.</li>
                            </ul>
                        </div>
                        <img height='150px' width='150px' class="text-center text-white hover:text-gray-300" src={Superate}></img>
                    </div>

                </div>
            </div>

        </section>
    );
}