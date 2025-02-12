import rockImg from '../assets/rock.svg'
import paperImg from '../assets/paper.svg'
import scissorsImg from '../assets/scissors.svg'

export function Play() {
    return (
        <div id="options-container" className="flex flex-col items-center justify-center animate-showUp">
            <h2 className="text-sky-700 font-bold text-2xl mb-4 md:text-3xl">Choose one: </h2>
            <div id="options" className="flex gap-4 md:gap-6 flex-row items-center">
                <button className="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="rock">
                    <img src={rockImg} alt="rock" />
                </button>
                <button className="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="paper">
                    <img src={paperImg} alt="paper" />
                </button>
                <button className="choice-button w-24 h-24 md:w-28 md:h-28 hover:scale-110 transition duration-300 ease-in-out" data-choice="scissors">
                    <img src={scissorsImg} alt="scissors" />
                </button>
            </div>
        </div>
    )
}