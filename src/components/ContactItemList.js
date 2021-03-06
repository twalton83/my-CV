import React, { useContext } from "react"
import styled from "styled-components"
import { ReactComponent as Email } from "../assets/email-24px.svg"
import { ReactComponent as Phone } from "../assets/smartphone-24px.svg"
import { ReactComponent as Address } from "../assets/location_on-24px.svg"
import { ReactComponent as Website } from "../assets/language-24px.svg"
import { ReactComponent as Country } from "../assets/flag-24px.svg"
import { ReactComponent as City } from "../assets/domain-24px.svg"
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg"
import { ReactComponent as StackOverflow } from "../assets/stack-overflow.svg"
import { ReactComponent as Github } from "../assets/github-logo.svg"
import { ModalContext } from "./context"

const List = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 1rem;
  height: auto;
`

const ContactItem = styled.div`
  line-height: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  pointer-events: text;
  height: auto;
  svg {
    height: 24px;
    width: auto;
    margin-right: 0.5rem;
  }
`

export default function ContactItemList({ items }) {
  const { contact, toggleModal } = useContext(ModalContext)
  const icons = {
    github: <Github />,
    email: <Email />,
    phone: <Phone />,
    address: <Address />,
    website: <Website />,
    country: <Country />,
    city: <City />,
    linkedin: <LinkedIn />,
    stack: <StackOverflow />,
  }

  const generateItems = () => {
    const arr = []
    for (const item in items) {
      if (items[item] !== "") {
        arr.push({
          svg: icons[`${item}`],
          value: items[item],
        })
      }
    }
    return arr
  }
  return (
    <List data-modal="contact" onClick={toggleModal}>
      {generateItems().map((item) => (
        <ContactItem
          onClick={toggleModal}
          data-modal="contact"
          key={item.value}
        >
          {item.svg}
          <p data-modal="contact"> {item.value}</p>
        </ContactItem>
      ))}
    </List>
  )
}
