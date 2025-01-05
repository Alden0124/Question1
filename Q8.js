/** 
Q:Read about the code below, please describe the issues and how you will be going toimprove it 
/** Code block start 
const TodoList = () => {
  const [todos, setTodos] = useState([
  { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
  { id: 2, text: '建立專案', completed: false, studyPoint: 1 }
  ]);
  const { id, text, studyPoint } = todos;
 const [basePoints, setbasePoints] = useState(3);
 const [sumPoints, setSumPoints] = useState(0);
  const toggleTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  setTodos(todos);
  };
  const handleStudyPointsChange = (e) => {
  basePoints(e.target.value);
  setSumPoints(parseInt(value1) + parseInt(e.target.value));
  };
  return (
  <div>
  <p>課程名稱: {text}</p>
  <label>學習點數: </label>
  <input type="number" value={studyPoint} onChange={handleStudyPointsChange} />
  <p>總累積點數: {sumPoints}</p>
  <button onClick={toggleTodo(id)}>篩選課程</button>
  </div>
  );
}
Code block end **/

/** 
問題1:const { id, text, studyPoint } = todos; 解構錯誤因為todos是陣列不是物件
解答1:把解構移除，調整todos到渲染區塊使用todos.map去渲染資料

問題2:toggleTodo原本的寫法會直接修改原始資料，並且REACT無法檢測到狀態改變
解答2:使用setTodos內搭配map更改狀態，這樣React才有辦法正確更新狀態

問題3:handleStudyPointsChange中basePoints更新錯誤
解答3:使用setBasePoints更新basePoints，並且重新計算總累積點數sumPoints

問題4:toggleTodo(id) 被立即執行
解答4:調整onClick改用() => toggleTodo(id) ，這樣就只有被點擊時才會執行
**/

 