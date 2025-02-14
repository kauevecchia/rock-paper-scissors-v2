export function Modal({ isModalOpen, handleCloseModal }) {
    if (!isModalOpen) {
        return null
    }

    return (
        <div id="rulesModal" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full z-10">
                <h2 className="text-xl font-bold mb-4">Game rules</h2>
                <ul className="mb-4">
                    <li>Rock wins against scissors.</li>
                    <li>Paper wins against rock.</li>
                    <li>Scissors wins against paper.</li>
                    <li>If both players select the same option, it's a draw.</li>
                    <li className="font-bold text-red-600">**You can't select rock twice in a row.**</li>
                </ul>
                <button id="closeBtn" className="w-full px-4 py-2 bg-sky-600 hover:bg-sky-700 transition duration-200 text-white rounded-md" onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    )
}