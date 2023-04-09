import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            "light-yellow": [
              "#FFFDF1",
              "#FFF0A5",
              "#FFE359",
              "#FFD91B",
              "#E8C100",
              "#BE9E00",
              "#9C8200",
              "#806A00",
            ],
          },
          primaryShade: 1,
          primaryColor: "light-yellow",
        }}
      >
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </MantineProvider>
    </>
  );
}
