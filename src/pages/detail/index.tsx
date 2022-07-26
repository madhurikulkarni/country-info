import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useCountryDetail } from './fetch-country-detail'
import './styles.css'

export const CountryDetail = () => {
  const location = useLocation()
  //@ts-ignore
  const { country, loading, error } = useCountryDetail(location.state.countryCode)

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>
  }

  return (
    <>
      <NavLink to="/">
        <p className="back">
          <b>Back to countries list</b>
        </p>
      </NavLink>
      <h1 className="headline">Country Details - {country.name}</h1>
      <div className="detailWrapper">
        <p>
          <b>Capital:</b> {country.capital}
        </p>
        <p>
          <b>Code:</b> {country.code}
        </p>
        <p>
          <b>Flag:</b> {country.emoji}
        </p>
        <p>
          <b>Phone:</b> {country.phone}
        </p>
        <p>
          <b>Native:</b> {country.native}
        </p>
        <p>
          <b>Currency:</b> {country.currency}
        </p>
        <p>
          Continent: {country.continent?.code} - {country?.continent.name}
        </p>
        <h2>
          <b>States:</b>
        </h2>
        {country.states.map((state) => (
          <p>{state.name}</p>
        ))}
        <h2>
          <b>Languages:</b>
        </h2>
        {country.languages.map((language) => (
          <p>{language.name}</p>
        ))}
      </div>
    </>
  )
}
