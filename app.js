    //    Question 1
       
       const subject1 = "Mathematics";
        const subject2 = "Science";
        const subject3 = "English";
        const subject4 = "History";
        const subject5 = "Geography";

        let marks1 = 85;
        let marks2 = 90;
        let marks3 = 78;
        let marks4 = 88;
        let marks5 = 92;

    
        const totalMarks = 500;
        const obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;
        const percentage = (obtainedMarks / totalMarks) * 100;


        let grade;
        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }


        document.write(`
            <h1>Mark Sheet</h1>
            <p><strong>Student Name:</strong> John Doe</p>
            <p><strong>Roll Number:</strong> 12345</p>
            <table border="1">
                <tr>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Total Marks</th>
                </tr>
                <tr>
                    <td>${subject1}</td>
                    <td>${marks1}</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>${subject2}</td>
                    <td>${marks2}</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>${subject3}</td>
                    <td>${marks3}</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>${subject4}</td>
                    <td>${marks4}</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>${subject5}</td>
                    <td>${marks5}</td>
                    <td>100</td>
                </tr>
            </table>
            <p><strong>Total Marks Obtained:</strong> ${obtainedMarks}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade}</p>
        `);

const mobiles = {
    iphone: {
        iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        brand:"iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
        iphone8: { /* ... */ },
        iphone8plus: { /* ... */ },
        iphoneX: { /* ... */ },
        iphone11: { /* ... */ },
    },
    xiomi: {
        redmiA2: { /* ... */ },
        redmi10: { /* ... */ },
        redmi11: { /* ... */ },
        redmi12: { /* ... */ },
        redmi13: { /* ... */ },
        redmi13C: { /* ... */ },
    },
    realme: {
        realmiNote50: { /* ... */ },
        realmiC67: { /* ... */ },
        realmiC53: { /* ... */ },
        realmi9: { /* ... */ },
        realmi9i: { /* ... */ },
    },
    samsung: {
        samsung_Galaxy_S24: { /* ... */ },
        samsung_Galaxy_S51: { /* ... */ },
        samsung_Galaxy_Prime: { /* ... */ },
        samsung_Galaxy_S46: { /* ... */ },
        samsung_Galaxy_S77: { /* ... */ },
    },
};


const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const resultDiv = document.getElementById('result');

for (const brand in mobiles) {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    brandSelect.appendChild(option);
}

brandSelect.addEventListener('change', function() {
    const selectedBrand = this.value;
    modelSelect.innerHTML = '<option value="">--Select Model--</option>'; 
    if (selectedBrand) {
        const models = Object.keys(mobiles[selectedBrand]);
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
            modelSelect.appendChild(option);
        });
        modelSelect.disabled = false; 
    } else {
        modelSelect.disabled = true;
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;

    if (selectedBrand && selectedModel) {
        const mobileDetails = mobiles[selectedBrand][selectedModel];
        resultDiv.innerHTML = `<h2>${selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1)} ${selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1)}</h2>`;
        resultDiv.innerHTML += `<pre>${JSON.stringify(mobileDetails, null, 2)}</pre>`;
    } else {
        resultDiv.innerHTML = '<p>Please select both brand and model.</p>';
    }
});
