function startLoop() {

    console.clear();

    let maxNumber = 10;
    let output = [];   // ใช้ array เก็บข้อมูล

    // แสดงเลข 0 - maxNumber พร้อมบอก คู่ / คี่
    for (let num = 0; num <= maxNumber; num++) {

        let type = (num % 2 === 0) ? "คู่" : "คี่";
        let message = num + " (" + type + ")";

        output.push(message);
        console.log(message);
    }

    // นับทีละ 2
    for (let step = 0; step <= maxNumber; step += 2) {

        let message = "นับทีละ 2: " + step;

        output.push(message);
        console.log(message);
    }

    // นับถอยหลัง
    for (let back = maxNumber; back >= 0; back--) {

        let message = "ถอยหลัง: " + back;

        output.push(message);
        console.log(message);
    }

    // ใช้ join("<br>") เพื่อขึ้นบรรทัดใหม่ในหน้าเว็บ
    document.getElementById("output").innerHTML = output.join("<br>");
}

document.getElementById("btn").addEventListener("click", startLoop);