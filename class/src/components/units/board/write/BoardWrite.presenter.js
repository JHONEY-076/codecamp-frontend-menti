import { RedInput,BlueButton } from "./BoardWrite.styles"

import * as S from './BoardWrite.styles'                       //export 한방에 다 가져오기
S.BlueButton                                                   //export 한방에 다 가져오기
S.RedInput                                                     //export 한방에 다 가져오기







export default function BoardWriteUI(props){






return(

    <div>
    <div>@@@@@@@@@@@@@@@여기는 프리젠터입니다@@@@@@@@@@@@@@@</div>
    <div>
        작성자: <RedInput type="text" onChange={props.bbb}/>
        제목: <input type='text' onChange={props.ccc}/> 
        내용 : <input type='text' onChange={props.ddd}/>
        <BlueButton   onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
    </div>

    <div>@@@@@@@@@@@@@@@여기는 프리젠터입니다@@@@@@@@@@@@@@@</div>

    </div>
    
)

}

export const apple=3;