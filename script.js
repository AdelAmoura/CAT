
document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("textArea");
    const charCount = document.getElementById("charCount");
    const maxLength = textarea.maxLength;
  
    textarea.addEventListener("input", function() {
      const currentLength = textarea.value.length;
      charCount.textContent = currentLength;
  
      // Check if limit is reached
      if (currentLength >= maxLength) {
        textarea.classList.add("limit-reached");
      } else {
        textarea.classList.remove("limit-reached");
      }
    });
  });
  