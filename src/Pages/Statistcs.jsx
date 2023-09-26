
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';


const COLORS = ['#FF444A', '#00C49F', '#FFBB28'];


const Statistcs = () => {

    const [totalDonation, SetTotalDonation] = useState(0);
    const [noFound, setNoFound] = useState('');
    const [donation, setDonation] = useState([]);
    const [totalDonatePercentage, setTotalPercentage] = useState(0);
    const [data, setData] = useState([
        { name: 'Total Donation', value: 100 },
        { name: 'Your Donation', value: 0 },
    ]);
 

    useEffect(()=> {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if (donatedItems) {
            setDonation(donatedItems);
            const total = donatedItems.reduce((preValue, CurrentItem)=> preValue + CurrentItem.price, 0);
            SetTotalDonation(total);
            const totalPercentage = ((total/6000)*100).toFixed(2);
            setTotalPercentage(totalPercentage);


            const updatedData = [
                { name: 'Total Donation', value: 100 },
                { name: 'Your Donation', value: parseFloat(totalPercentage) },
            ];

            // Set the updated data to the 'data' state
            setData(updatedData);

            
        }
        else {
            setNoFound("No Donations given yet");
        }
    }, []);

   

    console.log(donation);

    return (
        <div className='h-[80vh] flex justify-center items-center'>
         
            
            <PieChart width={800} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>



        </div>
    );
};

export default Statistcs;