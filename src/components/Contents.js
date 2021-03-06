import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Bar,Doughnut, Line} from "react-chartjs-2"

const Contents = () => {

    const [confirmedData, setConfirmedData] = useState({
        labels:["1월","2월","3월"],
                datasets: [
                    {
                        label:"국내 누적 확진자",
                        backgroundColor:"salmon",
                        fill:true,
                        data: [10,5,3]
                    }
                ]
    });

    const [quarantinedData, setQuarantinedData] = useState({
        labels:["1월","2월","3월"],
        datasets: [
            {
                label:"월별 격리자 현황",
                borderColor:"salmon",
                fill:false,
                data: [10,5,3]
            }
        ]
    });

    const [comparedData, setcomparedData] = useState({
        labels:["1월","2월","3월"],
        datasets: [
            {
                label:"월별 격리자 현황",
                borderColor:"salmon",
                fill:false,
                data: [10,5,3]
            }
        ]
    });

    useEffect(() => {
        
        const fetchEvents = async () => {
            const res= await axios.get("https://api.covid19api.com/total/dayone/country/kr");
            console.log(res);
            makeData(res.data);
            // fetch("https://api.covid19api.com/total/dayone/country/kr")
            // .then(data=>data.json())
            // .then(js=>console.log(js));
        }
        const makeData = (items) =>{
            const arr= items.reduce((acc, cur)=>{
                const currentDate= new Date(cur.Date);

                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed=cur.Confirmed;
                const active=cur.Active;
                const death=cur.Deaths;
                const recovered=cur.Recovered;

                const findItem= acc.find(a=> a.year === year && a.month=== month)
            
                if(!findItem){
                    acc.push(
                        {
                            year:year, month: month,date:date, confirmed,active,death,recovered
                        }
                    )
                }
                if(findItem && findItem.date< date){
                    findItem.active=active;
                    findItem.death=death;
                    findItem.date=date;
                    findItem.year=year;
                    findItem.month=month;
                    findItem.recovered=recovered;
                    findItem.confirmed=confirmed;
                }
                return acc;
            },[])
           
            const labels= arr.map(a=> `${a.month+1}월`)
            setConfirmedData({
                labels,
                datasets: [
                    {
                        label:"국내 누적 확진자",
                        backgroundColor:"salmon",
                        fill:true,
                        data: arr.map(a=>a.confirmed)
                    }
                ]
            })

            setQuarantinedData({
                labels,
                datasets: [
                    {
                        label:"월별 격리자 현황",
                        borderColor:"salmon",
                        fill:false,
                        data: arr.map(a=>a.active)
                    }
                ]
            })
            const last=arr[arr.length-1]
            setcomparedData({
                labels:["확진자","격리해제","사망"],
                datasets: [
                    {
                        label:"누적 확진,해제,사망 비율",
                        backgroundColor:["#ff3d67","#059bff","#ffc233"],
                        borderColor:["#ff3d67","#059bff","#ffc233"],
                        fill:false,
                        data: [last.confirmed,last.recovered,last.death]
                    }
                ]
            })
        }


        fetchEvents();
    }, [])


    return (
        <section>
        <h2>국내 코로나 현황</h2>
        <div className="contents">
            <div>
                <Bar 
                data={confirmedData}
                 options={
                        {   title:{
                                    // display: true, text:"누적 확진자 추이", fontsize:16,
                            },
                            legend: {
                                display: true, position:"bottom" // label 숨기기
                            },
                        }
                    }
                    />
            </div>
            <div>
                <Line 
                data={quarantinedData}
                 options={
                        {   title:{
                                    display: true, text:"월별 격리자 현황", fontsize:16,
                            },
                            legend: {
                                display: true, position:"bottom" // label 숨기기
                            },
                        }
                    }
                    />
            </div>
            <div>
                <Doughnut 
                data={comparedData}
                 options={
                        {   title:{
                                    display: true, text:`누적 확진, 해제, 사망 (${new Date().getMonth+1}월)`, fontsize:16,
                            },
                            legend: {
                                display: true, position:"bottom" // label 숨기기
                            },
                        }
                    }
                    />
            </div>

        </div>
      </section>
    )
}

export default Contents
