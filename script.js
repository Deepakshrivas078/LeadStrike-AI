// script.js
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

async function handleSearch() {
  const query = document.getElementById("queryInput").value;
  const resultBox = document.getElementById("resultBox");

  if (!query.trim()) {
    resultBox.innerHTML = "<p>Please enter a query.</p>";
    return;
  }

  // Save query to Firebase
  try {
    await addDoc(collection(db, "searchQueries"), {
      query: query,
      timestamp: new Date()
    });

    resultBox.innerHTML = `<p>Search saved: <b>${query}</b><br> (Result fetch system coming soon...)</p>`;
  } catch (error) {
    resultBox.innerHTML = `<p style="color:red;">Error saving query: ${error}</p>`;
  }
}

