// layout.js
import "./globals.css";

export const metadata = {
  title: "Consol Cargo",
  description: "Consolidation, clearing & forwarding",
  metadataBase: new URL("https://consolcargo.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/images/open-graph.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center relative scroll-smooth">
        {children}
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="12"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
