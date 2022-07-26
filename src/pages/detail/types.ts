export type CountryDetailType = {
  code: string
  name: string
  native: string
  phone: string
  capital: string
  languages: [Language]
  continent: Continent
  currency: string
  emoji: string
  emojiU: string
  states: [State]
}

type Continent = {
  code: string
  name: string
  countries: [CountryDetailType]
}

type Language = {
  code: string
  name: String
  native: String
  rtl: boolean
}

type State = {
  code: string
  name: string
  country: CountryDetailType
}
