import { ReactElement } from "react"
import css from "./style.module.css"
type TWithLoading = {
    isLoading: boolean,
    children: ReactElement
}

export function WithLoading(props: TWithLoading) {
    const { children, isLoading } = props;
    if (isLoading) return <Spinner />
    else return children
}

export const Spinner = () => <div className={css.loader}></div>;
