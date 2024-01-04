import { useEffect, useState } from "react"
import axios from "axios"
import { Country, CountryType } from "./country"

export function CountriesPage() {
    const [countries, setCountries] = useState<Array<CountryType>>([])


    useEffect(() => {
        async function fetchCountries() {
            try {
                const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
                const modeledCountries: Array<CountryType> = data.filter((c: any) => !c?.name?.common.includes("Palestine")).map((c: any) => {
                    return {
                        name: c?.name?.common,
                        population: c.population,
                        imageUrl: c?.flags?.svg
                    }
                })
                setCountries(modeledCountries)
            } catch (error) {

            }

        }
        fetchCountries()

        return () => {
            console.log("Component Destroy")
        }
    }, [])
    return <div>
        <div>
        </div>
        {countries.map((c: any) => {
            return <Country key={c.name.official} {...c} />
        })}
    </div>
}