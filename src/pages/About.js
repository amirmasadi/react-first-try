import React from 'react'
import AboutShowcase from '../components/AboutShowcase'
import AboutSkills from '../components/AboutSkills'
import DownloadCv from '../components/DownloadCv'

export default function About() {
    return (
        <section>
            <AboutShowcase />
            <AboutSkills />
            <br />
            <br />
            <br />
            <br />
            <br /> 
            <DownloadCv />
        </section>
    )
}
