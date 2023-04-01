import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Typography from "@mui/material/Typography";
import {Document,View,Text,Image,Page, PDFDownloadLink} from "@react-pdf/renderer";
import { getAllExamPapers } from '../../actions/ExamPapers';
const myStyle={
  width:'100vw',
  height:'100vh',
  display:'flex',
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}
const textStyle = {
  
  marginTop:"20px",
  marginBottom:"20px",
  fontSize:"16px",
  backgroundColor:"orange",
  boxShadow: 'rgba(100, 100, 111, 0.2)'
}
const imageStyle={
  width:"50vw",
  height:"30vh"
}
const MyDocument = ({subjectName,groupName,year,imageUrl})=>(
  <Document>
    <Page size='A4'>
      <View style={myStyle}>
        <Text style={textStyle}>
          Subject Name : {subjectName}
        </Text>
        <Text style={textStyle}>
          
          Group Name : {groupName}
          
        </Text>
        <Text style={textStyle}>
          
          Year : {year}
          
        </Text>
        <Image src = {imageUrl} style={imageStyle}/>
      </View>
    </Page>
  </Document>
);


const ViewAllExamPapers = ({getAllExamPapers,papers}) => {
  
  useEffect(()=>{
    getAllExamPapers();
  },[getAllExamPapers]);
  

    return (
    <div className='container'>
        <div className="row mt-5">
           
                {
                    papers&&(
                       <>
                       <p>Available papers : {papers.length}</p>
                        {

                            papers.map(paper=>(
                                <div className="card col-lg-4 my-5">
                                <p>{paper.subjectName}</p>
                                <p>{paper.year}</p>
                                <p>{paper.groupName}</p>
                                <a href={`${paper.imageUrl}`} download>
                                <img src={paper.imageUrl} alt="pic" style={{width:"300px",height:"200px"}}/>
                                </a>
                                
                                <PDFDownloadLink
                                document={
                                  <MyDocument
                                    subjectName={paper.subjectName}
                                    groupName={paper.groupName}
                                    year = {paper.year}
                                    imageUrl={paper.imageUrl}
                                  />
                                }
                                fileName={paper.subjectName}
                                >
                                  {
                                    ({
                                      blob,url,loading,error
                                    })=>(loading?'Loading Document':
                                    <button className='btn btn-success btn-md'>
                                    Download Pdf
                                    </button>)
                                  }
                                </PDFDownloadLink>
                                </div>
                            ))
                        }
                       </>
                    )
                }
            
        </div>
    </div>
  )
}

ViewAllExamPapers.propTypes = {
    papers : PropTypes.array,
    isLoading : PropTypes.bool

}

const mapStateToProps = ((state)=>({
    papers : state.exampaper.papers,
    isLoading : state.exampaper.isLoading
}))
export default connect(mapStateToProps,{getAllExamPapers})(ViewAllExamPapers);