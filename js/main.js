'use strict';

{
  
  //ユニークキーであるIDを変数keyとして設定
  let key = 0;
  
  //追加ボタンをクリックすると、テーブルにタスクを追加する関数を呼び出す
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', ()=> {
    const newTask = document.getElementById('new-task').value;
    //タスクが入力されていない場合は入力欄にエラーを表示。そのまま連打されても登録されていないよう、エラーメッセージも登録できないようにする
    if (newTask !== "" && newTask !== "タスクを入力して下さい") {
      addTask(newTask);
    } else {
      document.getElementById('new-task').value = "タスクを入力して下さい";
    }
  });
  
  //テーブル：tbodyタグ（id:tbl）の子要素に新しいタスクを追加する関数
  function addTask(newTask) {
    const tbody = document.getElementById('tbl');
    const row = tbody.insertRow(key);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.dataset.name = 'ID';
    cell1.textContent = key;
    cell2.textContent = newTask;
    addStatusButton(cell3);
    addDeletionButton(cell4,tbody);
    key++;
    //入力した追加フォームを空にする
    document.getElementById('new-task').value = "";
  }
  
  // 状態ボタン（最初は作業中ボタン）を作成する関数
  function addStatusButton(cell) {
    const statusButton = document.createElement('button');
    statusButton.textContent = "作業中";
    statusButton.name = "status-click";
    cell.appendChild(statusButton);
    // 状態ボタンをクリックしたときのイベント:作業中は完了に、完了は作業中に
    statusButton.addEventListener('click', ()=> {
      if (statusButton.textContent === "作業中") {
        statusButton.textContent = "完了";
      } else {
        statusButton.textContent = "作業中";
      }
    });
  }
  
  // 削除ボタンを作成する関数
  function addDeletionButton(cell,tbody) {
    const deletionButton = document.createElement('button');
    deletionButton.textContent = "削除";
    cell.appendChild(deletionButton);
    // 削除ボタンをクリックしたときのイベント：親要素の親要素のtrタグを削除する
    deletionButton.addEventListener('click', ()=> {
      tbody.removeChild(deletionButton.parentNode.parentNode);
      renumbering();
    });
  }
  
  //削除したIDを振り直すための関数
  function renumbering() {
    const rows = document.querySelectorAll('[data-name]');
    for (let i = 0; i < rows.length; i++) {
      rows[i].textContent = i;
    }
    //削除したID分のkey値を減らす
    key--;
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
    if(allCheck.checked === true) {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
      } 
      //「作業中」をチェックしているときは状態が「完了」のタスクを非表示にする
    } else if(doingCheck.checked === true) {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
        const status = document.getElementsByName('status-click')[i].textContent;
        if (status === "完了") {
          row.classList.add('status-hidden'); 
        } 
      } 
      //「完了」をチェックしているときは状態が「作業中」のタスクを非表示にする
    } else {
      for (let i = 0; i < key; i++) {
        const row = document.getElementsByTagName('tr')[i+1];
        row.classList.remove('status-hidden');
        const status = document.getElementsByName('status-click')[i].textContent;
        if (status === "作業中") {
          row.classList.add('status-hidden'); 
        } 
      } 
    }
  }
  
}
