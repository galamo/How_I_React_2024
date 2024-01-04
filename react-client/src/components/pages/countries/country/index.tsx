// import "./index.css"
import css from "./style.module.css"
export type CountryType = { name: string, population: number, imageUrl: string }
export function Country(props: CountryType) {
    const { name, population, imageUrl } = props
    return <div className={css.countryCard}>
        <h2> {name} </h2>
        <h3> Population: {population} </h3>
        <img src={imageUrl} height={300} width={300} />
    </div>
}