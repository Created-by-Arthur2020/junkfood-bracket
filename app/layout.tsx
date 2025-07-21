export const metadata = {
  title: "CXO Junkfood Bracket",
  description: "Vote for your favorite junk food!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
