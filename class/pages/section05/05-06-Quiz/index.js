import { useState } from "react";
import { useMutation } from "@apollo/client"

const 나의그래프큐엘셋팅=gql`


`



export default function Productpage(){
    const[seller,setSeller]=useState();
    const[product,setProduct]=useState();
    const[content,setContent]=useState();
    const[price,setPrice]=useState();



    const[나의함수]=useMutation(나의그래프큐엘셋팅)






const CreateProductPage=async()=>{

try{

const result=await 나의함수({
    variables:{
        seller:seller,
        product:product,
        content:content,
        price:price

    }
})

console.log(result);
console.log(result.data.createProduct.number)

Router.push(`/section05/05-06-Quiz/${result.data.createProduct.number}`)



}catch(error){
    alert(error.message)
}

}

const onchangeSeller=(event)=>{
    setSeller(event.target.value)
}


const onchangeProduct=(event)=>{
    setProduct(event.target.value)
}


const onchangeContent=(event)=>{
    setContent(event.target.value)
}


const onchangePrice=(event)=>{
    setPrice(event.target.value)
}



return(

    <div>
        판매자: <input type="text" onChange={onchangeSeller}/>
        상품명: <input type="text" onChange={onchangeProduct}/>        
        상품내용: <input type="text" onChange={onchangeContent}/>
        상품가격: <input type="text" onChange={onchangePrice}/>

        <button onClick={CreateProductPage} >상품 등록</button>


    </div>



)


}