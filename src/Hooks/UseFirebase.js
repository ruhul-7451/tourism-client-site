import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setErrorMessage(error);
                console.log(errorMessage);
            }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser({})
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        setUser,
        isLoading,
        signInUsingGoogle,
        setIsLoading,
        logOut
    }
}
export default useFirebase;