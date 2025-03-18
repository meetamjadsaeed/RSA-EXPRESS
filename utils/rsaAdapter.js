const JSEncrypt = require('jsencrypt-node'); // Use node-compatible version

// Define the RSA keys directly (replace these with your actual keys)
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCRdb7qgGmgRGP3TBr2A5B81MgD
m0/eFDygxsy8PKp3Jh4+XUmPHMm86MwwC8p9mev0jJ6bX02ygjjZif8GcHQKmSod
tKsJ/Wzdft0TtGFgucYuER542F25vhEfqhurkUdiEFztKE+W4glHLuuaqEnjW+yv
c27MzH1zWP9YqR1HFQIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCRdb7qgGmgRGP3TBr2A5B81MgDm0/eFDygxsy8PKp3Jh4+XUmP
HMm86MwwC8p9mev0jJ6bX02ygjjZif8GcHQKmSodtKsJ/Wzdft0TtGFgucYuER54
2F25vhEfqhurkUdiEFztKE+W4glHLuuaqEnjW+yvc27MzH1zWP9YqR1HFQIDAQAB
AoGAMMc0a3z+bsEgaLh7vg358PKF1DfL86QDpMKlu2X4oBYHRFCSL0yvFgtXFbGO
iMoKByr0sROngXoLyF9vRuCE+Nsj2ojPzw5W0eiTo1f/vZ5z/fD3Kjfmwspfafbr
vnUYfQcgWyRS8dK6p/oNyouoHt329BIvMIPZ9IRqlcsRwQECQQDOqqK3+NvEXYqf
ni9JdeIwH0u13Ax8J2ufprLKOWZqwuTFhvay94Kfe0z+lW3ITJQxROzlW1VRGM52
AfvJnilBAkEAtC7IeiKaKBPmEe8K3LCyaAnqXwVNHjgFZTmORFsejI80Y3rJVe1L
lSwQJlJTBMqG81OrMrOsMPEcDAPBYXP01QJBAMhbRUV2ThkhVrNIeC+Pyak9rfix
TKlQzlYJFmxXGaOHLqMRJTp8Gnbi4tItrDDzjPf3CnORCDWHByIA6kmcvAECQADA
JSOlG0FJe+7dMQ1kSwn16J0Gt6CFmTgnujj8rC7ntc8oRsht2Z/AdDzEoQXnFhLT
aWYnq3L0vioqpdaTFhUCQA2o8v6N571hBUGgHV6CKlXvHTO1k9MNUdoQnF6GE8dC
lWCDMnnfUiKOwERjA/x8NfKes6YOX+0uoOKSlKFls7g=
-----END RSA PRIVATE KEY-----`;

// Create RSA adapter
const createRSAAdapter = () => {
    return {
        encrypt: (data) => {
            const encryptor = new JSEncrypt();
            encryptor.setPublicKey(publicKey);
            return encryptor.encrypt(data);
        },
        decrypt: (data) => {
            const decryptor = new JSEncrypt();
            decryptor.setPrivateKey(privateKey);
            return decryptor.decrypt(data);
        },
    };
};

module.exports = createRSAAdapter;
