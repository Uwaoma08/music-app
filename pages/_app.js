import "../styles/globals.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
