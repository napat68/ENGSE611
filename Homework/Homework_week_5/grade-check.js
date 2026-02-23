function checkGrade () {
    console.clear();
    const output = [] ;
    
    let score = 79; //manual

    let grade = "" ;
    if (score >= 80) {
        grade = "A" ;
    } else if (score >= 70) {
        grade = "B" ;
    } else if (score >= 60) {
        grade = "C" ;
    } else if (score >= 50) {
        grade = "D" ;
    } else  grade = "F" ;

    let result = score >= 50? "ผ่าน" : "ไม่ผ่าน"

    output.push("คะแนนที่ได้: " + score);
    console.log("คะแนนที่ได้:", score);
    output.push("เกรด: " + grade);
    console.log("เกรด:", grade);
    output.push("ผลสอบ: " + result);
    console.log("ผลสอบ:", result);

    document.getElementById("output").innerHTML = output.join("<br>");
}

document.getElementById("btn").addEventListener("click", checkGrade);