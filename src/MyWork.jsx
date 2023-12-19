import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import './App.css';

const MyWork = () => {


    useGSAP(() => {
        const cardsContainer = document.querySelectorAll(".cardsScroll");

        cardsContainer.forEach((cardContainer) => {
            const cardWrapper = cardContainer.closest("#cardWrapper");

            function getScrollAmount() {
                let cardsWidth = cardContainer.scrollWidth - cardWrapper.offsetWidth;
                return cardsWidth - window.innerWidth;
            }

            const tween = gsap.to(cardContainer, {
                x: getScrollAmount,
                duration: 1,
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: cardWrapper,
                start: "top 20%",
                end: () => `-=${getScrollAmount() * 1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
                markers: false,
            });
        });
    }, []);


    return (
        <article className='text-white bg-white font-inter text-left items-center mx-auto'>
            <div className='text-7xl font-semibold font-grotesk mx-32 flex w-fit justify-between'>
                <h1>MY WORK</h1>
            </div>
            <div id="cardWrapper" className='w-full'>
                <div className='cardsScroll flex flex-row items-center'>

                    <div className='flex flex-row justify-around mt-10 mb-10 ml-52 overflow-x-auto w-1/6 py-12 px-12'>
                        <div className='flex flex-col items-left w-screen'>
                            <p className='font-grotesk text-left text-xl text-black'>00/07/2023</p>
                            <h2 className='font-grotesk text-black text-8xl font-semibold'>BIRDIE GOLFSHOP</h2>
                            <p className='text-green text-4xl text-left mb-4'>FRONTEND PROJECT</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-around my-10 ml-12 overflow-x-auto w-1/6  py-12 px-12'>
                        <div className='flex flex-col items-left w-screen'>
                            <p className='font-grotesk text-left text-xl text-black'>00/07/2023</p>
                            <h2 className='font-grotesk text-black text-8xl font-semibold'>EASY NOTES</h2>
                            <p className='text-green text-4xl text-left mb-4'>FRONTEND PROJECT</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-around my-10 ml-12 overflow-x-auto w-1/6  py-12 px-12'>
                        <div className='flex flex-col items-left w-screen'>
                            <p className='font-grotesk text-left text-xl text-black'>00/07/2023</p>
                            <h2 className='font-grotesk text-black text-8xl font-semibold'>SZ PERSONAL BLOG</h2>
                            <p className='text-green text-4xl text-left mb-4'>FRONTEND PROJECT</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default MyWork;
