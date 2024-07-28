import Nav from "../components/nav"

export const metadata = {
  title: {
    template: "%s | NY Times Best Sellers",
    default: "NY Times Best Sellers"
  },
  description: 'NC Study',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ width: "80%", margin: "auto", border: "1px solid #242424", padding: "20px", }}>
          {children}
        </main>
      </body>
    </html>
  )
}
