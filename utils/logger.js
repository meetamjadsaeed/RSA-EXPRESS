// A simple logger using console.log (can be replaced with a more advanced logger like winston)
const logger = {
    error: (message) => {
        console.error(`ERROR: ${message}`);
    },
    info: (message) => {
        console.log(`INFO: ${message}`);
    },
};

module.exports = logger;
