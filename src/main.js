import { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import "./main.css"
import Personal from './allComponent/Personal';
import Career from './allComponent/Career';
import Educate from './allComponent/Educate';



const Main = () =>{

    const steps = [
        {
          title: "Saxsiy ma'lumotlar",
          content: <Personal/>,
        },
        {
          title: "Mehnat faoliyati",
          content: <Career/>,
        },
        {
          title: "Ta'lim ma'lumotlar",
          content: <Educate/>,
        },
        {
            title: "Qo'shimcha ma'lumotlar",
            content: 'Last-content',
          },
      ];

      const { token } = theme.useToken();
      const [current, setCurrent] = useState(0);
      const next = () => {
        setCurrent(current + 1);
      };
      const prev = () => {
        setCurrent(current - 1);
      };
      const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
      }));
      const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
      };

    return(
        <div className="conteiner-fluid">
            <div className="row mt-5" style={{ display:"flex",justifyContent:"center",padding:"0",margin:"0"}}>
                <div className="col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                <Steps  current={current} items={items} />
                        <div style={{contentStyle, backgroundColor:"white", padding:"20px", margin:"20px 0"}}>{steps[current].content}</div>
                        <div style={{marginTop: 24, }}>
                            {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                            )}
                            {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                            )}
                            {current > 0 && (
                            <Button
                                style={{
                                margin: '0 8px',
                                }}
                                onClick={() => prev()}
                            >
                                Previous
                            </Button>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Main;