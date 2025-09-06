const data=[
    {   name:`anand mahindra`,
        img:"https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs=",
        review:"wefwef"
    },
    {name:`anand mahindra`,
        img:"https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs=",
        review:"efaas`"
    },
    // {name:`anand mahindra`,
    //     img:"",
    //     review:""
    // },
    // {name:`anand mahindra`,
    //     img:"",
    //     review:""
    // },
    // {name:`anand mahindra`,
    //     img:"",
    //     review:""
    // }
];

export default function Review(){
    return(
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                {data.map((d , index)=>{
                    return(
                    <div key={index}>
                        <div> <img src="{d.img}" alt="hcg" /></div>
                        <div>
                            <p>{d.name}</p>
                            <p>{d.review}</p>
                            <button>read more</button>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    )
}