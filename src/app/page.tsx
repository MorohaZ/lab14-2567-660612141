"use client";
import { Container, Title } from "@mantine/core";

import AddReview from "@components/AddR"
import Review from "@components/Review"
import Pagnigation from '@components/Pagnigation'
import Footer from "@components/Footer";

import { Reviews } from "@lib/review";

export default function Home() {
  return (
    <Container size="600px">
      
      <Title order={2}>Food Review 🍕</Title>

      <AddReview/>

      {Reviews.map((review) => (
        <Review 
          key = {review.id}
          {...review}
        />
      ))}

      <Pagnigation/>

      <Footer year="2024" name="Chayanat Hongnueng" studentId="660612141"/>

    </Container>
  );
}
