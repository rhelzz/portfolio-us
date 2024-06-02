import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Section1 from './component/section-1';
import Section2 from './component/section-2';
import Slicer1 from './component/slicer-1';
import Slicer2 from './component/slicer-2';

const App = () => {

    return (
        <div className="bg-[#324932] font-poppins">
            {/* Navbar */}
            <Navbar />

            {/* First Section */}
            <Section1 />

            {/* First Slicer */}
            <Slicer1 />

            {/* Second Section */}
            <Section2 />

            {/* Second Slicer */}
            <Slicer2 />

        </div>
    );
}

export default App;
