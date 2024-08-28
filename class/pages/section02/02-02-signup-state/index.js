// import { useState } from "react";

// export default function SignupStatePage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");

//   function onChangeEmail(event) {
//     // 이벤트 핸들러 함수

//     console.log(event); //나의 행동
//     console.log(event.target); // 작동된 태그
//     console.log(event.target.value); //작동된 태그에 입력된 값

//     setEmail(event.target.value);
//   }

//   function onChangePassword(event) {
//     setPassword(event.target.value);
//   }

//   function onClickSignup(event) {
//     console.log(email); //진짜 포장이 잘 되었는지 확인해보기
//     console.log(password); //진짜 포장이 잘 되었는지 확인해보기

//     // 1. 검증 하기
//     if (email.includes("@") === false) {
//       //alert("이메일이 옳바르지 않습니다.!! @가 없음 !!");
//       //   document.getElementById("my_error").innerText ="이메일이 옳바르지 않습니다.!! @가 없음 !!"; =>옛날 방식
//       setEmailError("이메일이 옳바르지 않습니다.!! @가 없음 !!");
//     } else {
//       // 2. 벡엔드 컴퓨터에 보내주기(벡엔드 개발자가 만든 함수, 즉 , API)
//       // => 나중에
//       // 3. 성공 알람 보여주기
//       alert("회원가입을 축하합니다!!");
//     }
//   }

//   return (
//     <div>
//       이메일: <input type="text" onChange={onChangeEmail} />
//       {/* <div id="my_error"></div>  ==> 옛날 방식*/}
//       <div>{emailError}</div>
//       비밀번호: <input type="password" onChange={onChangePassword} />
//       <button onClick={onClickSignup}>회원가입</button>
//     </div>
//   );
// }

import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorId, setErrorId] = useState("");
  const [error_pw, setErrorPw] = useState("");

  function onChangeId(event) {
    setId(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    if (id == "") {
      setErrorId("아이디를 다시 입력해주세요");
    }

    if (password == "") {
      setErrorPw("비밀번호를 다시 입력해주세요");
    }

    if (id !== "" && password !== "") {
      alert("아이디와 비밀번호가 모두 입력되었습니다. 로그인을 시작합니다.");
    }
  }

  return (
    <div>
      <div>로그인</div>
      <div>아이디</div>
      <input type="text" onChange={onChangeId} />
      <div style={{ color: "red" }}>{errorId}</div>
      <div>비밀번호</div>
      <input type="text" onChange={onChangePassword} />
      <div style={{ color: "red" }}>{error_pw}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
