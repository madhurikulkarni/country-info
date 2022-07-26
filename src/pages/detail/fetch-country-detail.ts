import { ApolloError, useQuery } from '@apollo/client'
import { CountryDetailType } from './types'
import { client } from '../../services'
import { DetailCountryQuery } from './query'

type CountriesListType = {
  country: CountryDetailType
  loading: boolean
  error: ApolloError | undefined
}

export const useCountryDetail = (code: string): CountriesListType => {
  const { data, loading, error } = useQuery(DetailCountryQuery, {
    variables: {
      code: code,
    },
    client,
  })

  return {
    country: data?.country,
    loading: loading,
    error,
  }
}
