import './Home.css';
import { useState } from 'react';
import Axios from 'axios';

function PostJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [contactDetails, setContactDetails] = useState("");

  const addJob = () => {
    Axios.post('http://localhost:5000/createJob', {
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      requirements: requirements,
      employeeType: employeeType,
      salary: salary,
      benefits: benefits,
      companyName: companyName,
      location: location,
      contactDetails: contactDetails,
    }).then(() => {
      console.log("success");
      alert('Job posted successfully!');
    }).catch((error) => {
      console.error('Error posting job:', error);
      alert('Failed to post job.');
    });
  };

  return (
    <div className='pj'>
      <div className="postjob">
        <h1>Post Job</h1>
        <div className="Information">
          <label>Job Title</label>
          <input type="text"
            onChange={(event) => {
              setJobTitle(event.target.value);
            }}
          />
          <label>Job Description</label>
          <input type="text"
            onChange={(event) => {
              setJobDescription(event.target.value);
            }}
          />
          <label>Requirements</label>
          <input type="text"
            onChange={(event) => {
              setRequirements(event.target.value);
            }}
          />
          <label>Employee Type</label>
          <input type="text"
            onChange={(event) => {
              setEmployeeType(event.target.value);
            }}
          />
          <label>Salary</label>
          <input type="text"
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
          <label>Benefits</label>
          <input type="text"
            onChange={(event) => {
              setBenefits(event.target.value);
            }}
          />
          <label>Company Name</label>
          <input type="text"
            onChange={(event) => {
              setCompanyName(event.target.value);
            }}
          />
          <label>Location</label>
          <input type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <label>Contact Details</label>
          <input type="text"
            onChange={(event) => {
              setContactDetails(event.target.value);
            }}
          />
          <button onClick={addJob}>Post Job</button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
