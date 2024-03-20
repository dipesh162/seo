'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([])
  useEffect(()=>{
    let url = 'https://meithee.in/hihres/api/position/open'
    fetch(url)
    .then((res)=>res.json())
    .then((res)=> {
      setData(res.data)
      console.log(res.data)
    })

    console.log(data)
  },[])

  return (
    <main className="">
      {
        data.data?.map((data)=>(
          (
            <div className="mb-3">
              <Link href={`/job-list/${data.id}?title=${data.job_title}&location=${data.work_location}&description=${data.job_description}`}>{data.id}</Link >
              {/* <h1>{data.prospect_id}</h1>
              <h1>{data.role_type}</h1>
              <h1>{data.hiring_type}</h1>
              <h1>{data.job_title}</h1>
              <h1>{data.job_location_country}</h1>
              <h1>{data.job_location_state}</h1>
              <h1>{data.job_location_city}</h1>
              <h1>{data.work_location}</h1>
              <h1>{data.experience}</h1>
              <h1>{data.job_description}</h1>
              <h1>{data.contract_duration}</h1>
              <h1>{data.ado_id}</h1>
              <h1>{data.status}</h1>
              <h1>{data.applicant_count}</h1> */}
            </div>
        )
        ))
      }
    </main>
  );
}
