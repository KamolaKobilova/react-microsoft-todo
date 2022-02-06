import React, { Suspense,  lazy, createContext } from "react";
import { Routes, Route } from "react-router-dom";

export const AppContext = createContext({user: {}, token: '', updateUser: undefined})
// import Important from '../components/Important/Important';
// import ImporDetails from '../components/ImportantDetails/ImporDetails';
const Basic = lazy(()=> import("./Basic"))
const Header = lazy(()=> import("../components/Header/Header"));
const Sidebar = lazy(()=> import("../components/Sidebar/Sidebar"));
const SignUPP = lazy(()=> import("./Auth/SignUPP"));
const SignIn = lazy(()=> import("./Auth/SignIn"));
// import ToDos from '../components/Main/ToDos'

// import SignIn from './Auth/SignIn';

function App() {
  const user = JSON.parse(localStorage.user || '{}');
  const token = localStorage.token;
  // const [isLogged, setIsLogged] = useState(false);
  // const [userss, setUserss] = useState({
  //   id: null,
  //   userName: "",
  //   email: "",
  // });

  if (token && user?.id) {
    return (
      <AppContext.Provider value={{user, token}}>
         <Suspense fallback={<div>Loading...</div>}>
           <div>
           <Header  user={user}/>
           <Sidebar />
           <Basic />
          </div>
        </Suspense>
      </AppContext.Provider>
     

    );
  }
  return (
    
        <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/sign-up" element={<SignUPP />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<Basic />} />
        </Routes>
      </Suspense>
    </>
    
  );
}

export default App;
