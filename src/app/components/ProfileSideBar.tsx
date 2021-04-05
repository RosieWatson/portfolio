import React from 'react'

interface ProfileSideBarProps {
  setShowSideBar: Function
}

const ProfileSideBar = ({ setShowSideBar }: ProfileSideBarProps) => (
  <div className='side-bar-container'>
    <div className='side-bar'>
      <div>
        <img
          src={require('../../assets/profile.png')}
          className='profile-photo mb-4'
        />
        <a href='mailto:rosiewatson@me.com' target='_blank' rel='noopener'>
          <h1 className='mb-4'>ROSIE WATSON</h1>
        </a>
        <h4>Full Stack Developer</h4>
      </div>
      <button className='btn btn-primary' onClick={() => setShowSideBar(false)}>
        Hide my face
      </button>
    </div>
  </div>
)

export default ProfileSideBar
