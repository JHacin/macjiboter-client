import type { NextApiRequest, NextApiResponse } from "next";

type RevalidateCatWebhookPayload = {
  slug: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    res.status(401).json({ error: "Invalid token." });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Invalid method." });
    return;
  }

  if (!isRevalidateCatWebhookPayload(req.body)) {
    res.status(400).json({ error: "Bad request." });
    return;
  }

  try {
    const slug = `/muce/${req.body.slug}`;
    await res.revalidate(slug);

    res.status(200).json({
      status: "success",
      message: `Cat revalidated (slug: ${slug}).`,
    });
  } catch (err: unknown) {
    res.status(500).json({
      status: "error",
      message: err instanceof Error ? err.message : "Unknown",
    });
  }
}

function isRevalidateCatWebhookPayload(payload: unknown): payload is RevalidateCatWebhookPayload {
  return (
    !!payload &&
    typeof payload === "object" &&
    "slug" in payload &&
    typeof payload.slug === "string"
  );
}
