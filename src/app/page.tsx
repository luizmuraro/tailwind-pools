export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center space-y-3">
      <h1 className="font-bold">Search by your pool ID</h1>
      <div className="bg-gray-50 p-2 rounded-full">
        <input
          className="bg-transparent border-none w-96 rounded-full  text-zinc-700 focus:outline-none px-2"
          placeholder="0x62FD1dfr..."
        />
        <button className="bg-indigo-400 rounded-full font-medium py-2 px-4 hover:bg-indigo-400/60">
          Search
        </button>
      </div>
    </main>
  );
}
