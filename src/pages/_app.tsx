import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import client from "@/lib/apolloClient"; 
import "@/styles/globals.css";
import { Layout } from "@/components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Tailwind black
    },
    secondary: {
      main: "#fff", // Tailwind white
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline /> {/* Ensures MUI styles are reset properly */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
