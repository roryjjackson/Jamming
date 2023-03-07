import React from 'react';
import './Commitee.css';

class Committee extends React.Component {
  render() {
    let members = [ {nickname: "The Ginger One", name: "Louisa Abbott", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666112213/zoe4_eqjnhe.jpg)"},
                    {nickname: "The Best Man", name: "Allen Butler", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668424862/allen-zoeandcam_pqtgyg.jpg)"},
                    {nickname: "The Geordie", name: "Ruby Gullon", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666112213/zoe6_zaw9zf.jpg)"},
                    {nickname: "The Brother", name: "Iain Addleton", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666713252/iain_zoe_and_cam_z0wutt.jpg)"},
                    {nickname: "Twinny", name: "Alicia Hudson", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666166533/alicia_z6bkdd.jpg)"},
                    {nickname: "The Semi-Hot One", name: "Henry Faber", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668424478/WhatsApp_Image_2022-11-12_at_7.51.16_PM_psu7rj.jpg)"},
                    {nickname: "Little Sis", name: "Orla Jackson", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1669751716/orla_zoeandcam_m8eghc.jpg)"},
                    {nickname: "The Semi-Athletic One", name: "Jay Favaro", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666705917/Jay_Favaro_zoeandcam_t02qsn.jpg)"},
                    {nickname: "Lord Maz", name: "Mairead Kempthorne", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666112213/zoe5_d0hcqx.jpg)"},
                    {nickname: "The Semi-Large One", name: "Matthew Farkas", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668424478/WhatsApp_Image_2022-11-12_at_7.51.35_PM_mqsefr.jpg)"},
                    {nickname: "Rozatron", name: "Rosie Littlejohns", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666112212/zoe1_mgsxq7.jpg)"},
                    {nickname: "The Hairy One", name: "Michael Hennessy", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668425007/WhatsApp_Image_2022-11-12_at_7.51.25_PM_s95hwo.jpg)"},
                    {nickname: "The American", name: "Hannah Snodgrass", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668433845/WhatsApp_Image_2022-10-20_at_5.00.58_AM_zeecty.jpg)"},
                    {nickname: "The Bro In Law", name: "Rory Jackson", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666713856/rory_zoeandcam_a29pkj_qdktj3.jpg)"},
                    {nickname: "The Foghorn", name: "Lesley Sonnen", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666166524/sonnen_ho7gzn.jpg)"},
                    {nickname: "Suds", name: "Daniel Sutherland", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668424478/WhatsApp_Image_2022-11-12_at_7.50.48_PM_akqwdg.jpg)"},
                    {nickname: "The Mancunian", name: "Bethan Ward", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1666166640/zoe3_ps4f4y.jpg)"},
                    {nickname: "The Very Tall One", name: "Nick Thrasher", img: "url(https://res.cloudinary.com/dfipoufmj/image/upload/v1668424478/WhatsApp_Image_2022-11-12_at_7.51.05_PM_naqhvz.jpg)"} ];

    return (
      <div className="grid-container">
        <div className="grid">
            {  members.map(member => {
                return (
                  <div className="avatars" style={{ backgroundImage: `${member.img}` }}>
                    <h5>{member.name}</h5>
                    <p>{member.nickname}</p>
                  </div>
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default Committee;
