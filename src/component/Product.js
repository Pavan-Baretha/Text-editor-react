import React from 'react'
import { Link } from 'react-router-dom'

const def = 'DEFINITIONS';
const fq = 'FAQs&DATA COLLECTION';
const release = 'RELEASE NOTES'

function Product() {
    return (
        <div className="" style={{ width: "100%", height: "100%", border: "", padding: "2px", margin: "10px", marginBottom: "-10px" }}>
            <div className="row">
                <h1>WIRELESS</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <button className="btn-group" style={{ width: "280px", height: "56px", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#347db9", color: "white" }}>CARRIERVISION</button><br /><br /><br />
                       <Link to="/textEditor" params={{definition : 'def'}}> <button className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{def}</b></span><br /><br />
                       <Link to="/textEditor" params={{fq : 'fq'}}> <button className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{fq}</b></span><br /><br />
                       <Link to="/textEditor" params={{release : 'release'}}>  <button className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{release}</b></span><br /><br />
                </div>
                <div className="col-sm-6">
                    <div className="row">
                    <div className="col-sm-6">
                        <button className="btn-group" style={{ width: "280px", height: "56px", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#347db9", color: "white" }}>REPORTBUILDER</button><br /><br /><br />
                       <Link to="/textEditor"><button  className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{def}</b></span><br /><br />
                        <Link to="/textEditor"><button className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{fq}</b></span><br /><br />
                        <Link to="/textEditor"><button className="btn-group" style={{ width: "60px", height: "", borderRadius: "4px", textAlign: "center", display: "inline-block", backgroundColor: "#11f311", color: "white", marginRight: "10px" }}>EDIT</button></Link><span><b>{release}</b></span><br /><br />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product