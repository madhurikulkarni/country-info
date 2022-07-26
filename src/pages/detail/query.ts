import { gql } from '@apollo/client'

export const DetailCountryQuery = gql`
  query DetailCountryQuery($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      native
      phone
      emoji
      emojiU
      currency
      continent {
        code
        name
      }
      states {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`
