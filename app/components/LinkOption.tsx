import { IconType } from "react-icons";

interface Props {
    element: IconType
    onClick?: (...args: any) => any
}

export function LinkOption(props: Props) {
    return <props.element className="transition duration-300 ease-in-out tranform hover:-translate-y-1 hover:text-emerald-700 cursor-pointer" onClick={props.onClick ?? (() => { })} />
}