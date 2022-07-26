import { gql } from '@apollo/client'

export const ListCountries = gql`
  {
    countries {
      name
      code
      emoji
    }
  }
`
