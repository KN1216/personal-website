function Header() {
    return (
        <>
            <header className="fixed top-8 left-1/2 -translate-x-1/2 w-1/2 xl:w-1/3 rounded-full bg-gray-500/25 backdrop-blur-lg z-50 flex h-10 items-center border-blue-500 border-2">
            
                <ul className="flex list-none gap-9 justify-center w-full font-major text-white">
                    <li className="hover:text-gray-400"><a href="#home">home</a></li>
                    <li className="hover:text-gray-400"><a href="#about">about</a></li>
                    <li className="hover:text-gray-400"><a href="#exp">experience</a></li>
                    <li className="hover:text-gray-400"><a href="#contact">contact me</a></li>
                </ul>
            
            </header>        
            
        </>
    );
}

export default Header;