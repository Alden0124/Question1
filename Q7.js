/** 
Q:Read the code below, please figure out why after “Switch Person” button clicked, the
tasks state doesn’t update correctly, and how to make it update as we expected 
A:原因是因為const [tasks, setTasks] = useState(0);這個狀態被放在子組件，所以每當TaskCounter子組件
重新渲染tasks狀態會被重置，所以每次渲染不同Person時子組件的tasks狀態才會是0，那解決的方式就是把
const [tasks, setTasks] = useState(0);狀態改到父組件並且調整tasks狀態的初始參數為
{ Alice: 0,Bob: 0 }，在個別把不同Person的值分給各自的子組件props。
**/
