import './style.css';
import ProfilePic from './images/profile.jpeg';

export default function About(props) {
    return (
        <section class="section sm:px-12 md:px-24 lg:px-36 xl:px-96 grid grid-cols-2">
            <div class="px-2">
                <p class="font-semibold">01. About me</p> 
                <hr></hr>
                <p class="text-lg mt-12">
                    Hello, my name is {props.name} and I enjoy creating things that live on the internet.
                    I got {calculatingYears(2016)} years crafting and serving high quality products to
                    my clients.
                    <br></br>
                    Making software with technologies such as:
                </p>
                <div class="grid grid-cols-3 text-center py-5">
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">.Net Core</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Angular</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Vue.js</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Ionic</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Node.js</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Tailwind</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">React</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">Tfjs</span>
                    <span class="m-1 bg-teal-800 rounded-full px-2 font-bold text-sm leading-loose">web3js</span>
                </div>
            </div>

            <div class="profilePicDiv px-2 flex items-start justify-center">
                <img class="profilePic" width="250" height="250" src={ProfilePic} alt="Profile Photo"></img>
            </div>
        </section>
    );
}

function calculatingYears(firstLaboralYear) {
    return (new Date().getFullYear() - firstLaboralYear) - 1;
}