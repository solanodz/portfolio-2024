import { useCursorMotion } from './config/framerConfig'
import { CursorMotionContainer } from './config/CursorMotion'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAsterisk } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {

    const { cursorVariant, textEnter, textLeave, variants } = useCursorMotion();

    return (
        <CursorMotionContainer>
            <div className='h-screen bg-black '>
                <div className="items-center flex flex-col">
                    <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='font-grotesk ml-32 text-green text-left mt-32 mr-auto text-5xl'>Welcome.</h1>
                    <div className='mr-auto ml-32'>
                        <h2 id='title-1' onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-6xl text-white font-grotesk mr-auto text-left'>I&apos;M SOLANO</h2>
                        <h2 id='title-2' onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-8xl text-white font-grotesk mr-auto text-left'>A FRONTEND DEVELOPER</h2>
                        <p id='title-3' onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-white font-grotesk text-left text-lg leading-7">(ALSO A BIG FAN OF AESTHETICS AND DESIGN)</p>
                    </div>
                </div>
                <motion.div
                    className='h-5 w-5 rounded-full fixed top-0 left-0 pointer-events-none'
                    variants={variants}
                    animate={cursorVariant}
                    transition={{ type: "tween", ease: "backOut" }}
                >
                </motion.div>
                <section className='text-right mt-28 flex flex-row'>
                    <article id="title-4" className='mt-12 ml-32 font-inter text-left text-white flex flex-col leading-tight w-2/3'>
                        <a href="" className=' w-fit px-2 text-white hover:text-green duration-200'>LINKEDIN <FontAwesomeIcon icon={faArrowRight} className='pl-3 text-xs ' /></a>
                        <a href="" className=' w-fit px-2 text-white hover:text-green duration-200'>EMAIL <FontAwesomeIcon icon={faArrowRight} className='pl-3 text-xs ' /></a>
                        <a href="" className=' w-fit px-2 text-white hover:text-green duration-200'>GITHUB <FontAwesomeIcon icon={faArrowRight} className='pl-3 text-xs ' /></a>
                    </article>

                    <article id='title-5' className='w-1/2 text-white flex flex-row font-inter text-left items-center'>
                        <FontAwesomeIcon icon={faAsterisk} spin className='text-green text-4xl mx-3' />
                        <div className='leading-tight text-xl'>
                            <p>I CAN DESIGN AND DEVELOP</p>
                            <p>WEBSITES WITH A UNIQUE</p>
                            <p className='text-green font-medium'>IDENTITY.</p>
                        </div>
                    </article>
                </section>
            </div>
        </CursorMotionContainer>
    )
}

export default Hero
