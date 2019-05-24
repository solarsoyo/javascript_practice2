'use strict';

{

//ラジオボタンの初期設定：「すべて」を選択している状態にする
document.getElementsByName('all')[0].checked = true;

//追加ボタンのクリックイベント
const addClick = document.getElementsByClassName('addClick')[0];
addClick.addEventListener('click', addTask, false);

//新規タスクを追加する関数
function addTask() {
  //新規タスクを配列に格納する
  const newTask = document.getElementsByClassName('new-task').value;
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
  cell4.innerHTML = `<input type="button" class="deleteClick" value="削除">`;
  //追加フォームを空にする
  document.getElementById('new-task').value = "";
  key++;
  //完了ボタンのクリックを認識するイベント
  const doneClick = document.getElementsByClassName('doneClick');
  for (let i = 0; i < doneClick.length; i++) {
    doneClick[i].addEventListener("click", ()=> {
      console.log(i);
    }, false);
  }
  //削除ボタンのクリックを認識するイベント
  const deleteClick = document.getElementsByClassName('deleteClick');
  for (let i = 0; i < deleteClick.length; i++) {
    deleteClick[i].addEventListener("click", ()=> {
      deleteTask(i);
    }, false);      
  }
} 

//配列にタスクを格納するための変数設定
let key = 0;
let taskList = [];




function doneTask() {
  console.log("ok");
}

function deleteTask(key) {
  console.log(taskList[key]);
  taskList[key] = [];
  console.log(taskList[key]);
}

}