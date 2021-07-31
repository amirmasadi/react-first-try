import React from 'react'
import SecHeading from '../components/SecHeading'
import ProjectPageSec from '../components/ProjectPageSec'

export default function Progects() {
    return (
        <section className="container">
            <SecHeading h3Text="پروژه ها" subText="برخی از نمونه کار ها" headingPos="text-center" />
            <ProjectPageSec />
        </section>
    )
}
