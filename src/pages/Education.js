import React from "react";
import LineWithTitle from "../components/LineWithTitle";
import '../styles/Education.css'
import Line from '../components/Line';

const Education = () => {
    return (
        <>
            <LineWithTitle title="EDUCATION" />

            <div className="row">
                <div className="col-sm d-flex justify-content-center">
                    <div className="education-1">
                        <h6 className="education-heading">Education</h6>
                    </div>
                </div>
                <div className="col-sm education-wrapper">
                    <div className="education-1">
                        <h6>University of Santo Tomas | 2018 - 2022</h6>
                        BS Information Technology
                    </div>
                    <div className="education-2">
                        <h6>University of Santo Tomas | 2016 - 2018</h6>
                        SHS - Music, Arts and Design Track

                    </div>
                    <div className="education-3">
                        <h6>Ramon Magsaysay High School | 2012 - 2016</h6>
                        Junior High School
                    </div>

                </div>

            </div>


            <div className="row">
                <div className="col-sm d-flex justify-content-center">

                    <div className="education-1">
                        <h6 className="org-heading">Organizations</h6>
                    </div>
                </div>
                <div className="col-sm org-wrapper">
                    <div className="organization-4">
                        <h6>Becarios de  Santo Tomas | 2018-2022</h6>
                        Executive Associate
                    </div>
                    <div className="organization-1">
                        <h6>UST Cisco Gateway Academy - CICS | 2020 - 2021</h6>
                        Vice President for Audit and Logistics
                    </div>

                    <div className="organization-3">
                    <h6>UST Cisco Gateway Academy - CICS | 2019 - 2020</h6>
                        Vice President for Creatives

                    </div>
                    <div className="organization-2">
                        
                        <h6>UST Cisco Gateway Academy - CICS | 2020 - 2021</h6>
                        Executive Associate

                    </div>


                </div>

            </div>

            <div className="row">
                <div className="col-sm d-flex justify-content-center">
                    <div className="education-1">
                        <h6 className="org-heading">Career Summary</h6>
                    </div>
                </div>
                <div className="col-sm career-wrapper">
                    <div className="organization-1">
                        <h6>TELUS International Philippines Inc. | 2022 - 2023</h6>
                        Associate Application Developer | Content Manager
                    </div>

                    <div className="organization-1">
                        <h6>TELUS International Philippines Inc. | Feb 2022 - May 2022</h6>
                        Associate Application Developer | Intern
                    </div>


                </div>

            </div>

            <Line />

        </>

    )

}

export default Education;