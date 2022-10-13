import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';


const Chart = () => {
    const [bars, setBars] = useState([]);
    useEffect( ()=>{

        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const barLoaded = data.data.data;
            const barData = barLoaded.map( bar =>{
                const parts = bar.name
                const totalLast = bar.total
                const singleData = {
                    name: parts,
                    total: totalLast
                }
                return singleData;
            })
            console.log(barData);
            setBars(barData)          
        })
    }, [])

    return (
    <div>
      
        <div className='text-center mt-3 fs-2 fw-semibold'> Programming Language    Bar-Chart</div>
                <BarChart width={700} height={520} data={bars}>
                    <Bar dataKey="total" fill="#87CEEB" />
                    <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
             <Tooltip></Tooltip>
        </BarChart>   
        </div>
    );
};

export default Chart;