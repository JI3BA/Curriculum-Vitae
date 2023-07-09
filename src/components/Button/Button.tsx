import { ReactNode, MouseEventHandler, CSSProperties} from "react";
import './Button.scss'

interface IButton{
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    style?: CSSProperties,
    className: string,
}

export const Button = ({children, onClick, ...rest}: IButton) => {
    return(
            <button onClick={onClick} {...rest} >{children}</button>
    )
}