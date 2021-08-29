import React from "react";
import {
  Spinner,
  SimpleGrid,
  Box,
  Text,
  Button,
  Heading,
  Center,
  Stack,
} from "@chakra-ui/react";
import { TilsynDetailsType } from "./types";
import { mapSmilefjesToEmoji } from "./utils";
import { fetchTilsynDetails } from "./oppgave3";

type TilsynDetailsProps = {
  tilsynId: string;
  onClear: () => void;
};

export const TilsynDetails = (props: TilsynDetailsProps) => {
  const [tilsynDetails, setTilsynDetails] = React.useState<TilsynDetailsType>();

  React.useEffect(() => {
    const getTilsynDetails = async () => {
      const response = await fetchTilsynDetails(props.tilsynId);
      const tilsyn = await response.json();
      setTilsynDetails(tilsyn);
    };
    getTilsynDetails();
  }, []);

  if (tilsynDetails) {
    return (
      <>
        <Button
          justifySelf={"flex-end"}
          width={100}
          colorScheme="blue"
          onClick={props.onClear}
        >
          Gå tilbake
        </Button>
        <Center h="100px">
          <Stack marginBottom="10">
            <Heading>{tilsynDetails.navn}</Heading>
            <Text>
              {`${tilsynDetails.adresse}, ${tilsynDetails.postnummer} ${tilsynDetails.poststed}`}
            </Text>
            <Text>Tilsyn gjennomført: {tilsynDetails.dato} </Text>
          </Stack>
        </Center>
        <SimpleGrid minChildWidth="260px" spacing="40px">
          <Box textAlign="center" height="200px">
            <Text>Tilsynsresultat: </Text>
            <Text fontSize="100">{`${mapSmilefjesToEmoji(
              tilsynDetails.smilefjes
            )}`}</Text>
          </Box>

          <Box bg="gray.100" height="200px">
            <Text>{`Lokaler og utstyr: ${tilsynDetails.lokalerOgUtstyr}`}</Text>
            <Text>{`Mathåndtering og tilbredning: ${tilsynDetails.mathåndteringOgTilberedning}`}</Text>
            <Text>{`Merking og sporbarhet: ${tilsynDetails.merkingOgSporbarhet}`}</Text>
            <Text>{`Rutiner og ledelse: ${tilsynDetails.rutinerOgLedelse}`}</Text>
          </Box>

          <Box bg="gray.100" height="200px">
            <Text>{`TilsynsId: ${tilsynDetails.tilsynsId}`}</Text>
            <Text>{`TilsynshistorikkId: ${tilsynDetails.tilsynshistorikkId}`}</Text>
          </Box>
        </SimpleGrid>
      </>
    );
  } else {
    return <Spinner />;
  }
};
