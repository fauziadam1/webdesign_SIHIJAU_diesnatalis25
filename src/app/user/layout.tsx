import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
