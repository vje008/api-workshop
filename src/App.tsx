import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { TilsynList } from "./TilsynList";
import { InputFields } from "./InputFields";
import { TilsynDetails } from "./TilsynDetails";
import { QueryParams } from "./types";

export const App = () => {
  const [showTilsynSearch, setShowTilsynSearch] = React.useState(true);
  const [showTilsynList, setShowTilsynList] = React.useState(false);
  const [selectedTilsyn, setSelectedTilsyn] = React.useState<string>();
  const [shouldRefetchTilsyn, setShouldRefetchTilsyn] =
    React.useState<boolean>(false);
  const [queryParams, setQueryParams] = React.useState<QueryParams>();

  function handleOnFetchTilsyn(queryParams: QueryParams) {
    setShowTilsynList(true);
    setQueryParams(queryParams);
  }

  function clear() {
    setShowTilsynSearch(true);
    setShowTilsynList(false);
    setSelectedTilsyn(undefined);
    setQueryParams(undefined);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} paddingTop={12} paddingBottom={12}>
          {showTilsynSearch && (
            <InputFields onFetchTilsyn={handleOnFetchTilsyn} />
          )}

          {showTilsynList && (
            <TilsynList
              onShowTilsynDetails={(tilsynId: string) => {
                setShowTilsynList(false);
                setShowTilsynSearch(false);
                setSelectedTilsyn(tilsynId);
              }}
              queryParams={queryParams}
            />
          )}
          {selectedTilsyn && (
            <TilsynDetails tilsynId={selectedTilsyn} onClear={clear} />
          )}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
