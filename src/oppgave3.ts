export const enableDetailsLink = true;

export function fetchTilsynDetails(tilsynId: string): Promise<Response> {
  const url = "http://localhost:3003/tilsyn/" + tilsynId; 

  return fetch(url);
}
