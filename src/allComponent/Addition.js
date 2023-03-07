import React,{useState} from "react";
import { Checkbox, Radio } from 'antd';
import {
    PlusCircleOutlined
} from '@ant-design/icons';

const Addition = () =>{
    const [value, setValue] = useState("");

    const onChange2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return(
       <>
        <div className="card" style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
                <h4>Xorijiy til bilish darajasi</h4>
                <hr/>
                <div className="mt-4" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Til nomi</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="rus">Rus tili</option>
                                <option value="english">Ingilis tili</option>
                                <option value="uzbek">Uzbek tili</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Bilish darajasi</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="a1">A1</option>
                                <option value="b1">B1</option>
                                <option value="c1">C1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="mt-5">Sertifikatni yuklang</label>
                    <div><input style={{boxShadow:"none"}} className="form-control " type="file"/></div>
                </div>
                <div style={{fontSize:"18px", display:"flex", alignItems:"center", cursor:"pointer", width:"5%"}} className="mt-4">
                    <PlusCircleOutlined /> <p style={{fontSize:"17px", margin:"0 0 0 10px"}}>Qo'shish</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className="card" style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
                <h4>Mukofotlanganligi</h4>
                <hr/>
                <div>
                    <label className="mt-3">Davlat mukofoti</label>
                    <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                </div>
                <div>
                    <label className="mt-5">Idoraviy mukofoti</label>
                    <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="card " style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
                <h4>Ilmiy daraja</h4>
                <hr/>
                <div>
                    <Checkbox className="mt-3" onChange={onChange}>Ilmiy darajasiz</Checkbox>
                </div>
                <div className="mt-4" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label> Fan nomzodi (PhD) olgan hudud</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="rus">Mahalliy</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label> Fan dokdori (DSc) olgan hudud</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="a1">Mahalliy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-4" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>Fan nomzodi (PhD)</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="rus">Tarix fanlari</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>Fan dokdori (DSc)</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="a1">Tarix fanlari</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h4 style={{margin:"30px 0 20px 0"}}>Ilmiy unvoni</h4>
                <hr/>
                <div>
                    <div>
                        <Radio.Group onChange={onChange2} value={value} className="mt-2">
                            <Radio value={1}>Professor</Radio>
                            <Radio value={2}>Dotsent</Radio>
                            <Radio value={3}>Unvonsiz</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <h4 style={{margin:"30px 0 20px 0"}}>Index</h4>
                <hr/>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"10%"}}>
                        <label>* Index</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                    <div style={{width:"85%"}}>
                        <label>* Google scholar</label>
                        <div><input placeholder="Link kiriting (https://) bilan" style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Addition;