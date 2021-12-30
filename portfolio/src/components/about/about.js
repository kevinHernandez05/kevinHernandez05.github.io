import './style.css';
import ProfilePic from './images/profile.jpeg';

export default function About(props) {
    return (
        <section class="section sm:px-12 md:px-24 lg:px-36 xl:px-96 grid grid-cols-2">
            <div class="px-2">
                <h1 class="font-semibold">01. About me</h1> 
                <hr></hr>
                <p class="text-lg mt-12">
                    Hello, my name is {props.name} and I enjoy creating things that live on the internet.
                    I got {calculatingYears(2016)} years crafting and serving high quality products to
                    my clients.
                    <br></br>
                    Making software with technologies such as:
                </p>
                <div class="grid grid-cols-3 text-center py-5">
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>.Net Core</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Angular</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Vue.js</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Ionic</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Node.js</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Tailwind</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>React</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>Tfjs</p>
                    <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose"><span class="fab fa-angellist"></span>web3js</p>
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