import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistics = () => {

    const dataa = useLoaderData();
    const topicArray = Object.entries(dataa);
    const mainTopicArray = topicArray[1];
    const topics = mainTopicArray[1];
    console.log(topics)

    return (

        <div>

            <div style={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <h1>Here Are Given Chart of Quize Items</h1>
            </div>


            <BarChart width={500}
                height={300}
                data={topics} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                {
                    topics.map(topic => <Bar dataKey="total" fill="#8884d8" />)
                }
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div >
    );
};

export default Statistics;