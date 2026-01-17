import '../src/styles/globals.css'

export const metadata = {
  title: 'StarLounge - Celebrity Metaverse',
  description: 'Interactive digital planets for celebrities and fans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
