import React, {useState} from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import ImageGallery from "react-image-gallery";
import PageHeader from "../utils/page-header";



const Media = (props) => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const [modalImage, setModalImage] = useState("");
    
    const mediaImageFiles = [
       {
        original: "https://i.postimg.cc/85mCp1Zk/packing.jpg",
        thumbnail: "https://i.postimg.cc/ZB0mjhkX/packing.jpg",
       },
       {
        original: "https://i.postimg.cc/x8qp1b22/team.jpg",
        thumbnail: "https://i.postimg.cc/zHZFdvvt/team.jpg",
       },
       {
        original: "https://i.postimg.cc/2SNGPtVm/messenger.jpg",
        thumbnail: "https://i.postimg.cc/8jwLvtRn/messenger.jpg",
       }
        
    ];
    const mediaVideoFiles = ["1.mp4", "2.mp4", "3.mp4","4.mp4"];
    return (
        <>
           <PageHeader title="Media" />
            <div className="container mt-4">
                <Tabs defaultActiveKey="images"> 
                    <Tab eventKey="images" title="Images" className="">
                        <ImageGallery items={mediaImageFiles} autoPlay={true}/>;
                    </Tab> 
                    <Tab eventKey="second" title="Videos"> 
                        <div className="p-7 my-4 bg-gray-100 rounded-md">High Quality videos coming soon</div> 
                    </Tab>  
                </Tabs> 
            </div>     

           
        </>
    )
}

export default React.memo(Media);