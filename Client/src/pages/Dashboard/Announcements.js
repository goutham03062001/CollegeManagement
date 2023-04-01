import React, { useState } from "react";
import Classes from "./Announcements.module.css";
import { Button, Modal, Input } from "antd";
import { Button as MaterialButton } from "@mui/material";
import {AchievementComponent,ExamsComponent} from "./Helper";


const Announcements = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [achievementOpen, setAchievementOpen] = useState(false);

  //
  // console.log(examTitle,startDate,endDate,description);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="card">
            <div className={`{Classes.card} card-body`}>
              {/* <div className={Classes.top_style}></div> */}
              <p className="text text-center">Academic Announcements</p>
              <div className={Classes.card_footer_wrapper}>
                <button
                  className={Classes.btn_announcement}
                  onClick={() => {
                    setOpen(true);
                    setTitle("Academic Announcements");
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <p className="text text-center">Non-Academic Announcements</p>
              <div className={Classes.card_footer_wrapper}>
                <button
                  className={Classes.btn_announcement}
                  onClick={() => {
                    setOpen(true);
                    setTitle("Non-Academic Announcement");
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* This Modal is for achievements */}

        {open && (
          <div>
            <Modal
              open={open}
              title={title}
              onCancel={() => {
                setOpen(false);
                setAnnouncement("");
              }}
              footer={[
                <Button
                  key="back"
                  onClick={() => {
                    setOpen(false);
                    setAnnouncement("");
                  }}
                >
                  Close
                </Button>,
              ]}
            >
              <p>What is your announcement about?</p>
              <br />
              <div className="d-flex flex-row justify-content-around py-5">
                <MaterialButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setAnnouncement("Exams");
                    setAchievementOpen(true);
                    console.log("Clicked on Exams ");
                  }}
                >
                  Exams
                </MaterialButton>

                <MaterialButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setAnnouncement("Fee Payment");
                    setAchievementOpen(true);
                  }}
                >
                  Fee Payment
                </MaterialButton>

                <MaterialButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setAnnouncement("Achievements");
                    setAchievementOpen(true);
                  }}
                >
                  Achievements
                </MaterialButton>
              </div>

              {announcement === "Achievements" ? (
                <AchievementComponent />
              ) : (
                <>{announcement === "Exams" ? <ExamsComponent/> : <></>}</>
              )}
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
