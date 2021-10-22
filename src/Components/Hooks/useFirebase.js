import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile , GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    initializeAuthentication();

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const handlePasswordSignup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful")
          }).catch((error) => {
            setError(error.message)
            console.log(error.message);
          });
          
    }

    const handlePasswordSignin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

         
            
    

    useEffect(() => {
        const unsubs = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
                console.log(user);
            }else{
                setUser(null)
            }
        })

        return unsubs;
    }, [])

    return {
        handlePasswordSignup,
        handlePasswordSignin,
        handleSignOut,
        user,
        error,
        updateProfile,
        auth,
        signInUsingGoogle,
        setLoading,
        setError
    }


};

export default useFirebase;
