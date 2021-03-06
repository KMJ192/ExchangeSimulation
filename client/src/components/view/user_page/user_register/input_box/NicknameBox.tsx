import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResultMsg } from '../../UserPageStyle';

interface Props{
    returnNickname: (data:string, re:boolean) => void;
}

function NicknameBox({ returnNickname }: Props) {
    const [nickname, setNickname] = useState("");
    const [afterDupCheck, setAfterDupCheck] = useState("");
    const [dupCheck, setDupCheck] = useState(false);
    const [warn, setWarn] = useState("");

    //=====blur μ²λ¦¬=====
    const blur = () => {
        if(!nickname){
            setWarn("π λλ€μμ μλ ₯ν΄μ£ΌμΈμ.");
            returnNickname("", false);
            return;
        }
        if(dupCheck === false){
            setWarn("π μ€λ³΅ νμΈν΄μ£ΌμΈμ.");
            returnNickname("", false);
            return;
        }
    }
    //=====blur μ²λ¦¬=====

    //=====μ€λ³΅ νμΈ=====
    const checkDuplicateNickName = async () => {
        if(!nickname){
            setWarn("π λλ€μμ μλ ₯ν΄μ£ΌμΈμ.");
            setDupCheck(false);
            returnNickname("", false);
            alert("λλ€μμ μλ ₯ν΄μ£ΌμΈμ.");
            return;
        }

        const response = await axios.post("/nickname_confirm", {nickname : nickname})
            .then(res => res.data)
            .catch(err => err);
        if(response.result === "1"){
            setWarn("π μ€λ³΅λ λλ€μ μλλ€.");
            returnNickname(".", false);
            return;
        }else if(response.result === "0"){
            setWarn("π μ¬μ©ν  μ μλ λλ€μ μλλ€.");
            setDupCheck(true);
            setAfterDupCheck(nickname); 
            returnNickname(nickname, true);
        }else{
            returnNickname("", false);
            alert("μ μ μλ μ€λ₯κ° λ°μνμ΅λλ€.");
        }
    }
    //=====μ€λ³΅ νμΈ=====

    useEffect(() => {
        //=====μ€λ³΅ νμΈ ν λλ€μ λ³κ²½μ¬λΆ νλ¨=====
        if(afterDupCheck && afterDupCheck !== nickname && dupCheck === true){
            //μ€λ³΅ νμΈ νλλ° λ°μ΄ν° λ³νλ₯Ό κ°μ§νλ©΄ μ΄κΈ°ν 
            setAfterDupCheck("");
            setDupCheck(false);
            setWarn("π μ€λ³΅ νμΈν΄μ£ΌμΈμ.");
            returnNickname("", false);
        }
        //=====μ€λ³΅ νμΈ ν λλ€μ λ³κ²½μ¬λΆ νλ¨=====
    }, [nickname, afterDupCheck, warn, dupCheck, returnNickname]);


    return (
        <div className="nickname-container">
            <label htmlFor="nickname-box">λ³λͺ</label>
            <br/>
            <input 
                onBlur={blur}
                id="nickname-box"
                className="input-box"
                type="text"
                placeholder="λ³λͺ μλ ₯"
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => 
                    setNickname(e.target.value)
                }
            />
            <button 
                className="user-page-btn duplicate-confirm"
                type="button"
                onClick={checkDuplicateNickName}
            >μ€λ³΅νμΈ</button>
            <ResultMsg 
                font={dupCheck} {...dupCheck}   
                className="warn-message"
            >{warn}</ResultMsg>
        </div>
    )
}

export default React.memo(NicknameBox);