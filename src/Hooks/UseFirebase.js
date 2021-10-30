import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setErrorMessage(error);
                console.log(errorMessage);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser({})
        });
        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut

    }
}
export default useFirebase;