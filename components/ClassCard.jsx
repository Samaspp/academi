import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ClassCard({ id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://newsroomcdn.bugatti.com/w_3600,q_75/3giaqcjtpfk3-01-bugatti-chiron-profilee-auction.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Classroom
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CS6A
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/dashboard/${id}`}>
          <Button size="small">OPEN</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
