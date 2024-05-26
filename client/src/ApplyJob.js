import React, { useState } from 'react';
import Axios from 'axios';

function ApplyJob() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState("");
  const [jobRole, setJobRole] = useState("");

  const applyForJob = () => {
    Axios.post('http://localhost:5000/applyJob', {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      skills: skills,
      experience: experience,
      resume: resume,
      jobRole: jobRole
    })
    .then(() => {
      console.log("success");
      alert('Applied for job successfully!');
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSkills("");
      setExperience("");
      setResume("");
      setJobRole("");
    })
    .catch((error) => {
      console.error('Error applying for job:', error);
      alert('Failed to apply for job.');
    });
  };

  return (
    <div className='pj'>
      <div className="postjob">
        <h1>Apply for Job</h1>
        <div className="Information">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Job Role:</label>
          <input
            type='text'
            value={jobRole}
            onChange={(event) => setJobRole(event.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <label>Skills:</label>
          <input
            type="text"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
          />
          <label>Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          />
          <label>Resume:</label>
          <input
            type='text'
            placeholder='Enter the drive link of resume'
            value={resume}
            onChange={(event) => setResume(event.target.value)}
          />
          
          <button onClick={applyForJob}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default ApplyJob;
