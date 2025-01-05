/** Read about the code below, suggest how to improve the code **/
/** Code block start 
 function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);
 
  return (
  <div>
  <ChildComponent name={name} age={age} />
  <GrandchildComponent name={name} age={age} />
  </div>
  );
  }
  function ChildComponent({ name, age }) {
  return (
  <div>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  <GrandchildComponent name={name} age={age} />
  </div>
  );
  }
  function GrandchildComponent({ name, age }) {
  return (
  <div>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  </div>
  );
 }

Code block end **/

/**
 回答:
 子孫組件渲染的內容都一樣，所以我會整併成一個組件就好，
 從而減少不必要的props傳遞。
 */