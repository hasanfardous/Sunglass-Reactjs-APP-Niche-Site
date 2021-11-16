import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider, updateProfile, onAuthStateChanged } from "firebase/auth";
import firebasesAppInit from "../Components/Firebase/Initialize";

// Initialize the firebase app
firebasesAppInit();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    console.log('user ', user);

    // Registration function
    const doTheRegistration = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                // Set new user to state
                setUser(newUser);
                // Update user name on firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => { });
                setError('');
                setSuccess('User created successfully!');
                history.replace('/');
            })
            .catch((error) => {
                setSuccess('');
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Login function
    const doTheLogin = (email, password, history, redirect) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                // console.log('user ', user);
                history.replace(redirect);
                // setError('');
                // setSuccess('User logged in successfully!');
            })
            .catch((error) => {
                setSuccess('');
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Signin using google
    const signInPopupUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // Google signout
    const doTheSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser([]);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        auth,
        user,
        isLoading,
        error,
        success,
        doTheRegistration,
        doTheLogin,
        signInPopupUsingGoogle,
        doTheSignOut
    }
}

export default useFirebase;