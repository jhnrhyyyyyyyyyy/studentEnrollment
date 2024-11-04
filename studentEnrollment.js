let dsaStudents = [];
let plStudents = [];
let networksStudents = [];

function studentEnrollment() {
  displayMenu();
  let subjectChoice = prompt("Select a subject: \n A. DSA \n B. PL \n C. Networks \n D. Exit: ");

  switch (subjectChoice.toUpperCase()) {
    case "A":
      displayEnrollMenu();
      let enrollChoice = prompt("Select an operation: \n A. Enroll \n B. Unenroll \n C. Select Another Subject \n D. Exit ");
      switch (enrollChoice.toUpperCase()) {
        case "A":
          enrollStudent(dsaStudents, "DSA");
          break;
        case "B":
          unenrollStudent(dsaStudents, "DSA");
          break;
        case "C":
          break;
        case "D":
          console.log("Exiting...");
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
      break;
    case "B":
      displayEnrollMenu();
      let enrollChoicePL = prompt("Select an operation: \n A. Enroll \n B. Unenroll \n C. Select Another Subject \n D. Exit ");
      switch (enrollChoicePL.toUpperCase()) {
        case "A":
          enrollStudent(plStudents, "PL");
          break;
        case "B":
          unenrollStudent(plStudents, "PL");
          break;
        case "C":
          break; 
        case "D":
          console.log("Exiting...");
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
      break;
    case "C":
      displayEnrollMenu();
      let enrollChoiceNetworks = prompt("Select an operation: \n A. Enroll \n B. Unenroll \n C. Select Another Subject \n D. Exit ");
      switch (enrollChoiceNetworks.toUpperCase()) {
        case "A":
          enrollStudent(networksStudents, "Networks");
          break;
        case "B":
          unenrollStudent(networksStudents, "Networks");
          break;
        case "C":
          break; 
        case "D":
          console.log("Exiting...");
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
      break;
    case "D":
      console.log("Exiting...");
      console.log("DSA Students:", dsaStudents);
      console.log("PL Students:", plStudents);
      console.log("Networks Students:", networksStudents);
      return;
    default:
      console.log("Invalid choice. Please try again.");
  }

  studentEnrollment();
}

function displayMenu() {
  console.log("Select a subject:");
  console.log("A. DSA");
  console.log("B. PL");
  console.log("C. Networks");
  console.log("D. Exit");
}

function displayEnrollMenu() {
  console.log("Select an operation:");
  console.log("A. Enroll");
  console.log("B. Unenroll");
  console.log("C. Select Another Subject");
  console.log("D. Exit");
}

function enrollStudent(subjectArray, subjectName) {
    let studentName = prompt(`Enter the name of the student to enroll in ${subjectName}:`);
  subjectArray.push(studentName);
  console.log(`${studentName} enrolled in ${subjectName}.`);
}

function unenrollStudent(subjectArray, subjectName) {
  console.log(`Currently enrolled students in ${subjectName}:`);
  subjectArray.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
  });

  const studentIndex = parseInt(prompt(`Enter the index of the student to unenroll: `)) - 1;
  if (studentIndex >= 0 && studentIndex < subjectArray.length) {
    let removedStudent = subjectArray.splice(studentIndex, 1)[0];
    console.log(`${removedStudent} unenrolled from ${subjectName}.`);
  } else {
    console.log("Invalid index. Please try again.");
  }
}

studentEnrollment(); 