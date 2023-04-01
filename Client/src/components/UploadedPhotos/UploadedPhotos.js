import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { getAllExamPapers } from "../../actions/ExamPapers";

const UploadedPhotos = ({papers:examPapers,getAllExamPapers}) => {
    useEffect(()=>{
        getAllExamPapers();
      },[]);
  return (
    <div className="container">
    <h3 className='text text-center'>UploadedPhotos
        Total Uploaded : {examPapers&&examPapers.length}</h3>

        <div className='row'>
            {examPapers && (
                <>
                    {
                    
                        examPapers.slice(0,6).map((paper)=>(
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