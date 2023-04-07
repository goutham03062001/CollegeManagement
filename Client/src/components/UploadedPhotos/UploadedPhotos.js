import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { getAllExamPapers } from "../../actions/ExamPapers";
import { List, Typography } from 'antd';
import "./UploadedPhotos.css";
const UploadedPhotos = ({papers:examPapers,getAllExamPapers}) => {
    useEffect(()=>{
        getAllExamPapers();
      },[]);
  return (
    <div className="container">
    <h3 className='text text-center'>UploadedPhotos
        Total Uploaded : {examPapers&&examPapers.length}</h3>

        <div className='row'>
            {/* {examPapers && (
                <>
                    {
                    
                        examPapers.slice(0,6).map((p  aper)=>(
                            <div className='col-lg-4 my-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        Subject Name : {paper.subjectName}
                                    </div>
                                    <div className='img'>
                                        <img src={paper.imageUrl} className="img img-fluid" alt={paper.subjectName}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            )} */}
            <List
            size="small"
            bordered
            className='mt-3 uploadedPhotosList'
            >
            <List.Item>
                    <Typography></Typography>
                    <Typography>Id</Typography>
                    <Typography>Image</Typography>
                    <Typography>Group</Typography>
                    <Typography>Subject</Typography>
                    <Typography>Year</Typography>
                </List.Item>
            </List>
            {examPapers &&(
                <List
              size="small"
              bordered
              dataSource={examPapers&&examPapers}
              className = "uploadedPhotosList"
              renderItem={(item) => (
                <>
              
                  <List.Item className="d-flex flex-row justify-content-between">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        // handleImage(item._id);
                      }}
                    />
                    <p>{item._id}</p>
                    <img
                      src={item.imageUrl}
                      alt={item._id}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p>{item.groupName}</p>
                    <p>{item.subjectName}</p>
                    <p>{item.year}</p>
                  </List.Item>
                </>
              )}
            />
            )}
        </div>
    </div>
  )
}   


UploadedPhotos.propTypes = {
    papers : PropTypes.array
}

const mapStateToProps = ((state)=>({
    papers : state.exampaper.papers
}))

export default connect(mapStateToProps,{getAllExamPapers})(UploadedPhotos)