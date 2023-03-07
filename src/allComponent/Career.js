import React, {useEffect, useState} from "react";
import { Radio } from 'antd';

const Career = () =>{

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    const [pedagok, setPedagok] = useState("")
    const [rahbar, setRahbar] = useState("")
    const [boshqa, setBoshqa] = useState("")
    const [rektor, setRektor] = useState("")

    let a = pedagok, b = rahbar, c = boshqa, d = rektor;
    let birinchi = (a + b + c + d) / 12

    let ikkinchi = (a + b + c + d) % 12

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChange2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
    };

    return(
        <div className="card" style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
               <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
                    <h4>Ish tajribasi (Joriy lavozimgacha)</h4>
                    <h4>Jami ish tajribasi: {Math.floor(birinchi) + "yil "}{ikkinchi + " oy"}</h4>
               </div>
                <hr/>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Pedagogik ish tajribasi (oyda)</label>
                        <div><input onChange={(e)=>setPedagok(+e.target.value)} style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Rahbarlik ish tajribasi (oyda)</label>
                        <div><input onChange={(e)=>setRahbar(+e.target.value)} style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                </div>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label className="mt-5">* Boshqa joylarda ish tajribasi (oyda)</label>
                        <div><input onChange={(e)=>setBoshqa(+e.target.value)} style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label className="mt-5">* Rektorlikdagi ish tajribasi (oyda)</label>
                        <div><input onChange={(e)=>setRektor(+e.target.value)} style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                </div>
                <div>
                    <label className="mt-4">* Lavozimga tayillanguniga qadar egallagan lavozimi</label>
                    <div>
                        <Radio.Group onChange={onChange} value={value} className="mt-2">
                            <Radio value={1}>Prorektor</Radio>
                            <Radio value={2}>Dekan</Radio>
                            <Radio value={3}>Kafedra mudiri</Radio>
                            <Radio value={4}>Vazirlik va idora</Radio>
                            <Radio value={5}>Professor o'qituvchi</Radio>
                            <Radio value={6}>Mahalliy davlat hokimyat idoralari</Radio>
                            <Radio value={7}>Hususiy sektor</Radio>
                            <Radio value={8}>OTM Bo'lim boshlig'i</Radio>
                            <Radio value={9}>Dekan o'rinbosari</Radio>
                            <Radio value={10}>Rektor</Radio>
                        </Radio.Group>
                    </div>
                </div>

                <div>
                    <label className="mt-4">* Vazirlik va idoradagi raxbar lavozimga egaligi</label>
                    <div>
                        <Radio.Group onChange={onChange2} value={value2} className="mt-2">
                            <Radio value={1}>Avval</Radio>
                            <Radio value={2}>Hozirda</Radio>
                            <Radio value={3}>Lavozimga ega emas</Radio>
                        </Radio.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career;