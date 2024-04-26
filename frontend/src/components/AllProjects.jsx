import React from 'react';
import CheckList_AllProjects from './CheckList_AllProjects';
import { SideNavbar } from './SideNavbar';

const AllProjects = () => {
  return (
    <div>
      <div className='flex justify-start'>
        <div style={{ width: '15%' }}>
          <SideNavbar />
        </div>
        <div style={{ width: '85%' }}>
          <CheckList_AllProjects />
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
