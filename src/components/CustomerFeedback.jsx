import React, { useState } from 'react';
import axios from 'axios';

const CustomerFeedback = () => {
    const [formData, setFormData] = useState({
        rating: '',
        easeOfUse: '',
        informationProvided: '',
        adoptionProcess: '',
        supportCommunication: '',
        suggestions: '',
        additionalComments: '',
        recommend: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3035/submitFeedback', formData);
            alert(response.data.message); // Display success message
            // Reset form if needed
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("An error occurred while submitting feedback. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Feedback Form</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Rating:
                        <select name="rating" value={formData.rating} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                            <option value="Very Poor">Very Poor</option>
                        </select>
                    </label>

                    {/* Repeat similar structure for other feedback fields */}
                    <label style={styles.label}>
                        Suggestions:
                        <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} style={styles.textarea} />
                    </label>

                    <label style={styles.label}>
                        Additional Comments:
                        <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} style={styles.textarea} />
                    </label>

                    <label style={styles.label}>
                        Would you recommend us?
                        <select name="recommend" value={formData.recommend} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>

                    <button type="submit" style={styles.submitButton}>Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerFeedback;

// Inline styling for the component
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://example.com/background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#444',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '10px',
        textAlign: 'left',
    },
    select: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        marginBottom: '15px',
        resize: 'vertical',
    },
    submitButton: {
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    submitButtonHover: {
        backgroundColor: '#0056b3',
    },
};
