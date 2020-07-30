import React,{useState} from 'react'
import { Button } from 'antd';
export default function Example(){
    const [count,setCount] =useState(0);

    return(
        <div>
            <p>{count}</p>
            <Button onClick={()=>setCount(count+1)}>更新</Button>
        </div>
    );
}