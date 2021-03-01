import React, { useState, useContext } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import ProjectModal from "./ProjectModal"
import { Header, Button } from "./StyledUtils"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ModalContext } from "./context"

const ProjectHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
`

export default function Projects({ addProj, projects }) {
  const [displayAdd, setDisplayAdd] = useState(true)
  const [displayActions, setDisplayActions] = useState(true)
  const { project, toggleModal } = useContext(ModalContext)
  const [exp, setExp] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    currentTask: "",
    tasks: [],
  })

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    })
  }
  // implement enter press to add task
  const handleSubmit = (e) => {
    e.persist()
    if (e.key === "Enter" || e.type === "blur") {
      if (exp.currentTask === "") {
        setDisplayAdd(false)
        return
      }
      setExp({
        ...exp,
        currentTask: "",
        tasks: [...exp.tasks, exp.currentTask],
      })
      setDisplayAdd(false)
    }
  }

  const handleDelete = (e) => {
    console.log("delete")
  }

  const handleEditClick = (e) => {
    console.log("edit")
  }

  return (
    <div>
      <Header color="#284B63">PROJECTS</Header>
      {projects.map((proj) => (
        <div>
          <ProjectHeader>{proj.name.toUpperCase()}</ProjectHeader>
          {proj.startDate && (
            <Dates>
              {format(proj.startDate, "P")} -
              {format(proj.endDate, "P") || "Current"}
            </Dates>
          )}
          {proj.tasks.length && (
            <Tasks>
              {proj.tasks.map((t) => (
                <li>{t}</li>
              ))}
            </Tasks>
          )}
          {displayActions && (
            <div>
              <Delete
                data-eduid={proj.id}
                style={{ fill: "red" }}
                onClick={handleDelete}
              />
              <Edit
                data-eduid={proj.id}
                data-modal="work"
                onClick={handleEditClick}
              />
            </div>
          )}
        </div>
      ))}
      <Button data-modal="project" onClick={toggleModal}>
        ADD A PROJECT
      </Button>
      {project && <ProjectModal addProj={addProj} />}
    </div>
  )
}
