import './Button.scss'

interface IButton{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties,
    className: string,
}

const Button = ({children, onClick, ...rest}: IButton) => {
    return(
            <button onClick={onClick} {...rest} >{children}</button>
    )
}

export default Button