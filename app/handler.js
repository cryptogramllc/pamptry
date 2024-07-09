const axios = require('axios');
const { extractTitleAndFormatText } = require("./helpers");


exports.getRemedy = async (event) => {
    try { 
    const body = JSON.parse(event.body);
    const { 
        ingredients,
        bodyPart
    } = body;
    const formattedIngredients = ingredients.join(', ');
    const formattedString = formattedIngredients.replace(/,([^,]*)$/, ' and$1');
    
    const url = process.env.OPENAI_URL;
    const openaiApiKey = process.env.OPENAI_API_KEY

    const prompt = `Can you suggest a skin care remedy using these ingredients: ${formattedString} for the ${bodyPart}?
        Give me a title under Title:, List all ingredients under Ingredients:, and the steps to make it under Steps:.`;
    const data = JSON.stringify({ "model": "gpt-3.5-turbo", "messages": [{ "role": "user", "content": prompt }], "temperature": 1.0 });
    const headers = {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
    };
    const res = await axios.post(url, data, { headers });
    const { content } = res.data.choices[0].message;
    const obj = extractTitleAndFormatText(content);

    const output =  {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Remedy fetched successfully',
            data: obj
        }),
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        },
    };
    return output;
    } catch (error) {   
        console.error('Error fetching remedy:', error);
    }
};