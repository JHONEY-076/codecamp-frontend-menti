import { useState } from "react";

export default function CounterLetDocumentPage() {
  
  const[word,setword]=useState("안녕하세요");
  const[count,setcount]=useState(0);
  const[number,setnumber]=useState("000000");



  function onClickCountUp() {
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  function onClickChange(){
    
    setword("반갑습니다");
  }

  function onClickCount(){
    let count=Number(document.getElementById("rrr").innerText)+1;
    document.getElementById("rrr").innerText=count;
  }

  function onClickPlus(){
    setcount(++count);


  }

function onClickButton(){

let number=document.getElementById("eee").innerText=123456
document.getElementById("eee").innerText=number

}

function onClickButton2(){
  
  setnumber("12345678")



}



  return (
    <div>
      <div id="qqq">count</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!</button>
    
      <div id="rrr">{count}</div>

    <button id="zzz"onClick={onClickChange}>{word}</button>
    <button onClick={onClickCount}>카운트 증가</button>
    <button onClick={onClickPlus}>카운트 증가</button>
    
    
    <div id="eee">{number}</div>

    <button onClick={onClickButton}>인증번호 전송</button>
    <button onClick={onClickButton2}>인증번호 전송 </button>


    </div>
    
  );
}
