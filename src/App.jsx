import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { useState } from "react";

export function App() {
    const [openModal, setOpenModal] = useState(false)

    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () => {
        setOpenModal(false)
    }

    const [playGame, setPlayGame] = useState(true)
    const [playAgain, setPlayAgain] = useState(false)

    const handlePlayGame = () => {
        setPlayGame(false)
        setPlayAgain(true)
    }

    const handlePlayAgain = () => {
        setPlayGame(true)
        setPlayAgain(false)
    }
 
 
    return (
        <div className="flex items-center justify-center flex-col font-poppins min-h-screen">
            <Header />
            <main className="mt-8 flex items-center justify-center flex-col gap-6 flex-grow">
                <Play handlePlayGame={handlePlayGame} />
                <Results handlePlayAgain={handlePlayAgain} />
            </main>
            <Modal isModalOpen={openModal}  handleCloseModal={handleModalClose} />
            <Footer handleModalOpen={handleModalOpen} />
        </div>
    )
}
