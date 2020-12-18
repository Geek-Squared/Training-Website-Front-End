import React from 'react';

import StudentCard from './StudentCard';
import DegreeCard from './DegreeCard';
import Header from './Header';
import Footer from './Footer';
import Students from './students.png'
import Degrees from './degrees.png';


function App() {
  return (
    <div className="">
      <Header />,
      <StudentCard img={Students} title="MyStudents" 
      text="Students who are currently enrolled in your pragrams"/>,
      <DegreeCard img={Degrees} title="MyDegrees"
        text="List of Your current degrees" btn="Go to Degrees"/>,
      <Footer />
    </div>
  );
}

export default App;
