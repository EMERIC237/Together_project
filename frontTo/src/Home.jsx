import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomTable from "./components/CustomTable";

function Home() {
  const [rows, setRows] = useState([]);
  const [columns, setColums] = useState([]);

  function getMembersData() {
    axios
      .get("http://127.0.0.1:8000/actors/")
      .then((res) => {
        let columObj = [];
        let selector = res.data[0];
        Object.keys(selector).forEach((value) => {
          let obj = new Object();
          obj.accessor = value;
          obj.label = value.charAt(0).toUpperCase() + value.slice(1);
          columObj.push(obj);
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
    <div>
      <section>
        <div>Here is a list of our lovely members</div>
      </section>
      <section>
        {rows && columns && <CustomTable rows={rows} columns={columns} />}
      </section>
    </div>
  );
}

export default Home;
