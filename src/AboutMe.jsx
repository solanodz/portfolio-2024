import AboutMePhoto from './assets/fotoperfil-b-w.jpg'


const AboutMe = () => {
    return (
        <div>
            <section className='h-screen text-white flex flex-row mx-32 py-12'>
                <article className='w-1/3 border border-white p-3 font-grotesk'>
                    <img
                        src={AboutMePhoto}
                        alt=""
                        className='border border-white w-86'
                    />
                    <p className='text-left mb-12 w-fit'>07/June/2000</p>
                    <p className='text-right font-light w-fit ml-auto'>FRONTEND DEVELOPER</p>
                    <p className='text-right text-xl font-medium w-fit ml-auto'>SOLANO DE ZUASNABAR</p>
                </article>
                <article className='w-2/3'>
                    <h1 className='text-7xl font-semibold font-grotesk ml-12 mb-12 flex w-fit justify-between'>ABOUT ME</h1>
                    <p className='ml-12 font-inter font-light text-xl text-left leading-tight my-2'>
                        MY NAME IS <span className='font-medium'>SOLANO</span>. I&apos;M A <span className='underline'>FULLSTACK DEVELOPER FOUCESED ON FRONTEND DEVELOPMENT USING REACT</span>.</p>
                    <p className='ml-12 font-inter font-light text-xl text-left leading-tight my-2'>
                        I&apos;VE BEEN A PHYSICAL EDUCATION TEACHER SINCE AUGUST 2022, BUT WHILE COMPLETING MY DEGREE, I DISCOVERED A PASSION FOR PROGRAMMING AS WELL. AFTER GRADUATING, I DECIDED TO DEDICATE MORE TIME TO THIS FIELD BY TAKING THE FULL-STACK DEVELOPER COURSE AT CODERHOUSE, WHICH I FINISHED IN FEBRARY,2024.
                    </p>

                    <div>
                        <p className='ml-12 font-inter font-medium text-xl text-left leading-tight my-2'>
                            PASSIONATE ABOUT DESIGN, AESTHETICS AND CREATION OF WEBSITES WITH UNIQUE VISUAL CHARACTERISTICS TO DESCRIBE CONCEPTS WITH DESIGN.
                        </p>
                        <div className='mx-10 pt-12 flex flex-row justify-between items-end'>
                            <a href='https://github.com/solanodz' target='_blank' rel="noreferrer" className='border borcer-white p-2 w-full mx-2 hover:bg-white hover:text-black duration-300'>GITHUB</a>
                            <a href='https://www.linkedin.com/in/solanodz/' target='_blank' rel="noreferrer" className='border borcer-white p-2 w-full mx-2 hover:bg-white hover:text-black duration-300'>LINKEDIN</a>
                        </div>
                    </div>
                </article>
            </section >
        </div >
    )
}

export default AboutMe
