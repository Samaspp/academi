'use client'
import { useState, useEffect } from "react";
import { db } from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Head from 'next/head';
import Calender from './Calender';
import Navbar from "../components/navbar/Navbar"
import Sidebar from './sidebar/Sidebar';
import {auth} from "../../../firebase.config"

const Dashboard = ({student}) => {
  
  return (
    <div>
      <Navbar/>
      <Head>
        <title>Student Dashboard</title>
      </Head>

      <header>
        <h1 className='text-center mt-10'>Student Dashboard</h1>
      </header>
      
      <main className='md:flex '>
      <Sidebar/>
      <section class="w-4/5 float-right h-60 rounded-lg bg-blue-300 px-6 py-10 ml-20  mr-40 mb-20 mt-10   shadow-xl ring-1 ring-slate-900/5 ">
      {student ? (
             <div>
       <h3 class="text-base font-medium tracking-tight text-slate-900 ">Welcome {student.username} </h3>
      

          <p className="mt-2 text-sm text-slate-500 ">Class: CS6A </p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
       <p className="mt-2 text-sm text-slate-500 " ></p>
        <button
          id="performance"
          class="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
          onClick="">See your performance</button>
      </section>
      <section className="p-4 pr-4 mr-4 h-11 ">
          <h2></h2>
          <Calender />
        </section>
      </main>
      <main className="flex">
        <section className="w-3/5 p-4">
          <h2>Academic Analysis</h2>
      
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
