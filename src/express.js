// Creating our express application
const express = require("express");
const app = express();

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

app.post("/api/v1/auth/google", async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    const user = await db.user.upsert({
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture },
    });
    req.session.userId = user.id;

    res.status(201);
    res.json(user);
});
