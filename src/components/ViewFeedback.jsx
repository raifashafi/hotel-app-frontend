import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:3035/viewFeedback');
                console.log(response.data);
                setFeedbacks(response.data.feedbacks);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return <div style={styles.loading}>Loading feedback...</div>;
    }

    if (error) {
        return <div style={styles.error}>Error fetching feedback: {error}</div>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Feedback List</h2>
            {feedbacks.length === 0 ? (
                <p style={styles.noFeedback}>No feedback available.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Rating</th>
                            <th style={styles.th}>Suggestions</th>
                            <th style={styles.th}>Additional Comments</th>
                            <th style={styles.th}>Recommend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback._id} style={styles.row}>
                                <td style={styles.td}>{feedback.rating}</td>
                                <td style={styles.td}>{feedback.suggestions}</td>
                                <td style={styles.td}>{feedback.additionalComments}</td>
                                <td style={styles.td}>{feedback.recommend === 'Yes' ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewFeedback;

// Inline styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    noFeedback: {
        fontSize: '18px',
        color: '#666',
    },
    table: {
        width: '100%',
        maxWidth: '1000px',
        borderCollapse: 'collapse',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    th: {
        padding: '12px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'left',
    },
    td: {
        padding: '12px 15px',
        fontSize: '15px',
        color: '#333',
        textAlign: 'left',
    },
    row: {
        backgroundColor: '#f9f9f9',
    },
    loading: {
        fontSize: '20px',
        color: '#333',
    },
    error: {
        color: '#c0392b',
        fontSize: '18px',
    },
};

// Additional styles for alternating row colors
const alternateRowStyles = {
    backgroundColor: '#f1f1f1',
};

// Alternate row styling (for every other row)
const FeedbackRow = ({ feedback }) => (
    <tr style={feedback._id % 2 === 0 ? styles.row : alternateRowStyles}>
        {/* Render feedback properties here */}
    </tr>
);
