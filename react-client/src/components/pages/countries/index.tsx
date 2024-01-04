import { useEffect, useState } from "react"
import axios from "axios"
import { Country, CountryType } from "./country"
import { WithLoading } from "../../ui/loader"

export default function CountriesPage() {
    const [countries, setCountries] = useState<Array<CountryType>>([])
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        async function fetchCountries() {
            try {
                setIsLoading(true)

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

            } finally {
                setIsLoading(false)

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
        <WithLoading isLoading={isLoading}>
            <>
                {countries.map((c: any) => {
                    return <Country key={c.name.official} {...c} />
                })}
            </>
        </WithLoading>
    </div>
}