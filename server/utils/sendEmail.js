const emailServer = require("../email/server");
const { errCode0002 } = require("../errors");

module.exports = (email, onSuccessfulSending, onError) => emailServer.send(email, (err, info) => {
    if (err) {
        /**
         * Unhandled email sending
         * error
         */
        onError(err);

        /**
         * Return from func
         */
        return;
    }

    /**
     * Update purchase status
     * with "sended" enum
     */

    return onSuccessfulSending(info);
});