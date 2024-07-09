exports.extractTitleAndFormatText = (inputText) => {
    const titleMatch = inputText.match(/Title:\s*(.*)/);
    const name = titleMatch ? titleMatch[1] : ''; // Extracted title

    const ingredientsMatch = inputText.match(/Ingredients:\s*([\s\S]*?)\n\n/);
    const ingredients = ingredientsMatch ? ingredientsMatch[1] : ''; // Extracted ingredients

    const stepsMatch = inputText.match(/Steps:\s*([\s\S]*)/) || inputText.match(/Steps to make:\s*([\s\S]*)/);
    const instructions = stepsMatch ? stepsMatch[1] : ''; // Extracted steps

    

    return {
        name,
        ingredients,
        instructions,
    };
}
