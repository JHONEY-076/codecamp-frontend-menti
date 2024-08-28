import { useQuery,gql, useMutation } from "@apollo/client"
import { Fragment } from "react"


const FETCHBOARDS=gql`
query{
    fetchBoards(page:1){
        number
        writer
        title
        contents
    }
}

`


const DELETE_BOARD =gql `

mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
        message

    
    }

}



`




export default function StaticRoutingMovedPage(){

const {data}=useQuery(FETCHBOARDS)

const[deleteBoard]=useMutation(DELETE_BOARD)


console.log(data?.fetchBoards)

const onClickDelete=(event)=>{
Number(event.target.id)
deleteBoard({
    variables:{number:Number(event.target.id)},
    refetchQueries:[{query:FETCHBOARDS}]
})

}


return (
<div>
    {/*특별한 이유가 없으면 Fragment로 감싸자!! <div />는 1개더 그려야되서 조금 느려짐*/}
    {data?.fetchBoards.map(el=>(
        // 1. 프레그먼트란? <> </>, <Fragment></Fragment>
        // 2. 프레그먼트에 key 입력하는 방법? <Fragment key={1}></Fragment>
        <div key={el.number}>  { /*  index는 게시글을 삭제할때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음. */}
            <span>
                <input type="checkbox"/>
            </span>
            <span style={{margin:"10px"}} >{el.number}</span>
             <span style={{margin:"10px"}} >{el.title}</span> 
             <span style={{margin:"10px"}} >{el.writer}</span>
             <span>
                <button id={el.number}  onClick={onClickDelete}>삭제</button>
             </span>
        </div>
    ))}
  

    </div>
    )

}