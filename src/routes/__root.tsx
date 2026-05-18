import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The stars couldn't locate this page.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Saptarishis Astrology by Soniya Sharma | Vedic Astrologer in Greater Noida" },
      { name: "description", content: "Trusted Vedic astrologer Soniya Sharma — Kundli, marriage matching, career, vastu, numerology and tarot consultations in Greater Noida West, Ghaziabad." },
      { name: "author", content: "Saptarishis Astrology" },
      { property: "og:title", content: "Saptarishis Astrology by Soniya Sharma | Vedic Astrologer in Greater Noida" },
      { property: "og:description", content: "Trusted Vedic astrologer Soniya Sharma — Kundli, marriage matching, career, vastu, numerology and tarot consultations in Greater Noida West, Ghaziabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saptarishis Astrology by Soniya Sharma | Vedic Astrologer in Greater Noida" },
      { name: "twitter:description", content: "Trusted Vedic astrologer Soniya Sharma — Kundli, marriage matching, career, vastu, numerology and tarot consultations in Greater Noida West, Ghaziabad." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4a19c9b-c95f-403b-a8e0-8e9b990d5224/id-preview-d2958d59--478a0018-ed2a-4192-a73d-3437371cb9b9.lovable.app-1779095543335.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4a19c9b-c95f-403b-a8e0-8e9b990d5224/id-preview-d2958d59--478a0018-ed2a-4192-a73d-3437371cb9b9.lovable.app-1779095543335.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
