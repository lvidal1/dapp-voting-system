import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Candidate = ({ candidate }) => {
    return (
        <Card className="w-64 mx-auto">
            <CardHeader floated={false} className="h-48">
                <img src={candidate.img_profile} alt="profile-picture" className="w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-grey" className="mb-2">
                    {candidate.name}
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    Candidate #{candidate.id}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Button>Vote</Button>
            </CardFooter>
        </Card>
    );
}

export default Candidate;