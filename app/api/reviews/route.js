// Code to handle POST requests to create a new review (route.js)

import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { name, email, rating, comment } = await req.json();

    // Save the new review to the database
    const newReview = await prisma.testimonial.create({
      data: {
        name,
        email,
        rating: parseInt(rating),
        comment,
      },
    });

    return new Response(JSON.stringify(newReview), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create review" }), {
      status: 500,
    });
  }
}
