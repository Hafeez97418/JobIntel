# JobIntel - AI Powered Job Suitability Chrome Extension

## Overview
JobIntel is a Chrome extension that analyzes job posting pages visited by the user.  
It uses **client-side web scraping** to extract job details directly from the page and sends data to a backend AI model for analysis.  
The AI provides insights about the user's suitability and chances of getting the job.

## How It Works
1. **User visits a job posting page** (e.g., LinkedIn or other job portals).  
2. **Content script (content.js)** runs in the background and scrapes relevant job information such as title, skills, experience, and location.  
3. **Scraped data is sent** to the backend for AI processing (or analyzed locally in a demo version).  
4. **AI model predicts** suitability and probability of selection based on user's resume and job match.  
5. **Popup UI (popup.html + popup.js)** displays results and insights such as:  
   - Job match percentage  
   - Skill gap analysis  
   - Experience comparison  
   - Salary expectations alignment  
   - Overall suitability rating

## File Structure
```
JobIntel/
│
├── manifest.json          # Chrome extension configuration
├── content.js             # Client-side web scraper logic
├── popup.html             # User interface (extension popup)
├── popup.js               # Handles popup interactions
├── icon.png               # Extension icon
└── README.md              # Documentation (this file)
```

## Setup & Installation
1. Open **Google Chrome** → Go to `chrome://extensions/`
2. Enable **Developer Mode** (top right corner)
3. Click **"Load unpacked"**
4. Select the **JobIntel** project folder
5. The extension will now appear in the browser toolbar

## Demo Instructions
- Visit any job posting web page  
- Click the **JobIntel icon** in the toolbar  
- Observe the popup insights and AI-generated job suitability score

## Future Enhancements
- Add backend integration with Flask or FastAPI for stronger AI analysis  
- Support for multiple job sites  
- User profile management  
- Cloud-based resume matching system

## Author
Developed for **College Project Demonstration**  
By: [Your Name]
