import { QueryParams } from "./types";

function getQueryParams(queryParams?: QueryParams): string {
  let queryParamsString = "?";
  if (queryParams?.smilefjes) {
    queryParamsString = queryParamsString.concat(
      `smilefjes=${queryParams.smilefjes}&`
    );
  }
  if (queryParams?.postnummer) {
    queryParamsString = queryParamsString.concat(
      `postnummer=${queryParams.postnummer}&`
    );
  }
  if (queryParams?.poststed) {
    queryParamsString = queryParamsString.concat(
      `poststed=${queryParams.poststed}&`
    );
  }
  return queryParamsString;
}

export async function fetchTilsynList(
  queryParams?: QueryParams
): Promise<Response> {
  return await fetch(
    `https://smilefjes.herokuapp.com/tilsyn${getQueryParams(queryParams)}`
  );
}
