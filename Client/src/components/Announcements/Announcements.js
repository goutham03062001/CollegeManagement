import React,{useEffect} from 'react';
import Aos from 'aos';
import "./Announcements.css";
const Announcements = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000,
            offset:200
        })
    },[])
  return (
    <>
        <h3 className="text text-center text-muted my-5" data-aos="fade-up">Recent Announcements</h3>
        <div className="container my-5 ">
        <div className="row py-3 my-5">
            <div className="col-lg-5 col-sm-12 col-md-6 col-xs-12 h-100 card my-5" data-aos="fade-up">
                <h5 className="text text-center py-2">Academic</h5>
                <div className="card-body my-3 py-5">
                    <div className="card-content text-center">
                        <a href="#!" className="nav nav-link">Regular exam 2023 Announcement</a>
                        <a href="#!" className="nav nav-link">Supplementary 2022 II, IV, VIth sem </a>
                        <a href="#!" className="nav nav-link">Regular Fee Payment</a>
                        <a href="#!" className="nav nav-link">Exam dates for II, IV, VI sem 2023</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-1 col-12 col-md-1 divider">
                
            </div>
            <div className="col-lg-5 col-sm-12 col-md-6 col-xs-12 card my-5" data-aos="fade-up">
                <h5 className="text text-center py-2">Non Academic</h5>
                <div className="card-body my-3 py-5">
                    <div className="card-content text-center">
                        <a className="nav nav-link" href="#!">Cultural Fest @2k23</a>
                        <a className="nav nav-link" href="#!">National Youth Day</a>
                        <a className="nav nav-link" href="#!">Ganesh Immerssion @2k22</a>
                        <a className="nav nav-link" href="#!">Student Achievements</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Announcements