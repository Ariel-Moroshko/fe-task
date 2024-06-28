import { mobileSheetContext } from "@/contexts/MobileSheetContext";
import { useContext } from "react";

function useMobileSheetContext() {
  const context = useContext(mobileSheetContext);
  if (!context) {
    throw new Error(
      "useMobileSheetContext must be used within a MobileSheetContextProvider",
    );
  }
  return context;
}

export default useMobileSheetContext;
