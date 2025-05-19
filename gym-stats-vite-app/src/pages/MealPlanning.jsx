import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MealPlanning() {
    const meal = [
        {name: "Whey Isolate Protein Powder", kcal: 176, protein: "39g", carbs: "1.6g", fat: "0.8g"},
        {name: "Oats", kcal: 531, protein: "18g", carbs: "81g", fat: "9.1g"},
        {name: "Almond butter", kcal: 184, protein: "6.3g", carbs: "2.6g", fat: "17g"},
        {name: "Blueberries", kcal: 57, protein: "0.7g", carbs: "12g", fat: "0.3g"},
        {name: "Banana", kcal: 89, protein: "1.1g", carbs: "20g", fat: "0.3g"},
        {name: "Dark Chocolate 90% - Lindt", kcal: 59, protein: "1g", carbs: "1.4g", fat: "5.5g"},
    ];

    const totalMacros = {
      kcal: { value: meal.reduce((sum, i) => sum + parseFloat(i.kcal), 0), goal: 3970, color: "#3b82f6" },
      protein: { value: meal.reduce((sum, i) => sum + parseFloat(i.protein), 0), goal: 269.8, color: "#10b981" },
      carbs: { value: meal.reduce((sum, i) => sum + parseFloat(i.carbs), 0), goal: 497.9, color: "#facc15" },
      fat: { value: meal.reduce((sum, i) => sum + parseFloat(i.fat), 0), goal: 78.8, color: "#ec4899" },
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Nutrition Plan 5 Meals</h1>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6">
                <div>
                    <p><span className="text-blue-400">Kcal</span> 3970/3970 kcal</p>
                    <p><span className="text-green-400">Protein</span> 269.8g/269.8g</p>
                    <p><span className="text-yellow-400">Carbs</span> 497.9g/497.9g</p>
                    <p><span className="text-pink-400">Fat</span> 78.8g/78.8g</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-64">
                  {Object.entries(totalMacros).map(([label, { value, goal, color }]) => (
                    <div key={label} className="text-center">
                      <CircularProgressbar
                        value={(value / goal) * 100}
                        text={`${label}`}
                        styles={buildStyles({
                          textSize: "28px",
                          textColor: "#fff",
                          pathColor: color,
                          trailColor: "#2d2d2d",
                        })}
                      />
                    </div>
                  ))}
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Meal 1.</h2>
            <div className="bg-neutral-800 p-4 rounded-lg mb-4">
                <div className="text-sm text-gray-300 mb-3">1096 kcal · 66g protein · 119g carbs · 33g fat</div>
                <ul className="space-y-2 text-sm">
                    {meal.map((item, index) => (
                        <li key={index} className="flex justify-between border-b border-gray-700 pb-1">
                            <span className="w-1/2">{item.name}</span>
                            <span className="w-1/6 text-right">{item.kcal}</span>
                            <span className="w-1/6 text-right">{item.protein}</span>
                            <span className="w-1/6 text-right">{item.carbs}</span>
                            <span className="w-1/6 text-right">{item.fat}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center text-blue-400 hover:underline cursor-pointer mt-4">+ Add Food</div>
        </div>
    );
}