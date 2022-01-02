export default function Contact(props) {
    return (
        <section class="job-section md:px-24 lg:px-36 xl:px-96 py-24">
            <div class="px-7 grid md:grid-cols-2">
                <div class="px-2">
                    <h1 class="font-semibold">05. Contact</h1>
                    <hr></hr>
                </div>
            </div>
            <div class="py-10 px-10">
                <p>Something you wanna talk about?</p> 
                <p>Feel free to contact with me.</p>
            </div>
            <div class="py-5 grid place-items-center">
                <a href="mailto:kev.hdez05@gmail.com" class="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded">
                    <p>Say hi :)</p>
                </a>
            </div>

        </section>
    );
}