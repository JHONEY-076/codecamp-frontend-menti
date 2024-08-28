import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";



export default function CreateProductMovedPage(){

const router=useRouter()
console.log(router)


const {data}=useQuery(FETCHPRODUCT, {
    variables:{number:Number(router.query.number)}
})


console.log(data);

return(
    <div>
        <div>{router.query.number}번 상품 등록이 완료되었습니다.</div>
        <div>판매자: {data?.fetchProduct?.}</div>
        <div>상품명: {data?.fetchProduct?.}</div>
        <div>상품내용: {data?.fetchProduct?.}</div>
        <div>상품가격: {data?.fetchProduct?.}</div>
    </div>
)

}