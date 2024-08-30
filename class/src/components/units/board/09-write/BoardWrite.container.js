
import {useMutation}from '@apollo/client'
import {useState}from 'react'
import {나의그래프큐엘셋팅,UPDATE_BOARD} from'./BoardWrite.queries'            //export는 골라서 가져오기 가능
import BoardWriteUI from './BoardWrite.presenter'               //export default로 한개만 가져오기 가능
// import Asdadadasdasdsadf from './BoardWrite.presenter'          //export default로 이름 바꿔서 가져오기
// import Asdadadasdasdsadf,{apple} from './BoardWrite.presenter' //export default와 export 함께 가져오기
import * as S from './BoardWrite.styles'                       //export 한방에 다 가져오기
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router'
S.BlueButton                                                   //export 한방에 다 가져오기
S.RedInput                                                     //export 한방에 다 가져오기

export default function BoardWrite(props){

  const router=useRouter()

    const [writer,setWriter]=useState("")
    const [title,setTitle]=useState("")
    const [contents,setContents]=useState("")

    const [나의함수] =useMutation(나의그래프큐엘셋팅)
    const [updateBoard] =useMutation(UPDATE_BOARD)



    const onClickSubmit =async()=>{
      try{

        // mutation 코드 생성
        const result =await 나의함수({
          variables: {                   //variables 이게 $ 역할을 함
            writer: writer,
            title: title,
            contents: contents
          }
        })
        console.log(result)
       router.push(`/section09/09-03-boards/${result.data.createBoard.number}`) 
    
      }catch(error){
        alert(error.message)
  }
}



    const onClickUpdate=async()=>{
    // 여기서 수정하기 하자

    try{
     const result= await updateBoard({
        variables:{
            number: Number(router.query.number), // 주소창은 문자열로 입력되기 때문에 숫자로 바꿔주어야 한다.
            writer: writer,
            title: title,
            contents: contents
        }

    })
      console.log(result)
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)

    }
    catch(error){
      alert(error.message)
    }
  }



  






    const onchangeWriter= (event)=>{
        setWriter(event.target.value)

    }

    const onChangeTitle = (event)=>{
      setTitle(event.target.value)
    }


    const onChangeContents= (event)=>{
      setContents(event.target.value)
    }







return(
<div>

    <div>#####################여기는 컨테이너입니다 ##############</div>
    <BoardWriteUI 
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onchangeWriter={onchangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
    />

 <div>##############여기는 컨테이너입니다####################</div>

</div>

)


}