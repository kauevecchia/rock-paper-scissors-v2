import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

export function App() {
    return (
        <div className="flex items-center justify-center flex-col font-poppins min-h-screen">
            <Header />
            <main className="mt-8 flex items-center justify-center flex-col gap-6 flex-grow">
                <Play />
                <Results />
            </main>
            <Modal />
            <Footer />
        </div>
    )
}
