import React,  { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img src='/images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      {
        jobs.length === 0 ?(
          <p> Jobs are fetching ...</p>
        ) : (
          jobs.map (job => (
            <JobBoardComponent job={job} key={job.id} />
          ))
        )
      }
    </div>
  );
}

export default App;


//To Dos
// 1. study the design & JSON
// 2. Create the Job Board Component
// 3. Get the data from the JSON
// 4. Pass down the date tot eh JBC
// 5. Style it
// 6. Filter component
// 7. Filter the data

