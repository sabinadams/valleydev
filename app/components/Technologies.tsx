import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiVuedotjs,
    SiAngular,
    SiNestjs,
    SiExpress,
    SiPrisma,
    SiNx,
    SiMongodb,
    SiMysql,
    SiGraphql,
    SiMicrosoftsqlserver,
    SiFastify,
    SiRedux,
    SiSvelte,
    SiVercel,
    SiNetlify,
    SiDocker,
    SiTailwindcss
} from 'react-icons/si'

export function Technologies() {
    return <>
        <h2 className="text-center font-extrabold text-4xl text-slate-600 mb-6"> Some Of Our Favorite Technologies</h2>
        <div className="flex flex-wrap gap-10 justify-center p-8 bg-gray-200">
            <SiNextdotjs className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiReact className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiNodedotjs className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiVuedotjs className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiAngular className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiTailwindcss className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiExpress className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiNestjs className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiPrisma className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiNx className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiMongodb className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiMysql className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiGraphql className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiMicrosoftsqlserver className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiFastify className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiRedux className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiSvelte className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiVercel className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiNetlify className="text-5xl w-24" height={48} width={48} fill="gray" />
            <SiDocker className="text-5xl w-24" height={48} width={48} fill="gray" />
        </div>
    </>
}