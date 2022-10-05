import React from 'react'
import Vector from '../assets/Vector.png'
import NewPyro from '../assets/NewPyro.png'
import Nav from '../assets/nav.svg'
import Button from '../assets/button.svg'
import Socials from '../assets/social.svg'


const Headandfoot = () => {
  return (
    <div>
        <img src={Vector} className='w-full absolute' alt="" />
        <img src={NewPyro} className='absolute bottom-0 right-0' alt="" />
        <img src={Nav} style={{position: 'absolute', left: '5.28%', right: '80.56%', top: '3.91%', bottom: '91.22%'}} alt="" />
        <button><img src={Button} className='connect' style={{position: 'absolute', width: '276px', height: '48px', left: '1300px', top:'5%'}} alt="" /> CONNECT WALLET</button>

        <div className="divider absolute bottom-20 h-[2px] w-[85%] ml-28">
        <p className='rights absolute mt-4'>Pyro Matic @ 2022 All rights reserved.</p> 
        <p className='powered absolute mt-10'>Powered by Pyro</p>
        <img className='absolute right-1 mt-4' src={Socials} alt="" />


        </div>

    </div>
  )
}

export default Headandfoot