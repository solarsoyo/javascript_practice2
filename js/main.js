'use strict';

{
  
  //ユニークキーであるIDを変数keyとして設定
  let key = 0;
  
  //追加ボタンをクリックすると、テーブルにタスクを追加する関数を呼び出す
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', addTask);
  
  //テーブル：tbodyタグ（id:tbl）の子要素に新しいタスクを追加する関数
  function addTask() {
    const newTask = document.getElementById('new-task').value;
    const tbody = document.getElementById('tbl');
    const row = tbody.insertRow(key);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.textContent = key;
    cell2.textContent = newTask;
    cell3.innerHTML = `<input type="button" name="status-click" value="作業中">`;
    cell4.innerHTML = `<input type="button" name="deletion-click" value="削除">`;
    key++;
    //入力した追加フォームを空にする
    document.getElementById('new-task').value = "";
    changeStatus();
    deletion();
  }
  
  //作業中ボタンをクリックすると完了ボタンに、完了ボタンをクリックすると作業中ボタンに変更する関数
  function changeStatus() {
    for (let i = 0; i < key; i++) {
      const doneClick = document.getElementsByName('status-click')[i];
      doneClick.onclick = ()=> {
        if (doneClick.value == "作業中") {
          doneClick.value = "完了";
        } else {
          doneClick.value = "作業中";
        }
      };
    }
  }
  
  //削除ボタンをクリックすると、その行を非表示にする関数
  function deletion() {
    for (let i = 0; i < key; i++) {
      const deletionClick = document.getElementsByName('deletion-click')[i];
      deletionClick.onclick = ()=> {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.add('deletion-hidden');
      };
    }
  }
  
  //ラジオボタンのチェックを変更したときにdisplayChange関数が発動
  const displayButton = document.getElementsByName('state-selection');
  for　(let i = 0; i < displayButton.length; i++)　{
    displayButton[i].addEventListener('change', displayChange);
  }
  
  //ラジオボタンの選択状態に合わせて表示/非表示を切り替える関数
  function displayChange() {
    //ラジオボタンのチェック状態を定数に入れる
    const allCheck = document.querySelectorAll('input[type="radio"]')[0];
    const doingCheck = document.querySelectorAll('input[type="radio"]')[1];
    //「すべて」が選択されると全IDのstatus-hiddenクラスを取る
    if(allCheck.checked == true) {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
      } 
      //「作業中」をチェックしているときは状態が「完了」のタスクを非表示にする
    } else if(doingCheck.checked == true) {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
        const status = document.getElementsByName('status-click')[i].value;
        if (status == "完了") {
          row.classList.add('status-hidden'); 
        } 
      } 
      //「完了」をチェックしているときは状態が「作業中」のタスクを非表示にする
    } else {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
        const status = document.getElementsByName('status-click')[i].value;
        if (status == "作業中") {
          row.classList.add('status-hidden'); 
        } 
      } 
    }
  }
  
}
