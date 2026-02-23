function checkGrade () {
    console.clear();
    const output = [] ;
    
    let score = Math.floor(Math.random() * 101) ; //สุ่มคะแนน 0-100
    
    let grade = "" ;
    if (score >= 80) {
        grade = "A" ;
    } else if (score >= 70) {
        grade = "B" ;
    } else if (score >= 60) {
        grade = "C" ;
    } else if (score >= 50) {
        grade = "D" ;
    } else {
        grade = "F" ;
    }

    let result = score >= 50? "ผ่าน" : "ไม่ผ่าน";
    
    let description = "" ;

    switch (grade) {
        case "A":
            description = "ผลการประเมินอยู่ในระดับดีเยี่ยม" ;
            break;
        case "B":
            description = "ผลการประเมินอยู่ในระดับดีมาก" ;
            break;
        case "C":
            description = "ผลการประเมินอยู่ในระดับมาตรฐาน" ;
            break;
        case "D":
            description = "ผลการประเมินอยู่ในระดับขั้นต่ำ" ;
            break;
        case "F":
            description = "ผลการประเมินไม่เป็นไปตามเกณฑ์ที่กำหนด" ;
            break;
        default:
            console.log("something went wrong");
            output.push("something went wrong");
            break;
    }

    output.push("คะแนนที่สุ่มได้: " + score);
    console.log("คะแนนที่สุ่มได้:", score);
    output.push("เกรด: " + grade);
    console.log("เกรด:", grade);
    output.push("ผลสอบ: " + result);
    console.log("ผลสอบ:", result);
    output.push("คำอธิบาย: " + description);
    console.log("คำอธิบาย:", description);

    document.getElementById("outputBox").innerHTML = output.join("<br>");
}

document.getElementById("btn").addEventListener("click", checkGrade);