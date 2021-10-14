import { QueryParams } from "./types";

export const shouldUseAccessToken = false;

export function fetchTilsynListWitHeaderParam(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = `BYTT UT DENNE MED SVARET FRA OPPGAVE 2`;

  return fetch(url, {
    headers: {
      // Her må vi legge til et parameter
    },
  });
}
