import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Button } from "@chakra-ui/react";

export const App = () => {
  function fetchTilsyn() {
    fetch("https://smilefjes.herokuapp.com/tilsyn")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Button onClick={fetchTilsyn}> Hent tilsyn </Button>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
