function displayNextFloor(f) {
   // console.log(f);
   let current = document.getElementById("current").value;
   // console.log(current);

   if (current < f) {
      less(f);
      // document.getElementById("msg").innerHTML = `GOING UP👆️`;
   } else if (current > f) {
      greater(f);
      // document.getElementById("msg").innerHTML = `GOING DOWN👇️`;
   } else if (current == f) {
      alert("You are already in " + f + " floor");
   }
}

function less(f) {
   // console.log(f);
   document.getElementById("show1").style.display = "block";
   let current = document.getElementById("current").value;
   // console.log(current);

   let x = parseInt(current) + 1;
   let arr = [];
   let text = "";
   for (let i = x; i <= f; i++) {
      text = i;
      arr.push(text);
   }

   console.log(arr);
   let diff = f - current;
   function delayPrint(arr, delay) {
      let index = -1;

      const interval = setInterval(function () {
         if (++index === arr.length) {
            clearInterval(interval);
            return;
         }

         // console.log(arr[index]);
         document.getElementById("show1").innerHTML = arr[index] + `👆️`;
      }, delay);
   }

   delayPrint(arr, 2000);

   setTimeout(() => {
      document.getElementById("msg").innerHTML = "";
      document.getElementById("current").value = f;
      reached = f;
      document.getElementById("msg1").innerHTML = "Reached floor : " + reached;
   }, diff * 2000);
}

function greater(f) {
   // console.log(f);
   document.getElementById("show1").style.display = "block";
   let current = document.getElementById("current").value;
   // console.log(current);

   let x = parseInt(current) - 1;
   let arr = [];
   let text = "";
   for (let i = x; i >= f; i--) {
      text = i;
      arr.push(text);
   }

   // console.log(arr);
   let diff = current - f;
   function delayPrint(arr, delay) {
      let index = -1;

      const interval = setInterval(function () {
         if (++index === arr.length) {
            clearInterval(interval);
            return;
         }

         // console.log(arr[index]);
         document.getElementById("show1").innerHTML = arr[index] + `👇️`;
      }, delay);
   }

   delayPrint(arr, 2000);

   setTimeout(() => {
      document.getElementById("msg").innerHTML = "";
      document.getElementById("current").value = f;
      reached = f;
      document.getElementById("msg1").innerHTML = "Reached floor : " + reached;
   }, diff * 2000);
}
