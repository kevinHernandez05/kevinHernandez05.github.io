import Doodle from './MeditatingDoodle.svg';

export default function UnderConstruction(props) {
    return (
    <div class="grid place-items-center px-10 py-12">
        <img class="bg-white" src={Doodle} height="250px" width="250px"></img>
        <p class="py-5">This section is under construction, will be here any soon!</p>
    </div>
    );
}