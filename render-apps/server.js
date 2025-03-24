const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;




// Endpoint לקבלת האפליקציות המותקנות
app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services?includePreviews=true&limit=20', {
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer rnd_6N4DWZFgKbayoKRUrdvQK0mVURpZ` // החלף במפתח ה-API שלך
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving apps');
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
