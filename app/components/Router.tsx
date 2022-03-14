// Once the scroll has gone the screen, move menu button to top left
import { FaDiscord, FaHome, FaCode, FaGithub } from "react-icons/fa"
import { AiFillInfoCircle } from "react-icons/ai"
import { LinkOption } from '~/components/LinkOption'

const Divider = () => <span className="w-4/5 h-1 rounded-xl bg-slate-600 opacity-10" />

export function Router() {
    return (
        <div className="fixed z-20 h-full w-1/6 flex items-center group">
            <div className="h-24 w-6 flex justify-center p-2 items-center rounded-r-xl shrink-0 bg-emerald-400 transition duration-300 ease-in-out tranform group-hover:-translate-x-96">
                <span className="w-2 bg-slate-600 h-full rounded-xl"></span>
            </div>

            <div className="w-16 bg-slate-400 p-4 gap-y-4 text-slate-600 text-3xl items-center justify-start shrink-0 h-2/3 tranform transition duration-300 ease-in-out -translate-x-96 rounded-2xl group-hover:translate-x-0 flex flex-col shadow-lg">
                <LinkOption element={FaHome} />
                <Divider />
                <LinkOption element={FaCode} />
                <Divider />
                <LinkOption element={AiFillInfoCircle} />
                <div className="flex-1"></div>
                <LinkOption element={FaGithub} onClick={() => window.open('https://www.github.com')} />
                <Divider />
                <LinkOption element={FaDiscord} onClick={() => window.open('https://discord.gg/DcgfW9fsfe')} />
            </div>
        </div>
    )
}