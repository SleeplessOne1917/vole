// @refresh reload
import "./root.css";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import { SessionProvider } from "@solid-auth/base/client";
import { trpc, queryClient, client } from "~/utils/trpc";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Vole</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <trpc.Provider client={client} queryClient={queryClient}>
          <SessionProvider>
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </SessionProvider>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
