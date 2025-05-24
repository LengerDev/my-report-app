import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-white">
      <Navbar />
      {children}
    </header>
  );
}
