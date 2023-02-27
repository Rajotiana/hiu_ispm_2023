import { PropsWithChildren, createContext, useState } from "react";

export interface IUser {
  id: string;
  email: string;
}

export const AuthContext = createContext<{
  user: null | IUser;
  login: (email: string, password: string) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<null | IUser>(null);

  const login = (email: string, password: string) => {
    console.log({
      email,
      password,
    });
    setUser({
      id: "a",
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
