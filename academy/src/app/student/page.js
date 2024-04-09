import Head from 'next/head';
import TodoList from './TodoList'

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Student Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Student Dashboard</h1>
      </header>

      <main className="flex">
        <section className="w-3/4 p-4">
          <h2>Academic Analysis</h2>
      
        </section>

        <section className="w-1/4 p-4">
          <h2>Todo List</h2>
          <TodoList />
        </section>
      </main>

      
    </div>
  );
};

export default Dashboard;
