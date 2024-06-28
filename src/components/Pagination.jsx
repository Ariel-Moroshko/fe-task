import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ hasNextPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => setSearchParams({ page: page - 1 })}
        className="flex min-w-32 items-center gap-2 bg-slate-800 hover:bg-slate-600"
        disabled={page === 1}
      >
        <ChevronLeft size={18} />
        Previous
      </Button>
      <div>{page}</div>
      <Button
        onClick={() => setSearchParams({ page: page + 1 })}
        className="flex min-w-32 items-center gap-2 bg-slate-800 hover:bg-slate-600"
        disabled={hasNextPage}
      >
        Next
        <ChevronRight size={18} />
      </Button>
    </div>
  );
}

export default Pagination;
