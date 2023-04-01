import React,{useEffect} from 'react';
import Aos from 'aos';
import Card from './Card';
import TeachingCurriculum from "../../Assets/TeachingCurriculum.jpg";
import ExtraCurricular from "../../Assets/ExtraCurricular.jpg";
import DigitalLib from "../../Assets/DigitalLabs.jpg";
import BestFaculty from "../../Assets/BestFaculty.jpg";
import Results from "../../Assets/Results.jpg";
const Services = () => {
    useEffect(()=>{
        Aos.init({
            duration:200
        });
    });
    const data = [
        {
            title : "Experienced Faculty",
            // desc : "At Value Tech, we provide the complete web development for the educational academics such as colleges and schools . It includes ...",
            img : BestFaculty
        },
        {
            title:"Better Results", 
            img : Results,
            // desc : "We develop the mobile apps for the schools and colleges to bring their entire system into online. Using our apps they can turn their institute ..."
        },
        {
            title : "Best Teaching Curriculum",
            img : TeachingCurriculum,
            // desc : "At Value Tech, we take care of your organization development and support. We help you to create modern posters , banners and logos. "
        },
        {
            title:"Highly Equipped Labs",
            img : DigitalLib,
            // desc : "Bringing every possible electronic gadget on to IOT is our vision. At Value Tech , we helps organization to monitor their parameters in cloud."
        }
    ]
  return (
    <div className="container services_ctn my-5">
        <div className='row  py-5 service_row_card'>
            <h3 className='text text-center text-muted my-5' data-aos = "fade-up">WHY CHOOSE OUR COLLEGE</h3>

                {
                    data.map(ele =>(
                        <>
                            <div className="col-lg-3 mt-5 col-11 col-sm-12 col-md-3 col-xl-3">
                            <Card obj = {ele} />
                            </div>
                        </>
                    ))
                }
        </div>
    </div>
  )
}

export default Services