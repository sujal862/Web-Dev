import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

//     const [data, setdata] = useState([]);
//     useEffect(()=>{
//     fetch('https://api.github.com/users/himanshukandari14')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         setdata(data);
//     })
// },[])

    const data = useLoaderData();
    return (
        <div className=' bg-gray-600 p-4 m-6 flex flex-col items-center'>
        <div className=' m-4 text-white text-3xl'>
             Github Followers : {data.followers}
        </div>
        <img src={data.avatar_url} alt="avatar" width={300} />
        </div>
       
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sujal862')
    return response.json();
}  

/*
Notes : of Loader(used for optimization/fast) -> Pre-Fetching Data:
the loader function (githubInfoLoader) is used to fetch data for the component before it renders .Ensures the data is fetched before rendering the component, so the user doesn’t see an empty or loading state.
i.e bus link pa hover krna pa hi data fetch hojyga and cache ma store hojyga and jasa hi tum click kroga to turnt data display hojyga bina koi lag ka 
The useLoaderData hook in the component fetches the data returned by the loader(from main.jsx) and makes it available to the component(data)
*/
