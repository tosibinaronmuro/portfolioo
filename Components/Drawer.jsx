import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';
import styles from "../styles/Home.module.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Link from 'next/link'

const DrawerComp = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space className='fixed right-0 top-0 m-3'>
      
        {/* <Button type="primary" >
          Open
        </Button> */}
        <div onClick={showDrawer}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </Space>
      <Drawer
        title="Menu"
        placement={placement}
        closable={true}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
         <div className={styles.drawer}  >
{/* home */}
<Link href="/#home"   scroll={false}><div onClick={onClose} className='bg-black flex text-white rounded-full w-auto h-auto border shadow-md  my-5 p-2  justify-start'>
<svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg><span className='ml-5'>HOME</span>
</div></Link>

{/* about */}

<Link href="/#about"   scroll={true}><div onClick={onClose} className='bg-black flex text-white rounded-full w-auto h-auto border shadow-md  my-5 p-2  justify-start'>
<svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span className='ml-5'>ABOUT ME</span>
</div></Link>

{/* SKILLS */}
<Link href="/#skills"   scroll={true}><div onClick={onClose}  className='bg-black flex text-white rounded-full w-auto h-auto border shadow-md  my-5 p-2  justify-start'>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>  <span className='ml-5'>SKILLS</span>
</div></Link> 
{/* projects */}

<Link href="/#projects"   scroll={true}><div onClick={onClose} className='bg-black flex text-white rounded-full w-auto h-auto border shadow-md  my-5 p-2  justify-start'>
<svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><span className='ml-5'>PROJECTS</span>
</div></Link>
{/* contact */}

<Link href="/#contact"   scroll={true}><div onClick={onClose} className='bg-black flex text-white rounded-full w-auto h-auto border shadow-md  my-5 p-2  justify-start'>
<svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span className='ml-5'>CONTACT</span>
</div></Link>
 

</div>
      </Drawer>
    </>
  );
};

export default DrawerComp;

