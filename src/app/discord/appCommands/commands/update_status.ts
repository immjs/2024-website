import { NextRequest, NextResponse } from "next/server";

export const data = {
  name: "update_status",
  type: 1,
  description: "Updates the status on the immjs.dev website",
};

export function handler(req: NextRequest, json: any) {
  if (json.member.user.id !== process.env.DISCORD_OWNER_ID) {
    return NextResponse.json({
      type: 4,
      data: {
        content: "I cannot answer that\n-# お答えできません",
      },
    });
  }
  return NextResponse.json({
    type: 9,
    data: {
      custom_id: "new_status_modal",
      title: "Update Status",
      components: [
        {
          type: 1,
          components: [
            {
              type: 4,
              custom_id: "status",
              label: "New Status",
              style: 2,
              min_length: 1,
              max_length: 4000,
              required: true,
            },
          ],
        },
      ],
    },
  });
}
