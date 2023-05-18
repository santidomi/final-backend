import { Messages } from "../schemas/message.js";

export const socket = {

    init: (io) => {

        io.on('connection', async (socket) => {

            socket.on('chat message', async (msg) => {
                io.emit('chat message', msg);
                await Messages.create({ msg })
            });


        });

    }
};