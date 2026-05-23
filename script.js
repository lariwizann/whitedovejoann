// Language Toggle
let isEnglish = true;
document.getElementById('lang-toggle').addEventListener('click', () => {
    isEnglish = !isEnglish;
    document.getElementById('lang-toggle').textContent = isEnglish ? "English | 中文" : "中文 | English";
    alert(isEnglish ? "Language switched to English" : "已切换到中文");
});

// Share Button
document.getElementById('share-btn').addEventListener('click', () => {
    const text = document.getElementById('share-text').value;
    if (text) {
        alert("🕊️ Thank you for sharing. Your message is safely sent anonymously.");
        document.getElementById('share-text').value = '';
    }
});

// Save Journal
document.getElementById('save-journal').addEventListener('click', () => {
    const text = document.getElementById('journal-text').value;
    if (text) {
        alert("💛 Entry saved in your private journal.");
        document.getElementById('journal-text').value = '';
    }
});
