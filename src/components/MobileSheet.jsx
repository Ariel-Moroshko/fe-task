import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import FavoritesSideBar from "./FavoritesSideBar";
import useMobileSheetContext from "@/hooks/useMobileSheetContext";

export function MobileSheet() {
  const { open, setOpen } = useMobileSheetContext();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="absolute left-8 top-12 md:hidden">
          <button>
            <Menu />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-y-scroll border-r-0 bg-slate-900 text-slate-100"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center gap-4 bg-slate-900 px-4 py-4 text-xl">
          <FavoritesSideBar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
