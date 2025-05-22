import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";

const handler = createMcpHandler(
	(server) => {
		server.tool(
			"pingpong",
			"Ping Pong message",
			{ ping: z.number().int().min(2) },
			async ({ ping }) => {
				return {
					content: [
						{ type: "text", text: `You said ${ping} I say ${ping}-pong` },
					],
				};
			},
		);
	},
	{},
	{
		basePath: "/api",
		verboseLogs: true,
	},
);

export { handler as POST };

export async function GET(request: Request) {
	const postRequest = new Request(request.url, {
		method: "POST",
		headers: request.headers,
		body: request.body,
	});

	return handler(postRequest);
}
