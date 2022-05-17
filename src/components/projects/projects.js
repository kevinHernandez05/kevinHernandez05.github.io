import UnderConstruction from "../../underConstruction/underconstruction";
import Card from "../card/card";

export default function projects(props) {
  return (
    <>
      <section class="job-section md:px-24 lg:px-36 xl:px-96 pt-16">
        <div class="px-7 grid md:grid-cols-2">
          <div class="px-2">
            <h1 class="font-semibold">03. Stuff I've Builded</h1>
            <hr></hr>
          </div>
        </div>
      </section>
      <Card />
    </>
  );
}
