'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { db, auth } from '../../../../firebase.config';
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";
import Dashboard from '../page';

const StudentDashboard =()=> {
  const { uid } = useParams();
  console.log('UID:', uid);

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          
        console.log(user)
          const q = query(collection(db, "users"), where("uid", "==", uid));
          getDocs(q)
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                setStudent(doc.data())
                console.log(doc.id, " => ", doc.data());
                
                console.log("hi")
                console.log(student)
              });
            })
            .catch((error) => {
              console.error("Error fetching data: ", error);
            });
        }
      });
      return unsubscribe;
    };


  fetchData();
}, [uid]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <Dashboard student={student} />

    </div>
  );
};

export default StudentDashboard;
