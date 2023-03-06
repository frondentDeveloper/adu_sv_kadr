import React from "react";

const Personal = () =>{
    return(
        <div className="card" style={{border:"none"}}>
            <div className="card-body" style={{border:"none"}}>
                <h4>Shaxsiy ma'lumotlar</h4>
                <hr/>
                <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* J.SH.SH.I.R</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Passport berilgan sana</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="date"/></div>
                    </div>
                </div>
                <div>
                    <label className="mt-4">* Ism Familiya Sharf </label>
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
                <div className="mt-3" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Bo'lim</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Lavozim</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="text"/></div>
                    </div>
                </div>
                <div>
                    <label className="mt-4">* Lavozimida ish boshlagan sana </label>
                    <div><input style={{boxShadow:"none"}} className="form-control" type="date"/></div>
                </div>
                <div className="mt-4" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>* Ish turi</label>
                        <div>
                            <select style={{boxShadow:"none"}} className="form-select">
                                <option value="Asosiy">Asosiy</option>
                                <option value="Asosiy">O'rindosh</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width:"40%"}}>
                        <label>* Telefon raqami</label>
                        <div><input style={{boxShadow:"none"}} className="form-control" type="number"/></div>
                    </div>
                </div>
                <div>
                    <div><input style={{boxShadow:"none"}} className="form-control mt-5" type="file"/></div>
                </div>
            </div>
        </div>
    )
}

export default Personal;