import Aurora from "@/components/Aurora";
import GlassNav from "@/components/GlassNav";

/** Shared page shell: dark canvas, aurora backdrop, floating glass nav. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site">
      <Aurora />
      <GlassNav />
      {children}
    </main>
  );
}
