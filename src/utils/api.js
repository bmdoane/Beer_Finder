// Auto complete?
export function getByOneTerm(term1) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error('No data was found')
      }
      return data
    })
}

export function getByTwoTerms (term1, term2) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}&${term2}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error('No data was found')
      }
      return data
    })
}

export function getByThreeTerms (term1, term2, term3) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}&${term2}&${term3}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error('No data was found')
      }
      return data
    })
}