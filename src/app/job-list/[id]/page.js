import React from 'react'

// export const metadata = {
//   openGraph: {
//     type: 'article',
//     url: `${process.env.NEXT_APP_URL}${FacilityData.link}`,
//     title: `${FacilityData.name} ${FacilitiesMetaTitle}`,
//     description: `${FacilityData.name} - ${FacilitiesMetaDescription}`,
//   },
//   title: `${FacilityData.name} ${FacilitiesMetaTitle}`,
//   description: `${FacilityData.name} - ${FacilitiesMetaDescription}`,
// }

export async function generateMetadata(
  { params, searchParams },
  parent
){
  const {title} = searchParams
  const {description} = searchParams

  return {
    title: title,
    description: description,
  }
}

function Job({params,searchParams}) {

  const {id} = params
  const {title} = searchParams
  const {location} = searchParams
  const {description} = searchParams

  return (
    <>
      <h1>Job</h1>
      <h2>{title}</h2>
      <h2>{location}</h2>
      <h2>{description}</h2>
    </>
  )
}

export default Job