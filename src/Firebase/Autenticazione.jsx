import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (pending) {
    return (<div>Loading...</div>); // Or a loading spinner
  }

  return currentUser ? children : <Navigate to="/login" />;
}
