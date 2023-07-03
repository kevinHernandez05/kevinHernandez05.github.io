import "./style.css";
import ProfilePic from "./images/profile.jpeg";

export default function About(props) {
  return (
    <section class="py-24 px-7 md:px-10 lg:px-24 xl:px-56 2xl:px-96 grid md:grid-cols-2">
      <div class="px-2">
        <h1 class="font-semibold">01. About me</h1>
        <hr></hr>
        <p class="text-lg mt-12">
          👋🏾 Hello, my name is {props.name} and I enjoy creating things that
          live on the internet. Software Developer with
          {" " + calculatingYears(2016) + " "}
          years of experience building exceptional digital experiences with
          Microsoft and JavaScript technologies, adjusting those to the best
          developing practices.
        </p>
        <p class="text-lg mt-12">
          Solid experience working in different markets and putting special
          attention in understanding each projects’ needs.
        </p>
        <p class="text-lg mt-12">Making software with technologies such as:</p>
        <div class="grid grid-cols-3 text-center py-5">
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            .Net
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            Ionic
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            Node.js
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            Tailwind
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            React
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            Golang
          </p>
          <p class="m-1 rounded-full px-2 font-bold text-sm leading-loose">
            web3
          </p>
        </div>
      </div>

      <div class="profilePicDiv px-2 flex items-center justify-center">
        <img
          class="profilePic"
          width="250"
          height="250"
          src={ProfilePic}
          alt="Profile"
        ></img>
      </div>
    </section>
  );
}

function calculatingYears(firstLaboralYear) {
  return new Date().getFullYear() - firstLaboralYear - 1;
}
