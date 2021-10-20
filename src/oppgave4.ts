import { QueryParams } from "./types";

export const shouldUseAccessToken = true;

export function fetchTilsynListWitHeaderParam(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = `https://smilefjes.herokuapp.com/tilsyn?poststed=${poststed}&postnummer=${postnummer}` +
  `&smilefjes=${smilefjes}`;

  return fetch(url, {
    headers: {
      accessToken: "superduperhemmeligpassord",
    },
  });
}
