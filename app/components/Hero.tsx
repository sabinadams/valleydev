import { FaChevronDown } from 'react-icons/fa'
import { Logo } from './Logo'

export function Hero() {
    const scrollToNext = () => {
        document?.querySelector('#test')?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div className="bg-slate-600 h-full relative">
            <div className="h-full w-full z-10 relative flex flex-col justify-center items-center gap-y-12 p-8 md:p-0">
                <div className="w-2/3 md:w-1/3 text-center">
                    <Logo />
                </div>
                <p className="font-extrabold text-4xl md:text-7xl text-white relative">
                    Valley Dev
                    <span className="rounded-2xl cursor-default select-none border-4 border-emerald-400 px-1 md:px-2 py-1 absolute z-10 right-[-3.3rem] md:right-[-4.3rem] text-emerald-400 text-xs md:text-sm font-semibold">Alpha</span>
                </p>
                <p className="font-semibold text-xl text-gray-400 text-center">A place to collaborate and learn with developers in your community.</p>
                <button className="animate-bounce align-bottom text-6xl text-gray-300" onClick={() => scrollToNext()}>
                    <FaChevronDown />
                </button>
            </div>
            <div className="h-full w-full homeHero absolute top-0 z-0"></div>
        </div>
    )
}