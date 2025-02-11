export function Play() {
    return (
        <div id="options-container" class="flex flex-col items-center justify-center animate-showUp">
            <h2 class="text-sky-700 font-bold text-2xl mb-4 md:text-3xl">Choose one: </h2>
            <div id="options" class="flex gap-4 md:gap-6 flex-row items-center">
                <button class="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="rock">
                    <img src="../assets/rock.svg" alt="rock" />
                </button>
                <button class="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="paper">
                    <img src="../assets/paper.svg" alt="paper" />
                </button>
                <button class="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="scissors">
                    <img src="../assets/scissors.svg" alt="scissors" />
                </button>
            </div>
        </div>
    )
}