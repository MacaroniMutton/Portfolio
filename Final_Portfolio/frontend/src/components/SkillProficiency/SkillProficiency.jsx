import React, { useEffect } from 'react'; // Import useEffect from React
import Chart from 'chart.js/auto'; // Import Chart.js
import './SkillProficiency.css'; // Import the CSS file specific to this component

const SkillProficiency = () => {
    useEffect(() => {
        const isMobile = window.innerWidth < 768; // Check if the screen width is less than 768px

        const radarLabels = isMobile 
            ? ['EDA', 'ML Algorithms', 'Deep Learning', 'Computer Vision', 'NLP', 'Backend Dev', 'Version Control', 'Databases', 'HP Tuning', 'Transformers']
            : [
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
            ];

        const ctxRadar = document.getElementById('skillsChart').getContext('2d');
        const radarChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: radarLabels,
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
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
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
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
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

        // New horizontal bar chart for LeetCode progress
        const ctxLeetCode = document.getElementById('leetcodeProgressChart').getContext('2d');
        const leetcodeProgressChart = new Chart(ctxLeetCode, {
            type: 'bar',
            data: {
                labels: ['Easy', 'Medium', 'Hard'],
                datasets: [{
                    label: 'LeetCode Problems Solved',
                    data: [83, 87, 3], // Replace these values with your actual progress
                    backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }]
            },
            options: {
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
                scales: {
                    x: {
                        min: 0,
                        max: 200, // Adjust the max value based on your total problems solved
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

        const ctxLine = document.getElementById('activityChart').getContext('2d');
        const activityChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                datasets: [
                    {
                        label: 'LeetCode Activity',
                        data: [5, 15, 10, 20, 25, 30, 28, 35, 40, 45],
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)', // Red line
                        tension: 0.1
                    },
                    {
                        label: 'Kaggle Activity',
                        data: [10, 20, 15, 25, 35, 30, 40, 45, 50, 60],
                        fill: false,
                        borderColor: 'rgba(54, 162, 235, 1)', // Blue line
                        tension: 0.1
                    },
                    {
                        label: 'GitHub Activity',
                        data: [15, 25, 20, 30, 40, 50, 45, 55, 60, 65],
                        fill: false,
                        borderColor: 'rgba(75, 192, 192, 1)', // Green line
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
                scales: {
                    x: {
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
                            color: 'white', 
                            font: {
                                size: 14 
                            },
                            beginAtZero: true
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
                        }
                    }
                }
            }
        });

        return () => {
            // Cleanup the charts if needed
            radarChart.destroy();
            techUsageChart.destroy();
            leetcodeProgressChart.destroy();
            activityChart.destroy();
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
            <br />
            <div className="chartContainer"> {/* Use className instead of class */}
                <div className="skillsChartDiv">
                    <canvas id="leetcodeProgressChart"></canvas>
                </div>
                <div className="skillsChartDiv">
                    <canvas id="activityChart"></canvas>
                </div>
            </div>
        </section>
    );
};

export default SkillProficiency;
