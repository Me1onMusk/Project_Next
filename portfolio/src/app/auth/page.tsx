
import SignIn from "./sign-in";

export default function Auth() {

    // const [ view, setView ] = useState("SIGNIN");

    return (
        <main 
            className="flex justify-center items-center mx-auto container px-5 py-40 md:flex-row">
                <SignIn />
        </main>
    );
};