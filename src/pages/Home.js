import React from 'react'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import ProjectSwiper from '../components/ProjectSwiper'
import Showcase from '../components/Showcase'
import HomeTestImonials from '../components/HomeTestImonials'

export default function Home() {
    return (
        <>
        <Showcase />
        <HomeAbout />
        <HomeServices />
        <ProjectSwiper />
        <HomeTestImonials />
        </>
    )
}
