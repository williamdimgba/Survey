"use client";
import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Page() {
    const [demographicFormData, setDemographicFormData] = useState(null);
    const [favoriteDrinkFormData, setFavoriteDrinkFormData] = useState(null);
    const [informationStepData, setInformationStepData] = useState(null);
    const [favoriteHolyBasilGummyForm, setFavoriteHolyBasilGummyForm] = useState(null);
    const [favoriteAroniaFormData, setFavoriteAroniaFormData] = useState(null);

    useEffect(() => {
        const demographicData = localStorage.getItem('demographicFormData');
        const drinkData = localStorage.getItem('favoriteDrinkFormData');
        const introStepData = localStorage.getItem('introductionStepData');
        const infoStepData = localStorage.getItem('informationStepData');
        const holyBasilData = localStorage.getItem('favoriteHolyBasilGummyForm');
        const aroniaData = localStorage.getItem('favoriteAroniaFormData');

        if (demographicData) {
            setDemographicFormData(JSON.parse(demographicData));
        }

        if (drinkData) {
            setFavoriteDrinkFormData(JSON.parse(drinkData));
        }

        if (infoStepData) {
            setInformationStepData(JSON.parse(infoStepData));
        }

        if (holyBasilData) {
            setFavoriteHolyBasilGummyForm(JSON.parse(holyBasilData));
        }

        if (aroniaData) {
            setFavoriteAroniaFormData(JSON.parse(aroniaData));
        }
    }, []);

    // Define colors for the charts
    const colors = {
        demographic: 'rgba(255, 99, 132, 0.6)',
        favoriteDrink: 'rgba(54, 162, 235, 0.6)',
        informationStep: 'rgba(255, 206, 86, 0.6)',
        holyBasil: 'rgba(75, 192, 192, 0.6)',
        aronia: 'rgba(153, 102, 255, 0.6)',
    };

    const prepareChartData = (data, label, color) => {
        return {
            labels: Object.keys(data || {}),
            datasets: [
                {
                    label: label,
                    data: Object.values(data || {}),
                    backgroundColor: color,
                },
            ],
        };
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Stored Form Data</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Demographic Form Data</h2>
                {demographicFormData ? (
                    <div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Detailed Demographic Data:</h3>
                            <ul className="list-disc pl-5">
                                {Object.entries(demographicFormData).map(([key, value]) => (
                                    <li key={key} className="text-gray-700">
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">No demographic form data found.</p>
                )}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Favorite Drink Form Data</h2>
                {favoriteDrinkFormData ? (
                    <Pie
                        data={prepareChartData(favoriteDrinkFormData, 'Favorite Drink Data', colors.favoriteDrink)}
                    />
                ) : (
                    <p className="text-gray-500">No favorite drink form data found.</p>
                )}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Information Step Data</h2>
                {informationStepData ? (
                    <Bar
                        data={prepareChartData(informationStepData, 'Information Step Data', colors.informationStep)}
                    />
                ) : (
                    <p className="text-gray-500">No information step data found.</p>
                )}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Favorite Holy Basil Gummy Form Data</h2>
                {favoriteHolyBasilGummyForm ? (
                    <Pie
                        data={prepareChartData(favoriteHolyBasilGummyForm, 'Favorite Holy Basil Gummy Data', colors.holyBasil)}
                    />
                ) : (
                    <p className="text-gray-500">No favorite Holy Basil gummy form data found.</p>
                )}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Favorite Aronia Form Data</h2>
                {favoriteAroniaFormData ? (
                    <Line
                        data={prepareChartData(favoriteAroniaFormData, 'Favorite Aronia Form Data', colors.aronia)}
                    />
                ) : (
                    <p className="text-gray-500">No favorite Aronia form data found.</p>
                )}
            </div>
        </div>
    );
}
