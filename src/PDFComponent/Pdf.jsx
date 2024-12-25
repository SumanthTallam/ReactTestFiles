import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const Pdf = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); // State to store current posts
  const [startIndex, setStartIndex] = useState(0); // State to track index for new data

  const CHUNK_SIZE = 5; // Number of posts to fetch per click

  // Function to fetch data in chunks
  const handleFetchData = async () => {
    setLoading(true);
    try {
      // Fetch data from the API
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response.data; // Assuming API returns an array of data

      // Slice the data to get a chunk (next 5 items)
      const nextChunk = data.slice(startIndex, startIndex + CHUNK_SIZE);

      // Update the posts state and increment the startIndex for next fetch
      setPosts(nextChunk);
      setStartIndex((prevIndex) => prevIndex + CHUNK_SIZE);

      // Reset index if we've reached the end of data
      if (startIndex + CHUNK_SIZE >= data.length) {
        setStartIndex(0);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  // Function to download the displayed data as a PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.text("Fetched Data Report", 10, 10);

    // Add displayed data to PDF
    let yPosition = 20;
    posts.forEach((item, index) => {
      const content = `${index + 1}. Title: ${item.title}`;
      doc.text(content, 10, yPosition);
      yPosition += 10;

      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
    });

    // Save the PDF
    doc.save("fetched-data.pdf");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Fetch Data Button */}
      <button
        onClick={handleFetchData}
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        {loading ? "Fetching Data..." : "Fetch New Data"}
      </button>

      {/* Display Fetched Data */}
      <div>
        {posts.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {posts.map((post, index) => (
              <li key={post.id} style={{ marginBottom: "10px" }}>
                {post.id }. {post.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data fetched yet. Click "Fetch New Data" to load data.</p>
        )}
      </div>

      {/* Download PDF Button */}
      {posts.length > 0 && (
        <button
          onClick={handleDownloadPDF}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Download as PDF
        </button>
      )}
    </div>
  );
};

export default Pdf;
