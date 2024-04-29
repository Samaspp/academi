import Head from 'next/head';
import Calender from './Calender';

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Student Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className='text-center mt-10'>Student Dashboard</h1>
      </header>
      <main className='md:flex '>
      <section class="w-4/5 float-right h-60 rounded-lg bg-blue-300 px-6 py-10 ml-20  mr-10 mb-20 mt-10   shadow-xl ring-1 ring-slate-900/5 ">
       <h3 class="text-base font-medium tracking-tight text-slate-900 ">This is a text element.</h3>
       <p class="mt-2 text-sm text-slate-500 " >This is an even longer p tag element</p>
        <button
          id="performance"
          class="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
          onclick="">See your performance</button>
      </section>
      <section className="  p-4 ">
          <h2></h2>
          <Calender />
        </section>
      </main>
      <main className="flex">
        <section className="w-3/4 p-4">
          <h2>Academic Analysis</h2>
      
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
