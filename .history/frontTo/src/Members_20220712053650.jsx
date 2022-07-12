import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomTable from "./components/CustomTable";
import "./members.css";

function Members() {
  const [rows, setRows] = useState([]);
  const [columns, setColums] = useState([]);

  function getMembersData() {
    axios
      .get("http://127.0.0.1:8000/actors/")
      .then((res) => {
        let columObj = [];
        let selector = res.data[0];
        console.log(
          {}
        );
        Object.keys(selector).forEach((value) => {
          let obj = {};
          obj.accessor = value;
          obj.label = value.charAt(0).toUpperCase() + value.slice(1);
          if (
            value !== "memberId" &&
            value !== "lastName" &&
            value !== "tel" &&
            value !== "zipCode" &&
            value !== "image"
          ) {
            columObj.push(obj);
          }
        });
        columObj = columObj.slice(1);
        setRows(res.data);
        setColums(columObj);
      })
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getMembersData();
  }, []);
  return (
    <div className="memberContainer">
      <section>
        <div>Here is a list of our lovely members</div>
      </section>
      <section>
        {rows && columns && <CustomTable rows={rows} columns={columns} />}
      </section>
    </div>
  );
}

export default Members;
