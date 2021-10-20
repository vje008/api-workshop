export const enableDetailsLink = true;

export function fetchTilsynDetails(tilsynId: string): Promise<Response> {
  const url = "https://smilefjes.herokuapp.com/tilsyn/" + tilsynId; 

  return fetch(url);
}
