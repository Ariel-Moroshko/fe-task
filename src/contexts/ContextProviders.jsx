import FavoritesContextProvider from "./FavoritesContextProvider";
import MobileSheetContextProvider from "./MobileSheetContext";

function ContextProviders({ children }) {
  return (
    <FavoritesContextProvider>
      <MobileSheetContextProvider>{children}</MobileSheetContextProvider>
    </FavoritesContextProvider>
  );
}

export default ContextProviders;
