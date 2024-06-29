import CatchAttemptsContextProvider from "./CatchAttemptsContextProvider";
import FavoritesContextProvider from "./FavoritesContextProvider";
import MobileSheetContextProvider from "./MobileSheetContext";

function ContextProviders({ children }) {
  return (
    <FavoritesContextProvider>
      <CatchAttemptsContextProvider>
        <MobileSheetContextProvider>{children}</MobileSheetContextProvider>
      </CatchAttemptsContextProvider>
    </FavoritesContextProvider>
  );
}

export default ContextProviders;
