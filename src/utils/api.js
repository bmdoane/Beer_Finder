// May need to refacotr dependant on how terms are handled
// Auto complete?
export function getByOneTerm(term1) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}`)
    .then((res) => res.json())
    .then((brewery) => {
      return console.log(brewery)
    })
}

export function getByTwoTerms (term1, term2) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}&${term2}`)
    .then((res) => res.json())
    .then((brewery) => {
      return brewery
    })
}

export function getByThreeTerms (term1, term2, term3) {
  return fetch(`https://api.openbrewerydb.org/breweries?${term1}&${term2}&${term3}`)
    .then((res) => res.json())
    .then((brewery) => {
      return brewery
    })
}