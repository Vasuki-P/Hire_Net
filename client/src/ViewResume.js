import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10); // Number of jobs to display per page

  useEffect(() => {
    axios.get('http://localhost:5000/getJobs')
      .then(res => {
        setJobs(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const filteredJobs = jobs.filter(job =>
    job.Jobrole.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className='viewresume'>
      <h1>Applicant Details</h1>
      <input
        type="text"
        placeholder="Search by job role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="filter-input"
      />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Job Role</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job, index) => (
            <tr key={job.id}>
              <td>{indexOfFirstJob + index + 1}</td>
              <td>{job.Name}</td>
              <td>{job.Jobrole}</td>
              <td>{job.Email}</td>
              <td>{job.PhoneNumber}</td>
              <td>{job.Skills}</td>
              <td>{job.Experience}</td>
              <td><a href={job.Resume} target="_blank" rel="noopener noreferrer">View Resume</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>Prev</button>
        <span>{currentPage}</span>
        <button disabled={currentJobs.length < jobsPerPage} onClick={handleNextPage}>Next</button>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default JobsList;
