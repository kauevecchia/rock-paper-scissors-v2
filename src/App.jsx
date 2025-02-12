import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

export function App() {
    return (
        <>
            <Header />
            <Play />
            <Results />
            <Modal />
            <Footer />
        </>
    )
}
