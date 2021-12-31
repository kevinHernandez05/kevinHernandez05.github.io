export default function Header(props){
    return(
        <section class="section md:px-24 grid place-items-center">
            <div class="max-w-2xl px-7 md:px-12">
                
                <h1 class="text-white-800 text-sm">Howdy, Mate! My name is</h1>
                <h2 class="text-5xl md:text-7xl text-white-600 mt-4 ">{props.name}.</h2>
                <h2 class="text-3xl md:text-5xl text-white-300 mt-4 opacity-60">I Build stuff for the internet.</h2>

                <h2 class="text-white-800 mt-4 text-2xl opacity-60">
                    I’m a software engineer specializing in building (and occasionally designing) 
                    exceptional digital experiences. Currently, { workingPlace(props.job) } 
                </h2>

                <div class="flex items-end justify-center mt-16"></div>
            </div>
        </section>
    );
}

function workingPlace(job){
    return (job === undefined || job === '') ?  ` I'm working on personal proyects for a living.` : `Working at ${ job }`
}