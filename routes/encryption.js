const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');
const createRSAAdapter = require('../utils/rsaAdapter');

// Load RSA keys (could be from env variables or a secure store)
const publicKey = process.env.RSA_PUBLIC_KEY || "your-public-key-here";
const privateKey = process.env.RSA_PRIVATE_KEY || "your-private-key-here";

// Create the RSA adapter
const rsaAdapter = createRSAAdapter();

// Helper function to validate input data
const validateInput = (data) => {
    if (!data || data.trim() === "") {
        logger.error("Invalid input: Data must be a non-empty string.");
        return false;
    }
    return true;
};

// Encrypt Route
router.post('/encrypt', (req, res) => {
    const { data } = req.body;

    if (!validateInput(data)) {
        return res.status(400).json({
            status: false,
            message: "Invalid input: Encryption failed",
            error: "Invalid input",
        });
    }

    try {
        const encryptedData = rsaAdapter.encrypt(data);
        console.log(encryptedData)
        res.status(200).json({
            status: true,
            message: encryptedData,
            error: null,
        });
    } catch (error) {
        logger.error("Encryption failed:", error);
        res.status(500).json({
            status: false,
            message: "Encryption failed",
            error: error.message,
        });
    }
});

// Decrypt Route
router.post('/decrypt', (req, res) => {
    const { data } = req.body;

console.log(data)

    // Hardcoded encrypted data (replace this with your actual encrypted data)
    // const encryptedData = "nRJgY+ZsuapWwKUGet4wQAsYWa5RCcUf4jcmRUnoIpF0NILwuS1D8edRcsM09TY/wTBaXfJ5/VAUY78vtCxnpQ=="; // Example: "FvP53g7uDk1Gb0IwmYqxLXuIr3N0FoeG..."

    if (!validateInput(data)) {
        return res.status(400).json({
            status: false,
            message: "Invalid input: Decryption failed",
            error: "Invalid input",
        });
    }

    try {
        // Use the RSA adapter to decrypt the hardcoded data
        const decryptedData = rsaAdapter.decrypt(data);


        // Return the decrypted data in the response
        res.status(200).json({
            status: true,
            message: decryptedData,
            error: null,
        });
    } catch (error) {
        logger.error("Decryption failed:", error);
        res.status(500).json({
            status: false,
            message: "Decryption failed",
            error: error.message,
        });
    }
});


module.exports = router;
