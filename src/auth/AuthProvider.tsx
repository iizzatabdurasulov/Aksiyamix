
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
            email: user.email ?? "",
            displayName: user.displayName ?? "",
            photoURL: user.photoURL ?? "",
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
