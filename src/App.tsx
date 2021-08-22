import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Button } from "@chakra-ui/react";
import { TilsynList } from "./TilsynList";

export const App = () => {
  const [showTilsyn, setShowTilsyn] = React.useState(false);

  if (showTilsyn) {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <TilsynList />
        </Box>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Button onClick={() => setShowTilsyn(true)}> Hent tilsyn </Button>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
