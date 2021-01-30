import React, { useState } from 'react'
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeContact from './ResumeContact';
import ResumeBody from './ResumeBody';


const ResumeSheet = styled.section`
display: flex;
flex-direction: column;
min-height: 80vh;
max-height: 3300px;
max-width: 2550px;
height: 90vh;
width: 70vw;
border: 1px solid black;
background-color: white;
padding: 1rem;
margin-bottom: 2rem;
`

export default function MyDocument() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    title: "Professional Title",
    pitch: "A short and engaging pitch about yourself."
  });
  const [contactInfo, setContactInfo] = useState({
    email: "",
    country:  "",
    city:  "",
    address: "",
    phone: "",
    website: "",
    stack : "",
    linkedin: "",
    github: ""
  });

  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handlePersonalInput = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.dataset.id] : e.target.value
    })
  }

  const handleContactInfo = (e) => {
    const contact = contactInfo[e.target.name]
    setContactInfo({...contactInfo, 
      [e.target.name] : e.target.value
    })
  }
  
  const handleModalShow = (e) => {
    setModalShow(!modalShow)
  }
  
  return (
    <ResumeSheet>
      <ResumeHeader personalInfo = { personalInfo } handlePersonalInput = { handlePersonalInput } />
      <ResumeContact displayModal = { modalShow } handleModal = { handleModalShow } contactItems = { contactInfo } handleContactInfo = { handleContactInfo } />
      <ResumeBody skills = { skills }  />

    </ResumeSheet>
  )
}