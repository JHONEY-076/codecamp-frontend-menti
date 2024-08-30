import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container"
import { useQuery,gql } from "@apollo/client"
import{useRouter}from "next/router"


// 해당 페이지 번호의 저장된 데이터를 데이터베이스에서 조회하여 수정하기 창에다가 
// 데이터를 나타나게 하기위해서 만들어낸 것이다.

const FETCHBOARD=gql`
query fetchBoard($number:Int){
    fetchBoard(number:$number){
        number
        writer
        title
        contents
    }
}

`





export default function GraphqlMutationPage(){
   
  const router=useRouter()



  const {data}=useQuery(FETCHBOARD,{
    variables:{  number:Number(router.query.number)}
})





    //한 줄 일때는 괄호() 필요 없음

    return(
      <div>
    <div>##################여기는 페이지 입니다################</div>
    <BoardWrite 
    isEdit={true} 
    data={data}
    />
    <div>#####################여기는 페이지 입니다#################</div>
    </div>


    ) 
}