import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "@/firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/authSlice";

export default function AuthProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email ?? null,
            displayName: user.displayName ?? null,
            photoURL: user.photoURL ?? null,
            yourName: null,
            surname: null,
            birthDate: null,
            address: null,
            phoneNumber: null,
            gender: null,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
}
