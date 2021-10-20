export function fetchTilsynList(): Promise<Response> {
  const url = "http://localhost:3003/tilsyn";

  return fetch(url);
}
