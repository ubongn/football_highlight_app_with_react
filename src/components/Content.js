import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.scorebat.com/video-api/v3/feed/?token=${process.env.REACT_APP_SECRET_NAME}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="content-container">
      {data.map((item) => (
        <div
          key={item.thumbnail}
          className="video-div"
          onClick={() => window.open(item.matchviewUrl)}
        >
          <div>
            <h4>{item.title}</h4>
          </div>
          <div>
            <img src={item.thumbnail} alt="#" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
