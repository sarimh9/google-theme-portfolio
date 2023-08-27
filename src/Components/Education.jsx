import React from "react";

export default function Education(props) {
  console.log(props.details.degreeTitle);
  return (
    <div className="education">
      <div className="url-section">
        https://
        <span>
          {" "}
          EDUCATION &rsaquo; Aligarh Muslim University &emsp;
          <b className="threedots">⋮</b>
        </span>
      </div>
      <h3 className="degree">{props.details.degreeTitle}</h3>
      <div className="city-and-time">
        <p>{props.details.desc}</p>
        <strong>
          Aligarh City, Uttar Pradesh
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {props.details.date}
        </strong>
      </div>
    </div>
  );
}
