

export default function MovieCard() {
    return (
        <div className="col-span-1 relative">
            <img 
                src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                className="w-full"/>
                
            <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
                <p className="text-xl text-font-bold text-white">Dune: Part Two</p> 
            </div>
        </div>
    );
};