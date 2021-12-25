export default function About(props){
    return(
        <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
                <p class="font-semibold text-gray-800">Hi, my name is</p>
                <h2 class="text-3xl text-gray-600 mt-4">Kevin Hernandez.</h2>
                <h2 class="text-3xl text-gray-600 mt-4">I Build stuff on internet.</h2>

                <p class="font-semibold text-gray-800">
                    I’m a software engineer specializing in building (and occasionally designing) 
                    exceptional digital experiences. Currently, { workingPlace(props.job) } 
                </p>

                <div class="flex items-end justify-center mt-16">
                   
                </div>
            </div>
        </section>
    );
}

function workingPlace(job){
    return (job === undefined || job === '') ?  ` I'm working on personal proyects for living.` : `Working at ${ job }`
}