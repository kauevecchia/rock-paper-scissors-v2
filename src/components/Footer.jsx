export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 p-4 mt-16 bg-sky-700 w-full">
            <button id="rulesBtn" className="px-4 py-2 bg-red-600 rounded-md text-white font-bold hover:bg-red-700 transition duration-300">Rules</button>
            <p className="text-white">Developed by <a href="https://github.com/kauevecchia" target="_blank" class="hover:text-yellow-300 hover:underline">Kauê</a>.</p>
        </footer>
    )
}