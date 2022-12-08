import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "../styles/globals.css";
import { PlayingNowContext } from "../contexts/PlayingNowContext";
import NewData from "../components/NewData";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [music, setMusic] = useState(NewData[0].item[0]);

  return (
    <QueryClientProvider client={queryClient}>
      <PlayingNowContext.Provider value={{ music, setMusic }}>
        <Component {...pageProps} />
      </PlayingNowContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
