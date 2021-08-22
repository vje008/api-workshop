import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import { Tilsyn } from "./types";
import { mapSmilefjesToEmoji } from "./utils";

export const TilsynList = () => {
  const [tilsyn, setTilsyn] = React.useState<Tilsyn[]>();

  React.useEffect(() => {
    const fetchTilsyn = async () => {
      const response = await fetch("https://smilefjes.herokuapp.com/tilsyn");
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
              <Tr>
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
