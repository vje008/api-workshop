import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import { QueryParams, Tilsyn } from "./types";
import { mapSmilefjesToEmoji } from "./utils";

type TilsynListProps = {
  onShowTilsynDetails: (tilsynId: string) => void;
  queryParams?: QueryParams;
};

export const TilsynList = ({
  onShowTilsynDetails,
  queryParams,
}: TilsynListProps) => {
  const [tilsyn, setTilsyn] = React.useState<Tilsyn[]>();

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

  React.useEffect(() => {
    const fetchTilsyn = async () => {
      const response = await fetch(
        `http://localhost:3003/tilsyn${getQueryParams(queryParams)}`
      );
      const tilsyn = await response.json();
      setTilsyn(tilsyn);
    };
    fetchTilsyn();
  }, []);

  if (tilsyn) {
    return (
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Navn</Th>
            <Th>Poststed</Th>
            <Th isNumeric>Postnummer</Th>
            <Th>Dato</Th>
            <Th>Smilefjes</Th>
            <Th>Tilsynsid</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tilsyn &&
            tilsyn.map((item) => (
              <Tr
                onClick={() => {
                  onShowTilsynDetails(item.tilsynsId);
                }}
              >
                <Td>{item.navn}</Td>
                <Td>{item.poststed}</Td>
                <Td>{item.postnummer}</Td>
                <Td>{item.dato}</Td>
                <Td>{mapSmilefjesToEmoji(item.smilefjes)}</Td>
                <Td>{item.tilsynsId}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    );
  } else {
    return <Spinner />;
  }
};
