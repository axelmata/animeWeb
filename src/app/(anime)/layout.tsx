import { Sidebar } from "@/components/ui";
import { TopMenu } from "@/components/ui/header/TopMenu";


export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">
      <div className="px-0 ">
        <TopMenu/>
        <Sidebar/>
        { children }
      </div>
    </main>
  );
}