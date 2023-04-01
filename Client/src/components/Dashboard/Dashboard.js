import { Card } from "antd";
import React from "react";
import styles from "./Dashboard.module.css";
import "./Dashboard.css";
// import cardHelper from "./Dashboard";


const Dashboard = () => {
 
  return (
    <>
      <div className={styles.main_ctn}>
        <div className={styles.left_ctn} >
          <ul className="nav d-block p-3 left_nav">
            <li className="nav nav-item py-1 my-3">General Info</li>
            <li className="nav nav-item  py-1 my-3">Edit Details</li>
            <li className="nav nav-item py-1 my-3">Your Banners</li>
            <li className="nav nav-item py-1 my-3">Your Photos</li>
            <li className="nav nav-item py-1 my-3">Students</li>
            <li className="nav nav-item py-1 my-3">Teaching Staff</li>
            <li className="nav nav-item py-1 my-3">Non Teaching Staff</li>
            <li className="nav nav-item py-1 my-3">Customize</li>
            <li className="nav nav-item py-1 my-3">Contact Us</li>
            <li className="nav nav-item py-1 my-3">Remove account</li>
          </ul>
        </div>
        <div className={styles.right_ctn}>
        <h3 className="text text-center mt-5">Welcome to your Dashboard</h3>

          <div className="container first_part">
            <p>General Info</p>
            <div className="row my-3 mx-1">
              <CardHelper title = "your college name" data = "sandeepani"/>
              <CardHelper title = "your contact number" data = "+91 9xxxx"/>
              <CardHelper  title = "your contact email" data = "sandeepani@edu.ac.in"/>
             
            </div>

            <div className="row mx-1">
                <CardHelper title="Events" data = "2"/>
                <CardHelper title = "Pictures" data = "30"/>
                <CardHelper title = "Banners" data = "3"/>
            </div>
          </div>

          <div className="container second_part">
            <div className="row my-3 mx-1">
              <CardHelper title="Students" data = "1000"/>
              <CardHelper title = "Teaching Staff" data = "100"/>
              <CardHelper title = "Non Teaching Staff" data = "30"/>
            </div>
            <div className="row my-3 mx-1">
              <CardHelper title = "Bills" data="10"/>
              <CardHelper title = "Labs" data = "3"/>
              <CardHelper title = "Maintenance" data = "some description"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CardHelper = ({title, data})=>{
  return(<>
   <div className="col-lg-4">
    <div className="card my-1 p-3">
      <div className="card-body">
        <div className="card-description">
          <p className="text text-success">{title}</p>
          <p>{data}</p>
        </div>

      </div>
    </div>
   </div>
  </>)
}
export default Dashboard;
