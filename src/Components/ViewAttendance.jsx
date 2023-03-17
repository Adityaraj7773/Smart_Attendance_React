import React from "react";

var monthName = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function ViewAttendance({
  attendanceList,
  setToggleViewAttendance,
}) {
  const downloadFile = () => {
    if (attendanceList.length > 0) {
      let string2 = prompt("Enter SUBJECT, BRANCH : ", "subject_branch");
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let currentDate = `${day}-${monthName[month]}-${year}`;
      let string;
      if (string2) {
        string = string2 + "_" + currentDate;
      } else {
        string = currentDate;
      }
      const link = document.createElement("a");
      const content = attendanceList.join("\n");
      const file = new Blob([content], { type: "text/plain" });
      link.href = URL.createObjectURL(file);
      link.download = string + " ";
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };
  const removeDuplicates = (arr) => {
    return Array.from(new Set(arr)).filter((el) => !el.startsWith("unknown"));
  };
  const uniqueStudents = removeDuplicates(attendanceList);
  console.log(uniqueStudents);

 

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<div>
      <button className="style1"
        onClick={() => {
          setToggleViewAttendance(false);
        }}
      ><i class="fa fa-arrow-circle-left"></i></button>
        
      <p className="AttendanceList">Attendance List</p>
  </div>

    <div className="studentName1" > 
     <ol className="studentName2" type="1">
        {uniqueStudents.length > 0 &&
          uniqueStudents.map((item) => {
            return <li>{item}</li>;
          })}
      </ol></div>
      <span className="styleview" >
      <p style={{margin:"1rem"}}>Total Detected: {attendanceList.length}</p>
      <p style={{margin:"1rem"}}>Total Recognised: {uniqueStudents.length || 0}</p></span>
     
    <button className="style2"
       onClick={downloadFile}><i class="fa fa-download"></i></button>
       </div>
      
  );
}
