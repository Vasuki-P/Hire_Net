import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Home.css';

function SearchJob() {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(8); // Number of jobs to display per page

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleViewClick = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    const filteredJobs = jobs.filter(job => {
        const jobTitleMatch = job.JobTitle.toLowerCase().includes(searchTerm.toLowerCase());
        const companyNameMatch = job.CompanyName.toLowerCase().includes(searchTerm.toLowerCase());
        const locationMatch = job.Location.toLowerCase().includes(searchTerm.toLowerCase());
        return jobTitleMatch || companyNameMatch || locationMatch;
    });

    // Pagination logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='searchjob'>
            <h1>Job Listings</h1>
            <input
                type="text"
                placeholder="Search by job title /company name/ Location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filter-input"
            />

            <div className="grid-container">
                {currentJobs.map((job, index) => (
                    <div key={job.id} className="grid-item">
                        <p><strong>Job Title:</strong> {job.JobTitle}</p>
                        <p><strong>Company Name:</strong> {job.CompanyName}</p>
                        <p><strong>Location:</strong> {job.Location}</p>
                        <button onClick={() => handleViewClick(job)}>View</button>
                    </div>
                ))}
            </div>

            <Modal 
                isOpen={selectedJob !== null}
                onRequestClose={handleCloseModal}
                contentLabel="Job Details"
                style={{
                    content: {
                    maxWidth: '600px', // Set the maximum width of the modal content
                    margin: '0 auto', // Center the modal horizontally
                    }
                }}
                >
                {selectedJob && (
                    <div className='dialog'>
                    <h2>Job Details</h2>
                    <p><strong>Job Title:</strong> {selectedJob.JobTitle}</p>
                    <p><strong>Job Description:</strong> {selectedJob.JobDescription}</p>
                    <p><strong>Company Name:</strong> {selectedJob.CompanyName}</p>
                    <p><strong>Requirements:</strong> {selectedJob.Requirements}</p>
                    <p><strong>Employee Type:</strong> {selectedJob.EmployeeType}</p>
                    <p><strong>Salary:</strong> {selectedJob.Salary}</p>
                    <p><strong>Benefits:</strong> {selectedJob.Benefits}</p>
                    <p><strong>Location:</strong> {selectedJob.Location}</p>
                    <p><strong>Contact Details:</strong> {selectedJob.ContactDetails}</p>
                    {/* Add additional fields here */}
                    <button onClick={handleCloseModal}>Close</button>
                    </div>
                )}
            </Modal>


            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
}

export default SearchJob;
