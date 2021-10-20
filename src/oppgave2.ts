import { QueryParams } from "./types";

export const shouldUseInputFields = true;

export function fetchTilsynListWithQueryParams(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;
  //?postnummer=7030&smilefjes=blid&

  const url = `http://localhost:3003/tilsyn?poststed=${poststed}&postnummer=${postnummer}` +
  `&smilefjes=${smilefjes}`;

  return fetch(url);
}
