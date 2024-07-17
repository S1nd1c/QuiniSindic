import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Winner from '../components/Winner';

function HallOfFame() {
    const [hof, setHof] = useState("");

    useEffect(() => {
        //TODO: make a helper function to query all this in the future
        const fetchHof = async () => {
            const url = "https://f7ekq2o916.execute-api.eu-west-3.amazonaws.com/dev/hall-of-fame";
            try {
                const response = await axios.get(url, { crossdomain: true });
                setHof(response.data)
            } catch (error) {
                console.error("Unable to query Hall of fame", error);
            }
        }
        if (hof == "") {
            fetchHof();
        }
    }, []);


    return (
        <div className='h-full bg-euro-blue'>
            <div className='flex justify-center'>
                <span className='text-2xl text-white'>Hall Of Fame</span>
            </div>
            <div className='flex justify-center'>
                <span></span>
                <div className='h-full'>
                    {
                        hof != "" ? hof.data.map((item, index) => (
                            <Winner key={index} data={item}/>
                        )) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default HallOfFame