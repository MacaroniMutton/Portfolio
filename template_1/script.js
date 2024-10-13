document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website is ready!");

    // Animate skill bars
    const skillBars = document.querySelectorAll(".progress");
    skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('style').split(': ')[1];
    });
});

// Modal Logic for Project Details
function showDetails(projectId) {
    const modal = document.getElementById("project-modal");
    const modalDetails = document.getElementById("modal-details");
    modal.style.display = "flex";

    let content = "";
    if (projectId === "rag-bot") {
        content = `
            <h3>Conversational RAG Bot</h3>
            <p>Built using Langchain, Hugging Face embeddings, FAISS, Groq API. This bot retrieves context and passes it along with user input to an LLM to create relevant responses.</p>
        `;
    } else if (projectId === "deepfake-detector") {
        content = `
            <h3>Deepfake Detector</h3>
            <p>A deepfake detection model developed using TensorFlow's MoveNet, PyTorch’s DenseNet16, and Random Forest for audio detection, achieving 85-90% accuracy.</p>
        `;
    }
    modalDetails.innerHTML = content;
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}
