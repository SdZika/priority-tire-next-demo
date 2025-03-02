import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import client from "@/lib/apolloClient"; 
import "@/styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6", // Tailwind blue-500
    },
    secondary: {
      main: "#ef4444", // Tailwind red-500
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures MUI styles are reset properly */}
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
