import React from 'react'
import BreadCrumb from '../common components/BreadCrumb'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import GoogleMap from './GoogleMap'

function Contact() {
    return (
        <div>
            <BreadCrumb title="Contact Us"></BreadCrumb>
            <ContactInfo></ContactInfo>
            <GoogleMap></GoogleMap>
            <ContactForm></ContactForm>
        </div>
    )
}

export default Contact
