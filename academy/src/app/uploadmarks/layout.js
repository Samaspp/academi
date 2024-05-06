// components/Layout.js
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Teacher Dashboard</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;