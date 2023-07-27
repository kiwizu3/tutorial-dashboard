import React from "react";
import Sidebar from "../components/Sidebar";
import Links from "../components/Links";
import Button from "../components/Button";

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card shadow rounded-0 border-0 px-4 py-2">
                        <p>This is the top bar</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <Button />
                    <Links />
                </div>
            </div>




        </>
    )
}
export default Dashboard