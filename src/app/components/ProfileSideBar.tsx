import React from 'react'

interface ProfileSideBarProps {
  setShowSideBar: Function
}

const ProfileSideBar = ({ setShowSideBar }: ProfileSideBarProps) => (
  <div className='sideBar'>
    <a href='mailto:rosiewatson@me.com' target='_blank' rel='noopener'>
      <h1 className='mb-3'>
        ROSIE WATSON
        <i className='fas fa-envelope fa-xs' />
      </h1>
    </a>
    <h4>Full Stack Developer</h4>
    <button onClick={() => setShowSideBar(false)}>hide me</button>
  </div>
)

export default ProfileSideBar
