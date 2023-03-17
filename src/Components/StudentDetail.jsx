import React from 'react'

function StudentDetail() {
  return (
    <div>
 
  <body className="bodyForm">
    <div class="form">
        <div class="form_elements">
      <form action="URL">
        <div class="heading1"><h1>STUDENT DATA</h1></div>
        <label for="name">Name </label>
        <input type="text" placeholder="your name" id="name" /> <br /><br />
        <label for="enroll">Enroll_No.</label>
        <input type="text" placeholder="ex:DE20388" id="enroll" /><br /><br />
        <label for="rollno"> Roll_No.</label>
        <input type="text" placeholder="ex:20T1150" id="rollno" /><br /><br />
        <label for="branch">Branch</label>
        <input type="text" placeholder="ex:civil" id="branch" /> <br /><br />
        <label for="Section">Section</label>
        <input type="text" placeholder="A/B" id="Section" /><br /><br />
        <label for="sem">Semester</label>
        <input type="text" placeholder="Semester" id="sem" /><br /><br />
        <label for="year">Year</label>
        <input type="text" placeholder="ex:1/2/3/4" id="year" /><br /><br />
        <div class="submit">
          <button type="button" id="submit" class="submit_button" >Submit</button>
        </div>
      </form>
    </div>
    </div>
    
    
  </body>



    </div>
  )
}

export default StudentDetail