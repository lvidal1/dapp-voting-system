import Candidate from '../components/Candidate';
import { Typography } from "@material-tailwind/react";

import candidates from '../data/candidates.json';


export default function Home() {

  return (
    <>
      <Typography variant="h1" color="white" className="text-center my-5">Election 2022</Typography>
      <p className="text-center text-white my-5">Choose your preferred candidate:</p>
      <div className="max-w-screen-md mx-auto my-5">
        <div className="grid grid-cols-2 gap-4">
          {
            candidates.map((candidate) => <Candidate key={candidate.id} candidate={candidate}></Candidate>)
          }
        </div>
      </div>
    </>
  )
}
