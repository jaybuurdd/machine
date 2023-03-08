import React, { useEffect } from 'react'
import intro from '../videos/MACHINE-Combustion-Logo.mp4'
import styled, { keyframes } from 'styled-components'

import TryoutSlider from '../components/TryoutSlider'
import ImageSlider from '../components/ImageSlider'

const tickerAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`

function Home () {
  // autoscroll to news section
  React.useEffect(() => {
    window.location.hash = '#section-2'
  }, [])

  return (
  
      <div id='section-1' class='shadow-lg row '>
        <ImageSlider />

      <div class='shadow-lg mb-50 row' style={{ backgroundColor: '#B41C32' }}>
        <NewsTicker>
          <NewsList>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
            <NewsItem>NEWS</NewsItem>
          </NewsList>
        </NewsTicker>
      </div>
      <div id='section-2' class='mb-50 pt-50 row'>
        <TryoutSlider />
      </div>
    </div>
  )
}

const NewsTicker = styled.div`
  overflow: hidden;
  height: 30px;
`

const NewsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  white-space: nowrap;
  animation: ${tickerAnimation} 100s linear infinite;
`

const NewsItem = styled.li`
  display: inline-block;
  margin-right: 100px;
  font-weight: bold;
  color: white;
`

export default Home
