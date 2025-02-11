export function Results() {
    return (
        <div id="result-display" class="flex flex-col gap-2 items-center justify-center hidden animate-slideDownMb md:animate-slideDown">
            <div id="choicesDisplay" class="flex items-center justify-center gap-6">
                <div class="flex flex-col gap-2">
                    <h2 class="font-bold text-2xl md:text-3xl">Player:</h2>
                    <img id="playerChoice" class="w-28 h-28 md:w-32 md:h-32" src="" alt="player choice" />
                </div>
                <p class="text-4xl font-bold">X</p>
                <div class="flex flex-col gap-2">
                    <h2 class="font-bold text-2xl md:text-3xl">Machine:</h2>
                    <img id="machineChoice" class="w-28 h-28 md:w-32 md:h-32" src="" alt="machine choice" />
                </div>
            </div>
            <p id="result" class="text-center font-bold text-xl md:text-2xl"></p>
            <button id="playAgainBtn" class="px-4 py-2 bg-sky-700 rounded-md text-white md:text-2xl md:px-6 md:py-3">Play Again</button>
        </div>
    )
}