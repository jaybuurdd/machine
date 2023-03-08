import React from 'react'
import logo from '../images/machinepro.png'

function Navbar () {

  return (
    <div>
      <nav class='shadow-lg navbar navbar-expand-lg' style={{backgroundColor: '#254190'}}>
        <div class='container-fluid'>
          <a class='navbar-brand' href='/'>
            <img src={logo} 
            width='40px'
            height='40px'
            />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
          <span class='navbar-toggler-icon' ></span>
          </button>

          <div
            class='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul class='navbar-nav' style={{paddingTop:'10px'}}>
                <li class='nav-item'>
                <a
                  class='nav-link tryout'
                  href='https://docs.google.com/forms/d/e/1FAIpQLScFRC5Jlv7_-kxtc_4HGPStuovRo5IS8798zokHcDrElw6mcQ/viewform?vc=0&c=0&w=1&flr=0'
                  style={{fontWeight:'bold'}}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Register! Girls Evaluation Open Gym
                </a>
              </li> 
              <li class='nav-item'>
                <a
                  class='nav-link disabled'
                  href='javscript:void(0)'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  MACHINE DMV Elite ⓒ 2023
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar