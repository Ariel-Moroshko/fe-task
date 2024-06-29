import { createContext, useState } from "react";

export const mobileSheetContext = createContext(null);

function MobileSheetContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <mobileSheetContext.Provider value={{ open, setOpen }}>
      {children}
    </mobileSheetContext.Provider>
  );
}

export default MobileSheetContextProvider;
