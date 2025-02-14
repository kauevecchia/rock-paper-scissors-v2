export function Error({ setDisplayError }) {
    return (
        <div id="errorDisplay" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-md p-4">
                <p className="font-bold text-red-600 text-center">It's not allowed to choose rock twice in a row.</p>
                <button id="closeErrorDisplay" className="px-4 py-2 rounded-md font-bold bg-sky-700 text-white" onClick={() => setDisplayError(false)}>Close</button>
            </div>
        </div>
    )
}