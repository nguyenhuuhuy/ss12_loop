let result = '';
for (let i = 1; i <= 9; i++) {
  result += "<tr>";
  for (let j = 2; j <= 9; j++) {
    result += "<td>" + j + " " + "x" + " " + i +" "+ "=" + " " + j * i + "</td>";
  }
  result += "</tr>";
}
document.getElementById("tabledemo").innerHTML = result;
