export function fetchTilsynList(): Promise<Response> {
  const url = "https://smilefjes.herokuapp.com/tilsyn";

  return fetch(url);
}
