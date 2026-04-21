import AuthNavigation from "@/components/AuthNavigation/AuthNavigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ul>
          <AuthNavigation />
        </ul>
        {children}
      </body>
    </html>
  );
}