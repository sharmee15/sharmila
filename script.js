// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtBUjgVLRwxX5H-H3liiz7q8MJW_ZJWw8",
    authDomain: "data-hive-3703c.firebaseapp.com",
    projectId: "data-hive-3703c",
    storageBucket: "data-hive-3703c.firebasestorage.app",
    messagingSenderId: "186754584783",
    appId: "1:186754584783:web:5ae505ee2d9a908b2467ba",
    measurementId: "G-7YDESXV448"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function displayFirestoreData() {
    try {
        const collectionRef = collection(db, "test"); 
        const querySnapshot = await getDocs(collectionRef);

        const listElement = document.getElementById("data-list");
        listElement.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log("Firestore Document:", data);
            const listItem = document.createElement("li");
            let docContent = `ID: ${doc.id}, `;
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    docContent += `${key}: ${data[key]}, `;
                }
            }
            
            listItem.textContent = docContent.slice(0, -2);
            listElement.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
}

// Call function when page loads
window.onload = displayFirestoreData;
