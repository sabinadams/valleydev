// Once the scroll has gone the screen, move menu button to top left
import { TiThMenu } from 'react-icons/ti'
export function Router() {
    return (
        <div className="fixed z-20 pl-8 h-full w-1/6 flex items-center group">
            <p className="font-semibold text-2xl text-emerald-400 tranform transition duration-300 ease-in-out -translate-x-4 group-hover:-translate-x-96">
                <TiThMenu />
            </p>
            <div className="w-16 bg-slate-400 h-2/3 tranform transition duration-300 ease-in-out -translate-x-96 rounded-2xl group-hover:translate-x-0">
            </div>
        </div>
    )
}