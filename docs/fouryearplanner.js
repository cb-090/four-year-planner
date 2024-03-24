class Course {
    constructor(ccn, name, prereq, category, units) {
      this.ccn = ccn;
      this.name = name;
      this.prereq = prereq;
      this.category = category;
      this.units = units;
      this.completed = false;
    }
  }
  
  const signUpButton = document.getElementById("#signUp");
  const APCSA = document.getElementById("#APCSA");
  const APCalcAB = document.getElementById("#APCalcAB");
  const APCalcBC = document.getElementById("#APCalcBC");
  const courseList = []
  
  const nextButton = document.getElementById("next")
  const unitsCounter = document.getElementById("units")
  
  //CMSI
  courseList[0] = new Course(1010, "Introduction to Computer Programming", null, "CMSI", 4)
  courseList[1] = new Course(1900, "Explorations in CS", null, "CMSI", 4)
  courseList[2] = new Course(2120, "Data Structures", null, "CMSI", 4)
  //Math
  courseList[3] = new Course(131, "Calculus 1", null, "MATH", 4)
  courseList[4] = new Course(132, "Calculus 2", null, "MATH", 4)
  courseList[5] = new Course(132, "Linear Algebra", null, "MATH", 4)
  //English
  courseList[6] = new Course(1000, "First Year Seminar", null, "Core", 4)
  courseList[7] = new Course(1000, "Rhetorical Arts", null, "Core", 4)
  
  //Core
  courseList[8] = new Course(1800, "Philosophical Inquiry", null, "Core", 4)
  courseList[9] = new Course(1000, "Theological Inquiry", null, "Core", 4)
  courseList[10] = new Course(1000, "Studies in American Diversity", null, "Core", 4)
  courseList[11] = new Course(1000, "Orientation", null, "Core", 4)
  
  const fallboxDiv = document.getElementById("fallbox");
  
  document.querySelector("body").addEventListener('click', (e) => {
    if (e?.target?.parentElement.id === "classbank") {
      console.log(e.target.id)
      const selected = document.getElementById(e.target.id);
      selected.remove();
      fallbox.appendChild(selected);
    }
  })
  
  