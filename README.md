# **Assistive Learning Platform**  

**Empowering Inclusive Education through AI & Accessibility**  

## **Overview**  
The Assistive Learning Platform enhances STEM education for students with disabilities through AI-powered assistive technology, ensuring accessibility and inclusion.  

## **Features**  
### **1. Course Management**  
- STEM-related courses in Science, Technology, Engineering, Mathematics, Cybersecurity, Biotech, Space Science, and Robotics.  
- Search and filter by keywords and categories.  
- View detailed course information.  

### **2. AI-Powered Accessibility**  
- **Sign Language Translation** 
- **Text-to-Speech (TTS) & Speech-to-Text (STT)** 

### **3. Intuitive UI & UX**  
- Responsive design for mobile, tablet, and desktop.  
- Dark mode support.  
- Interactive UI elements with smooth transitions.  

### **4. Secure & Scalable**  
- User authentication for secure access.  
- Dynamic database-driven content.  
- Optimized for performance and fast loading.  

## **Tech Stack**  
| Technology  | Usage  |  
|------------|--------|  
| Vue.js  | Frontend UI framework  |  
| Vue Router  | Client-side navigation  |  
| Firebase / MySQL  | Backend storage (to be integrated)  |  
| SCSS / CSS3  | Styling & responsiveness  |  
| Node.js / Express  | API backend (future integration)  |  

## **Project Structure**  
```
/src
│── assets/         # Static assets (images, logos)
│── components/     # Reusable Vue components
│── views/          # Main pages (Home, Courses, CourseDetail)
│── router/         # Vue Router configuration
│── store/          # State management (future)
│── App.vue         # Root Vue component
│── main.js         # Entry point
│── styles/         # Global styles
```

## **Installation & Setup**  
### **Prerequisites**  
- Node.js (v16 or higher)  
- Vue CLI  

### **Setup**  
```sh
git clone https://github.com/your-username/assistive-learning.git
cd assistive-learning
npm install
npm run dev
```

## **Troubleshooting**  
| Issue  | Solution  |  
|--------|----------|  
| `Module not found: Can't resolve '@/assets/courses/learning.svg'`  | Ensure the correct file path exists inside `src/assets/courses/`. |  
| UI not displaying correctly  | Run `npm run dev` and check console errors. |  
| Routing errors  | Check Vue Router settings in `router/index.js`. |  

## **Contributing**  
### **How to Contribute**  
1. Fork the repository.  
2. Create a new branch (`feature-new-component`).  
3. Make changes and commit (`git commit -m "Added new AI accessibility feature"`).  
4. Push changes (`git push origin feature-new-component`).  
5. Submit a Pull Request (PR).  

## **License**  
This project is licensed under the **MIT License**.  



### _Building a future where education is accessible for all!_