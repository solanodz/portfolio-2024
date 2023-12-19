import szBlanco from './assets/logos/blanco-sz.png'


const Navbar = () => {
    return (
        <div className="font-grotesk text-white w-full">
            <div className="flex flex-row justify-between border-0.5 items-center border-white mx-1">
                <h1 className="text-lg text-2xl font-regular">SOLANO DE ZUASNABAR</h1>
                <p>TUCUMÁN - ARGENTINA</p>
            </div>
            <div className="border-t border-b border-white flex flex-row justify-between items-center">
                <p className="text-green font-medium text-left text-3xl mx-1">OPEN TO WORK</p>
                <img src={szBlanco} alt="" className='w-9 m-1' />
            </div>
        </div>
    );
}

export default Navbar;
