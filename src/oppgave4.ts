import { QueryParams } from "./types";

export const shouldUseAccessToken = true;

export function fetchTilsynListWitHeaderParam(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = `http://localhost:3003/tilsyn?poststed=${poststed}&postnummer=${postnummer}` +
  `&smilefjes=${smilefjes}`;

  return fetch(url, {
    headers: {
      accessToken: "superduperhemmeligpassord",
    },
  });
}
