"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/db";
import paths from "@/paths";
import { auth } from "@/auth";

// zod schema
const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

// form state
interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors }
  }

  const session = await auth()
  if (!session || !session.user) {
    return { errors: { _form: ['You must be signed in to do this.'] } }
  }

  const topic = await db.topic.findFirst({
    where: { slug }
  })

  if (!topic) {
    return { errors: { _form: ['Cannot find topic.'] } }
  }

  return { errors: {} }
}
