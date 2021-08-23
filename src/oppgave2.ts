export function fetchTilsynDetails(tilsynId: string): Promise<Response> {
  return fetch(`https://smilefjes.herokuapp.com/tilsyn/${tilsynId}`);
}
