//配列にタスクを格納するための変数設定
let key = 0;
let taskList = [];

//追加ボタンのクリックを認識するイベント
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('addClick').addEventListener('click', addTask, false);
});


//新規タスクを追加する関数
function addTask() {
  //新規タスクを配列に格納する
  const newTask = document.getElementById('new-task').value;
  taskList[key] = [] ;
  taskList[key][0] = key;
  taskList[key][1] = newTask;
  taskList[key][2] = "作業中";
  //行を追加する
  const tbl = document.getElementById('TBL');
  const row = tbl.insertRow(-1);
  const cell1 = row.insertCell(-1);
  const cell2 = row.insertCell(-1);
  const cell3 = row.insertCell(-1);
  const cell4 = row.insertCell(-1);
  cell1.innerHTML = taskList[key][0];
  cell2.innerHTML = taskList[key][1];
  cell3.innerHTML = `<input type="button" class="doneClick" value=${taskList[key][2]}>`;
  cell4.innerHTML = `<input type="button" value="削除">`;
  document.getElementById('new-task').value = "";
  key++;
  //完了ボタンのクリックを認識するイベント
  const doneClick = document.getElementsByClassName('doneClick');
  for (let i = 0; i < doneClick.length; i++) {
    doneClick[i].addEventListener("click", function(){
      console.log(i);
    }, false);
  }
}

function doneTask() {
  console.log("ok");
}

function getCell() {
  let tblrows = document.getElementById('TBL').rows ;
  console.log(tblrows.length);
  // for ( let i=0; i<tblrows; i++) {
  //   tblrows[i].onclick
    // for ( let j=0; j<tbl.rows[i].cells.length; j++) {
    //   let cells = tbl.rows[i].cells[j] ;
    //   cells.onclick = () => {
    //     Mclk(this);
    //   }
    // }
  // }
}


function Mclk(cell) {
  let rowINX = cell.parentNode.rowIndex ,
      cellINX = cell.cellIndex ;
  console.log(rowINX,cellINX);
}

//
// function taskWorking(button) {
//   button.value = '作業中';
// }
//
// function taskWorking(row) {
//   cell3.innerHTML = '<input type="button" value="作業中" onclick="taskDone(this);">';
//   console.log(cell3);
// }

// table.rows.length - 2
