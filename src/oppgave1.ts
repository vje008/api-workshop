export function fetchTilsynList(): Promise<Response> {
  const url = "http://localhost:3000/tilsyn";

  return fetch(url);
}
