import { useLoaderData, useParams } from "react-router-dom"


export default function CareersDetails() {
    const {id} = useParams()
    const career = useLoaderData()


  return (
    <div className="careers-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum color sit amet consectur adipisicing elits.Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa.</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader= async({params})=> {
    const {id} = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error('Could not find that specific career')
    }

    return res.json()
}
