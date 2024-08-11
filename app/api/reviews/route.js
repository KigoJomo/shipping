// app/api/reviews/route.js

import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
}
