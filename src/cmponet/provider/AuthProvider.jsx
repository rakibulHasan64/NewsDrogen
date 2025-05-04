import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../auth/firevse.config"; // ✅ Ensure path is correct

export const AuthContext = createContext();

function AuthProvider({ children }) {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };


   const siginIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   };


   const updatedUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
   };
   const logOut = () => {
      return signOut(auth)
   }


   useEffect(() => {
      const unscrive = onAuthStateChanged(auth, (currentUser) => {
         
         setUser(currentUser);
         setLoading(false);
      });

      return () => {
         unscrive();
      }
         
   },[])

   const userinfo = {
      loading,
      createUser,
      siginIn,
      user,
      logOut,
      setLoading,
      updatedUser
   };

   return (
      <AuthContext.Provider value={userinfo}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;
