import "../ui/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Thema } from "../ui/themes/Thema";
import { Header } from "../ui/components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Thema}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
