// Auto complete?
// These all need to be condensed into one search for a string
// https://api.openbrewerydb.org/breweries?by_name=cooper
// https://api.openbrewerydb.org/breweries?by_city=new_york
// https://api.openbrewerydb.org/breweries?by_state=new_york
// https://api.openbrewerydb.org/breweries/5494   - Notice difference
export function getByOneTerm(term1) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}`)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error("No data was found");
      }
      return data;
    });
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

export function getById(id) {
  return fetch(
    `https://api.openbrewerydb.org/breweries/${id}`
  )
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error("No data was found")
      }
      return data
    })
}