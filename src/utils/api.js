export function getBrewery(searchTerm) {
  return fetch(`https://api.openbrewerydb.org/breweries${searchTerm}&per_page=50`)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error("No data was found");
      }
      return data;
    })
}