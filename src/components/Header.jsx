export function Header({ gameState, resetScoreboard }) {
    return (
        <header className="min-h-28 bg-sky-700 w-full flex items-center justify-between p-8">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                <h1 className="text-white text-lg md:text-3xl md:max-w-48 font-bold max-w-32">Rock Paper Scissors</h1>
                <div className="bg-white flex gap-4 font-bold flex-col shadow-md rounded-md p-4">
                    <div>
                        <h2 className="text-base md:text-lg">Scoreboard:</h2>
                        <p className="text-sm md:text-base">Player: <span id="playerScore">{gameState.playerScore}</span></p>
                        <p className="text-sm md:text-base">Machine: <span id="machineScore">{gameState.machineScore}</span> </p>
                    </div>
                    <button id="resetBtn" className="px-4 py-2 bg-sky-700 rounded-md text-white hover:bg-sky-900 transition duration-200" onClick={resetScoreboard}>Reset</button>
                </div>
            </div>
        </header>
    )
}