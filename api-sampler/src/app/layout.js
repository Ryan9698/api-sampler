import "./globals.css";

export const metadata = {
  title: "API Playground",
  description: "Basic project for testing APIs and a learning environment.",
  author: "Ryan Caltabiano",
  contact: "rcaltabiano@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
