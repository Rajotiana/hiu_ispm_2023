import { PropsWithChildren } from "react";

const Page = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
};

export default Page;
