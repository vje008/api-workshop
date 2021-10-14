import { QueryParams } from "./types";

export const shouldUseInputFields = false;

export function fetchTilsynListWithQueryParams(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = "HELE DENNE TEKSTEN SKAL BYTTES UT";

  return fetch(url);
}
