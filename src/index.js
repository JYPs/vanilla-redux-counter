import { createStore } from "redux";
//Store : 나의 data를 넣는 곳!!, 즉 나의 state!!, 나의 data를 관리해준다~

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = "0";

//reducer는 나의 data를 수정하는 함수이다
//action은 리듀서가 사용하는 2번째 param으로 개발자가 리듀서와 소통하기 위한 방법을 제공~
const countModifier = (count = 0, action) => {
  // console.log(count, action);
  if (action.type === "ADD") {
    // console.log("they are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); // createStore()는 reducer를 요구한다

// console.log(countStore); // countStore를 보면 dispatch, subscribe, getState, replaceReducer 4개의 함수가 있다
// console.log(countStore.getState()); // --> 리듀서가 리턴하는 데이터를 출력~~~

// subscribe는 우리에게 store 안에 있는 변화들을 알 수 있게 해준다 --> index.html에서 span태그에 두면 변화를 출력
const onChange = () => {
  // console.log("there was a change on the store");
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

/* 
// countStore.dispatch({ type: "ADD" }); // action을 발행한다~~ why? 리듀셔와 소통하기 위해서
// dispatch를 통해 action을 발행하면 리덕스는 리듀서를 호출한다~
// 즉 개발자가 리듀서와 소통하기 위해서는 dispatch를 발행해야한다
*/

/*
1. data의 store를 만든다
2. store에 있는 data를 수정할 리듀서를 연결하고
3. 메시지({type: "ADD"})를 리듀서의 액션에 보내면 된다 ==> 보내는 방법은 dispath를 사용
4. 그러면 우린 받은 메시지를 통해서 변화를 컨트롤 하면 cool
*/

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

// console.log(countStore.getState());

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
