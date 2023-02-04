import { createContext, useContext} from "react";

const AppStateContext = createContext({})

export function AppContextProvider({states, children}){

	return (
		<AppStateContext.Provider value={states}>
			{children}
		</AppStateContext.Provider>
	)
}

export const useAppContext = () => useContext(AppStateContext)