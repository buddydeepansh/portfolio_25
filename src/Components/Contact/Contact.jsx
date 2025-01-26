import React from "react"
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined"
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import "./Contact.less"

const Contact = () => {
  return (
    <div className="ContactRoot">
      <p className="sectioHeading">Any Questions?</p>
      <p className="sectioSubHeading">Contact me</p>
      <div className="contactwrapper">
        <a href="tel:+917723032150">
          <PermPhoneMsgOutlinedIcon fontSize="large" />
          <span>+91 7723032150</span>
        </a>
        <a href="mailto:99.deepanshagrawal@gmail.com">
          <MarkEmailReadOutlinedIcon fontSize="large" />
          <span>99.deepanshagrawal@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/deepansh-agrawal-b536421b0/" target="_blank">
          <LinkedInIcon fontSize="large" />
          <span>LinkedIn</span>
        </a>
        <a href="https://wa.me/7723032150" target="_blank">
          <WhatsAppIcon fontSize="large" />
          <span>Whatsapp</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
