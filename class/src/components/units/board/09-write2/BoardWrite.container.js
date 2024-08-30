
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
       router.push(`/section09/09-04-boards/${result.data.createBoard.number}`) 
    
      }catch(error){
        alert(error.message)
  }
}



    const onClickUpdate=async()=>{
    // 여기서 수정하기 하자

    try{


      // 변경된 데이터만 뮤테이션으로 서버로 보낸다.
      // 그러므로 기존의 입력하지 않은 데이터는 뮤테이션으로 
      //요청하지 않고, 입력된 데이터만 뮤테이션으로 보내지기 때문에 
      //기존의 state에 있는 빈문자열을 뮤테이션으로 인해 삭제되는 느낌을 
      //없애고, 변경된 데이터와 기존 데이터를 보여줄 수 있다.
      const myvariables={
        number:Number(router.query.number)

      }
      if(writer){
        myvariables.writer=writer
      }

      if(title){
        myvariables.title=title
      }

      if(contents){
        myvariables.contents=contents
      }

     const result= await updateBoard({
        variables: myvariables

    })
      console.log(result)
      router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)

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
        data={props.data} //undefined 이거나 data 이거나 둘 중 하나! 
    />

 <div>##############여기는 컨테이너입니다####################</div>

</div>

)


}