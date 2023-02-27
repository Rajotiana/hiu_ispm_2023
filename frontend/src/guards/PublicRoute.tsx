import { PropsWithChildren } from "react";

const PublicRoute = ({ children }: PropsWithChildren<any>) => {
  return <>{children}</>;
};

export default PublicRoute;
