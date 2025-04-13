import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: `${import.meta.env.VITE_RECIPE_API}` });

export async function generateRecipe(ingredientsString) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `I have ${ingredientsString}. Please give me a recipe you'd recommend I will make!.You don't need to use every ingredient mentioned. The recipe can include additional ingredients which is not mentioned, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`,
  });
  // console.log(response.text);
  return response.text;
}


