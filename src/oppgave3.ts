export const enableDetailsLink = true;

export function fetchTilsynDetails(tilsynId: string): Promise<Response> {
  const url = "http://localhost:3000/tilsyn/" + tilsynId; 

  return fetch(url);
}
