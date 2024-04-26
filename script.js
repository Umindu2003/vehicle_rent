document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const targetCounts = [100, 200, 300, 400]; // Change these to your desired final counts
    const duration = 3000; // Duration in milliseconds
  
    const steps = targetCounts.map((targetCount, index) => Math.ceil(targetCount / (duration / 100)));
  
    let currentCounts = new Array(counters.length).fill(0);
  
    const interval = setInterval(() => {
      for (let i = 0; i < counters.length; i++) {
        currentCounts[i] += steps[i];
        if (currentCounts[i] >= targetCounts[i]) {
          currentCounts[i] = targetCounts[i];
        }
        counters[i].textContent = currentCounts[i];
      }
  
      if (currentCounts.every((count, index) => count >= targetCounts[index])) {
        clearInterval(interval);
      }
    }, 100);
  });

 
=======
  function search() {
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var vehicleType = document.getElementById("vehicle-type").value;
  
    // Perform search based on inputs
    console.log("Location: " + location);
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Vehicle Type: " + vehicleType);
  }
  
>>>>>>> dd9382b261a9e263e0aa2de4f0c06ebf0b0de3d5
