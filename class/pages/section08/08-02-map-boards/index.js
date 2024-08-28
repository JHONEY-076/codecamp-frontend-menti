import { useQuery,gql } from "@apollo/client"


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





export default function StaticRoutingMovedPage(){

const {data}=useQuery(FETCHBOARDS)

console.log(data?.fetchBoards)

return (
<div>
    {data?.fetchBoards.map(el=>(
        <div key={el.number}>
            <span>
                <input type="checkbox"/>
            </span>
            <span style={{margin:"10px"}} >{el.number}</span>
             <span style={{margin:"10px"}} >{el.title}</span> 
             <span style={{margin:"10px"}} >{el.writer}</span>
        </div>
    ))}
  

    </div>
    )

}