import React from "react";
import { Checkbox } from 'antd';
import {
    PlusCircleOutlined
} from '@ant-design/icons';

const Educate = () =>{

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

      
    
    return(
        <div className="card" style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
                <h4>Tamomlagan oliy ta'lim muassasi</h4>
                <hr/>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Ta'lim olgan davlat</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Ta'lim darajasi</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                </div>
                <div>
                    <label className="mt-4">* OTM nomi</label>
                    <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                </div>
                <div className="mt-4" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Tug'ilgan viloyati</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Tug'ilgan tumani</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                </div>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"80%"}}>
                        <label className="mt-5">* Mutahasisligi</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                    <div style={{width:"15%"}}>
                        <label className="mt-5">* Tamomlagan yili</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                </div>
                <div>
                    <Checkbox className="mt-5" onChange={onChange}>OTMga yo'nalishiga mosligi</Checkbox>
                </div>
                <div style={{fontSize:"18px", display:"flex", alignItems:"center", cursor:"pointer", width:"5%"}} className="mt-4">
                    <PlusCircleOutlined /> <p style={{fontSize:"17px", margin:"0 0 0 10px"}}>Qo'shish</p>
                </div>
            </div>
        </div>
    )
}

export default Educate