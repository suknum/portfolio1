import axios from 'axios';

const API_URL = '';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1Z HkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1NzA3NjIifQ.YbnC75jrRoR-RcHxjcWRa_KvS LQbVNNI1CC0TLDwbXdtJ4pzCGPpUd03QV-wXsyBARiB9ka-CGvAY_Oz7hTsCvipxbt_vVJET8x4z7mjuj28ZFaJssR9YI2cePAzTzjAvcP8oWilDnjnkM5AVI_3rCfekbKd-aqX4vaCxgFj213jRGOzJe_XlcT iXzjtWnvfkTPHCSL4Cjf7UVNrpqZ2FIGh36V2sTEzI-1M9dX8Yj9fRFfvLtOBJTFTnbxONTxbOZP6zgBdJPYLqcci0xcDJANuRf0Y9C1akhD--0OL1DHpP1P2Hyfp0Py7YSjwx7irl-XSJ4pnbOWhahcDzN7sfw';

export const fetchCharacterInfo = async (characterName) => {
    const response = await axios.get(`${API_URL}/character/${characterName}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    return response.data;
}