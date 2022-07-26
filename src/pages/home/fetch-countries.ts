import { ApolloError, useQuery } from '@apollo/client'
import { CountryType } from './types'
import { client } from '../../services'
import { ListCountries } from './query'

type CountriesListType = {
  countries: Array<CountryType>
  loading: boolean
  error: ApolloError | undefined
}

export const useCountriesList = (): CountriesListType => {
  const { data, loading, error } = useQuery(ListCountries, { client })
  return {
    countries: data?.countries,
    loading: loading,
    error,
  }
}
