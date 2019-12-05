export function getBrewery(searchTerm) {
  return fetch(`https://api.openbrewerydb.org/breweries${searchTerm}`)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error("No data was found");
      }
      return data;
    });
}