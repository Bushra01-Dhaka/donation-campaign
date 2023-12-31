import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip} from 'recharts';


const COLORS = ['#FF444A', '#00C49F', '#FFBB28'];


const Statistcs = () => {

    const [noFound, setNoFound] = useState('');
    const [donation, setDonation] = useState([]);
    const [totalDonatePercentage, setTotalPercentage] = useState(0);
    const [data, setData] = useState([
        { name: 'Total Donation', value: 100 },
        { name: 'Your Donation', value: 0 },
    ]);

    console.log(noFound);
    console.log(totalDonatePercentage);
    // 
    console.log(donation);
    console.log(donation.length);
    // 

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if (donatedItems) {
            setDonation(donatedItems);
            const totalPercentage = (((donatedItems.length) / 12) * 100).toFixed(2);
            setTotalPercentage(totalPercentage);

            console.log("your percentage", totalPercentage);

            const updatedData = [
                { name: 'Total Donation', value: parseFloat(100 - totalPercentage) },
                { name: 'Your Donation', value: parseFloat(totalPercentage) },
            ];


            setData(updatedData);


        }
        else {
            setNoFound("No Donations given yet");
        }

    }, []);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        // Calculate the position for the label
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        // Display the percentage with a percentage sign
        const percentage = `${(percent * 100).toFixed(2)}%`;

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {percentage}
            </text>
        );
    };

    console.log(donation);

    return (
        <div className='container mx-auto md:h-[80vh] flex justify-center items-center'>


            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    // label={({ name, value }) => `${name}: ${(value.toFixed(2))}%`}
                    labelLine={false} 
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

{/* 
                    {data.map((entry, index) => (
                        <Label
                            key={`label-${index}`}
                            position="center"
                            value={`${entry.value.toFixed(2)}%`}
                            fill={COLORS[index % COLORS.length]}
                            fontSize={16}
                        />
                    ))} */}

                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>



        </div>
    );
};

export default Statistcs;