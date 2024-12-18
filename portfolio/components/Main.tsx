
import Animation from "./Animation";
import Hero from "./Hero"

export default function Main() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero />
                    <Animation />
                </div>
            </section>
        </>
    );
};