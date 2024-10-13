import React, { useEffect } from 'react'; // Import useEffect from React
import Chart from 'chart.js/auto'; // Import Chart.js
import './SkillProficiency.css'; // Import the CSS file specific to this component

const SkillProficiency = () => {
    useEffect(() => {
        const ctxRadar = document.getElementById('skillsChart').getContext('2d');
        const radarChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: [
                    'Data Analysis and Visualization',
                    'Machine Learning Algorithms',
                    'Deep Learning',
                    'Computer Vision',
                    'NLP',
                    'Backend Development',
                    'Version Control',
                    'Databases',
                    'Hyperparameter Tuning',
                    'Transformer Architectures'
                ],
                datasets: [{
                    label: 'Proficiency Level',
                    data: [9, 10, 9, 7, 9, 7, 8, 8, 5, 8],
                    fill: true,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 10,
                        ticks: {
                            display: false 
                        },
                        grid: {
                            color: '#555555' 
                        },
                        pointLabels: {
                            color: 'white', 
                            font: {
                                size: 14 
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            color: 'white', 
                            font: {
                                size: 16 
                            }
                        },
                        padding: 0 
                    }
                },
                layout: {
                    padding: {
                        top: 0, 
                        bottom: 0 
                    }
                }
            }
        });

        const ctxBar = document.getElementById('techUsageChart').getContext('2d');
        const techUsageChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Django', 'TensorFlow', 'Scikit-Learn', 'MySQL', 'Docker', 'Git', 'Hugging Face', 'Langchain', 'LLMs', 'NLTK'],
                datasets: [{
                    label: 'Technology Usage (%)',
                    data: [67, 73, 83, 47, 20, 60, 40, 62, 40, 25],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', 
                    borderColor: 'rgba(75, 192, 192, 1)', 
                    borderWidth: 1,
                    barPercentage: 1,
                    categoryPercentage: 0.8
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        min: 0,
                        max: 100,
                        ticks: {
                            color: 'white', 
                            font: {
                                size: 14 
                            }
                        },
                        grid: {
                            color: '#555555' 
                        }
                    },
                    y: {
                        ticks: {
                            autoSkip: false, 
                            color: 'white', 
                            font: {
                                size: 14 
                            }
                        },
                        grid: {
                            color: '#555555' 
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white', 
                            font: {
                                size: 16 
                            }
                        },
                        padding: 10, 
                        position: 'top' 
                    }
                },
                layout: {
                    padding: {
                        top: 20, 
                        bottom: 20 
                    }
                }
            }
        });

        return () => {
            // Cleanup the charts if needed
            radarChart.destroy();
            techUsageChart.destroy();
        };
    }, []); // Add empty dependency array to ensure useEffect runs once

    return (
        <section id="skills-chart" className="section"> {/* Use className instead of class */}
            <h2>Skills Proficiency</h2>
            <div className="chartContainer"> {/* Use className instead of class */}
                <div className="skillsChartDiv"> {/* Use className instead of class */}
                    <canvas id="skillsChart"></canvas>
                </div>
                <div className="skillsChartDiv"> {/* Use className instead of class */}
                    <canvas id="techUsageChart"></canvas>
                </div>
            </div>
        </section>
    );
};

export default SkillProficiency;
