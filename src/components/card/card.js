import React, { useEffect, useState } from 'react';
import Workbefy from '../projects/images/workbefy.png';
import EthWallet from '../projects/images/etherumionic.png';
import AwesomeNetCoreBoilerplate from '../projects/images/awesome-boilerplate.png';
import Pomodoro from '../projects/images/pomodoro.png';
import Bluely from '../projects/images/bluely.png';

const Card = props => {

    let images = [Workbefy, EthWallet, AwesomeNetCoreBoilerplate, Pomodoro, Bluely];

    const [project, setProject] = useState([]);
    const [projectLoaded, setProjectLoaded] = useState(false);

    const fetchProjects = async () => {
        try {
            let response = await fetch('./projects.json');
            let json = await response.json();
            return { success: true, data: json };
        } catch (error) {
            console.log(error);
            return { success: false };
        }
    }

    useEffect(() => {
        (async () => {
            setProjectLoaded(false);

            //projects.json
            let res = await fetchProjects();

            if (res.success) {
                setProject(res.data.jobs);

                setProjectLoaded(true);
            }
        })();
    }, []);

    return (
        <div class="container px-5 py-24 mx-auto">
            {
                projectLoaded ?
                    (
                        project.map((proj, index) => {

                            {/* tarjeta cargando */ }
                            return (

                                <div class="p-4" key={index}>
                                    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden grid-cols-1 lg:grid-cols-2">
                                        <img class="h-full w-full object-cover object-center" src={images[index]} alt="Proyecto">
                                        </img>
                                        <div class="p-6">
                                            <p class="leading-relaxed mb-3">{proj.title}</p>
                                            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">{proj.tags}</h1>
                                            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">{proj.description}</h1>
                                            <div class="flex items-center flex-wrap ">
                                                {
                                                    (proj.href !== "") ? (
                                                        <a class="text-indigo-500 inline-flex items-center text-lg" href={proj.href} target="_blank">More info
                                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    ) : (
                                                        <p class="text-gray-500 inline-flex items-center text-lg" href={proj.href} target="_blank">
                                                            not url at the moment.                                                        
                                                        </p>
                                                    )
                                                }
                                                <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                                                    {proj.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );

                        })

                    ) : (

                        <div class="p-4">
                            <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                                <div class="p-6">
                                    <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                    <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                    <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                    <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                                        </a>
                                        <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

            }




        </div>






    );
}

export default Card;