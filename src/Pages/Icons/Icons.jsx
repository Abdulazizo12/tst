import React from 'react'
import './Icons.css'
import { RiLayoutTopLine } from "react-icons/ri";
import { RiPageSeparator } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { IoMdColorFill } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineAnimation } from "react-icons/md";
import { RiFontSizeAi } from "react-icons/ri"
import { PiFigmaLogo } from "react-icons/pi";
import { PiDevicesBold } from "react-icons/pi";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaRegFileCode } from "react-icons/fa";
import { VscRefresh } from "react-icons/vsc";
import { TbHeadsetFilled } from "react-icons/tb";
import { SlDocs } from "react-icons/sl";

function Icons() {
  return (
    <div>
      <div className="kattaota">
        <div className='chap'>
          <h3 >Feature highlights</h3>
          <h1 >Have everything <br /> you need</h1>
          <br /><br />
          <h3>Let's see what makes our theme super powerful <br /> and user-friendly!</h3>

        </div>
        <div className='ong'>
          <div className="a1"><div><RiLayoutTopLine /><br /> 5 Prebuilt websites
          </div><div><RiPageSeparator /><br /> 60+ Demo page</div>
            <div><VscSettings /><br />Easy to customize</div>
          </div>
          <br />
          <div className="a2"><div><IoMdColorFill /><br />Color presets </div><div><MdOutlineDarkMode /><br />Dark mode</div><div> <MdOutlineAnimation /><br />
            Awesome animation</div></div>
          <br />
          <div className="a3"><div><RiFontSizeAi /><br /> Google fonts</div> <div><PiFigmaLogo /><br />Figma design </div> <div><PiDevicesBold /> <br />Fully responsive</div></div>
          <br />
          <div className="a44"><div><BsMenuButtonFill /><br />Mega menu </div> <div><FaRegFileCode /><br /> Clean markup </div><div><VscRefresh /><br /> Free updates</div></div>
          <br />
          <div className="a5"><div><TbHeadsetFilled /><br />Fast support </div><div><SlDocs /><br />Well documented</div></div>
          <br />
        </div>




      </div>
    </div>
  )
}

export default Icons;