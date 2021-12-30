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
                    <h1 class="font-semibold">02. Where I've Worked</h1>
                    <hr class="py-8"></hr>
                </div>
            </div>
            {
                jobLoaded ?
                    (
                        job.map((job, index) => {

                            return (
                                <div class="py-3" key={index}>
                                    <div
                                    class="relative lx:w-1/2 bg-gray-900 block p-7 border border-gray-100 rounded-lg"
                                >
                                    <span
                                        class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div class="justify-between sm:flex">
                                        <div>
                                            <h5 class="text-xl font-bold text-gray-100">
                                                {job.title} @ {job.place}
                                            </h5>
                                            <p class="mt-1 text-xs font-medium text-gray-400">By Kevin Hernandez</p>
                                        </div>

                                        <div class="flex-shrink-0  hidden ml-3 sm:block">
                                            <img
                                                class="object-cover bg-white w-16 h-16 rounded-lg shadow-sm"
                                                src={images[index]}
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <div class="mt-4 sm:pr-8">
                                        <p class="text-sm text-gray-200">
                                            {job.todo}
                                        </p>
                                    </div>

                                    <dl class="flex mt-6">
                                        <div class="flex flex-col-reverse">
                                            <dt class="text-sm font-medium text-gray-400">Date</dt>
                                            <dd class="text-xs text-gray-300">{job.date}</dd>
                                        </div>

                                        <div class="flex flex-col-reverse ml-3 sm:ml-6">
                                            <dt class="text-sm font-medium text-gray-400">URL</dt>
                                            <dd class="text-xs text-gray-300">Not at the moment.</dd>
                                        </div>
                                    </dl>
                                </div>
                                </div>
                            )
                        })
                    ) : (
                        <div class="px-24">
                            
                        </div>
                    )

            }

        </section>
    );
}

export default WorkPlaces;