import React, { useEffect, useState } from 'react';

import Superate from './images/superate.png';
import BluelyStudios from './images/bluely.png';
import ED2 from './images/ED2.jpg'

const WorkPlaces = props => {

    let images = [Superate, BluelyStudios, ED2];

    const [job, setJob] = useState([]);
    const [jobLoaded, setJobLoaded] = useState(false);

    const fetchJobs = async () => {
        try {
            let response = await fetch('./jobExperience.json');
            let json = await response.json();
            return { success: true, data: json };
        } catch (error) {
            console.log(error);
            return { success: false };
        }
    }

    useEffect(() => {
        (async () => {
            setJobLoaded(false);

            let res = await fetchJobs();
            if (res.success) {
                setJob(res.data.jobs);
                setJobLoaded(true);
            }
        })();
    }, []);

    return (
        <section class="section sm:px-12 md:px-24 lg:px-36 xl:px-96">
            <div class="grid grid-cols-2">
                <div class="px-2">
                    <p class="font-semibold">02. Where I've Worked</p>
                    <hr></hr>
                </div>
            </div>

            {
                jobLoaded ?
                    (
                        job.map((job, index) => {

                            return (
                                <div class="sm:px-4 md:px-4 lg:px-10 xl:px-2">
                                    <div class="border-l-2 mt-10">
                                        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                            <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                            <div class="flex-auto">
                                                <h1 class="text-lg">{job.date}</h1>
                                                <h1 class="text-sm py-2">{job.contract}</h1>
                                                <h1 class="text-xl font-bold">{`${job.title} @ ${job.place}`}</h1>
                                                <h1 class="text-lg">{job.todo}</h1>

                                                {job.duties.map((duty) => {

                                                    return (
                                                        <ul class="px-5 py-2 list-disc">
                                                            <li class="text-lg">{duty}</li>
                                                        </ul>
                                                    );
                                                })}
                                            </div>
                                            <img height='150px' width='150px' class="text-center text-white hover:text-gray-300" src={images[index]}></img>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div class="px-24">
                            <div class="border-l-2 mt-10">
                                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                    <div class="flex-auto">
                                        <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
                                            <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
                                                <i class="fas fa-circle-notch fa-spin fa-5x">a</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

            }

        </section>
    );
}

export default WorkPlaces;