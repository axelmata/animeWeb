import { TopMenu } from "@/components/ui/header/TopMenu";


export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-0 ">
        <TopMenu/>
        { children }
      </div>
    </main>
  );
}