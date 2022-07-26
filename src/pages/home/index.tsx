import * as React from 'react'
import { useState } from 'react'
import { useCountriesList } from './fetch-countries'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { CountryType } from './types'

export const CountryList = () => {
  const { countries, loading, error } = useCountriesList()
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState<Array<CountryType>>()
  const navigate = useNavigate()

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = countries.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(countries)
    }
  }

  const onCountryNameClicked = (code: string) => {
    navigate('/details', {
      state: {
        countryCode: code,
      },
    })
  }

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>
  }

  return (
    <>
      <h3 className="headline">Choose your country</h3>
      <div className="inputSearch">
        <input
          className="inputfield"
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className="nameWrapper">
        {searchInput.length > 1
          ? filteredResults?.map((country) => {
              return (
                <p onClick={() => onCountryNameClicked(country.code)} key={country.code}>
                  {country.emoji} - {country.name}
                </p>
              )
            })
          : countries.map((country) => {
              return (
                <p onClick={() => onCountryNameClicked(country.code)} key={country.code}>
                  {country.emoji} - {country.name}
                </p>
              )
            })}
      </div>
    </>
  )
}
