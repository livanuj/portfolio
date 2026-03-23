import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
