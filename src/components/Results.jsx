export function Results({ handlePlayAgain }) {
    return (
        <div id="result-display" className="flex flex-col gap-2 items-center justify-center animate-slideDownMb md:animate-slideDown">
            <div id="choicesDisplay" className="flex items-center justify-center gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl md:text-3xl">Player:</h2>
                    <img id="playerChoice" className="w-28 h-28 md:w-32 md:h-32" src="" alt="player choice" />
                </div>
                <p className="text-4xl font-bold">X</p>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl md:text-3xl">Machine:</h2>
                    <img id="machineChoice" className="w-28 h-28 md:w-32 md:h-32" src="" alt="machine choice" />
                </div>
            </div>
            <p id="result" className="text-center font-bold text-xl md:text-2xl"></p>
            <button id="playAgainBtn" className="px-4 py-2 bg-sky-700 rounded-md text-white md:text-2xl md:px-6 md:py-3" onClick={handlePlayAgain}>Play Again</button>
        </div>
    )
}