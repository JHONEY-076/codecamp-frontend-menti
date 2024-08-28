import { useState } from "react";

export default function Login(){

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[check,setcheck]=useState("");

    const[erremail,seterremail]=useState();
    const[errpassword,seterrpassword]=useState();
    const[errcheck,seterrCheck]=useState();



    const onChangeEmail=(event)=>{
        setemail(event.target.value)
        if(event.target.value!==""){
            seterremail("");
        }
    }


    const onchangePassword=(event)=>{
        setpassword(event.target.value)
        if(event.target.value!==""){
            seterrpassword("");
        }
    }

    const onChangeCheck=(event)=>{
        setcheck(event.target.value)
        if(event.target.value!==""){
            seterrCheck("");
        }
    }


    const onClicksubmit=(event)=>{

        if(email.includes("@")===false){
            seterremail("이메일 주소를 다시 확인해주세요")
        }
       else if(!password){
            seterrpassword("비밀번호를 입력해주세요")
        }
       else if(password!==check){
            seterrCheck("비밀번호가 같지 않습니다.")
        }
       else if(email.includes("@")===true&&password&&password===check&&email){
        alert("회원가입을 축하합니다")
       }
       

    }


    




return(
<div>
<div>이메일</div>
<input type="text" onChange={onChangeEmail}/>
<div style={{ color: "red" }}>{erremail}</div>

<div>비밀번호</div>
<input type="text" onChange={onchangePassword}/>
<div style={{ color: "red" }}>{errpassword}</div>

<div>비밀번호 확인</div>
<input type="text" onChange={onChangeCheck}/>
<div style={{ color: "red" }}>{errcheck}</div>


<button onClick={onClicksubmit}>가입하기</button>


</div>
)
}