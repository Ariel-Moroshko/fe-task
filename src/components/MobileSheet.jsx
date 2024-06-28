import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import FavoritesSideBar from "./FavoritesSideBar";

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="absolute left-8 top-12 md:hidden">
          <button>
            <Menu />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-r-0 bg-slate-900 text-slate-100"
      >
        <div className="basis-60 flex-col items-center bg-slate-900 py-4 text-xl">
          <FavoritesSideBar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
