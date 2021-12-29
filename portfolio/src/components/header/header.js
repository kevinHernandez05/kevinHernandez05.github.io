export default function Header(props){
    return(
        <section class="section mt-20 px-24">
            <div class="max-w-2xl px-12">
                
                <p class="font-semibold text-white-800">Howdy, Mate! My name is</p>
                <h2 class="text-7xl text-white-600 mt-4">{props.name}.</h2>
                <h2 class="text-5xl text-white-600 mt-4">I Build stuff for the internet.</h2>

                <p class="text-white-800 mt-4">
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
    return (job === undefined || job === '') ?  ` I'm working on personal proyects for a living.` : `Working at ${ job }`
}