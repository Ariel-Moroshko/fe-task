import { catchAttemptsContext } from "@/contexts/CatchAttemptsContextProvider";
import { useContext } from "react";

function useCatchAttemptsContext() {
  const context = useContext(catchAttemptsContext);
  if (!context) {
    throw new Error(
      "useCatchAttemptsContext must be used within a CatchAttemptsContextProvider",
    );
  }
  return context;
}

export default useCatchAttemptsContext;
