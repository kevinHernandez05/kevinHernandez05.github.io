import Doodle from './images/MeditatingDoodle.svg';


export default function projects(props) {
    return (
        <section class="job-section sm:px-12 md:px-24 lg:px-36 xl:px-96 py-24">
            <div class="grid grid-cols-2">
                <div class="px-2">
                    <h1 class="font-semibold">03. Stuff I've Builded</h1>
                    <hr></hr>
                </div>
            </div>

            <div class="grid place-items-center px-10 py-12 ">

                <img class="bg-white" src={Doodle} height="250px" width="250px"></img>
                <p class="py-5">This section is under construction, will be here any soon!</p>
            </div>
        </section>
    )
}