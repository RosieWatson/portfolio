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
          className='profile-photo'
        />
        <a href='mailto:rosiewatson@me.com' target='_blank' rel='noopener'>
          <h1 className='mb-3'>
            ROSIE WATSON
            <i className='fas fa-envelope fa-xs' />
          </h1>
        </a>
        <h4>Full Stack Developer</h4>
      </div>
      <button className='btn btn-primary' onClick={() => setShowSideBar(false)}>
        Hide me
        {/* Different text for mobile vs desktop? */}
      </button>
    </div>
  </div>
)

export default ProfileSideBar
