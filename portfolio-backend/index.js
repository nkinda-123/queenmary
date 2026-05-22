const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── In-memory data store ──────────────────────────────
let data = {
  profile: {
    name: "Queen Mary Godfrey",
    role: "Student",
    organization: "Eastern African Statistical Training Center",
    bio: "A passionate data science student with strong analytical and statistical skills."
  },
  skills: [
    "Python", "R Programming", "Machine Learning",
    "Data Visualization", "Statistical Analysis",
    "SQL", "Data Wrangling", "Deep Learning",
    "Power BI", "Excel"
  ],
  projects: [
    {
      title: "Statistical Data Analysis",
      description: "Analyzed large datasets using R and Python to extract meaningful insights."
    },
    {
      title: "Machine Learning Model",
      description: "Built a predictive model using Python scikit-learn for classification tasks."
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created interactive dashboards using Power BI for business reporting."
     }
  ],
  contact: {
    phone: "0683692139",
    email: "queenmarygodfrey@gmail.com"
  }
};

// ── GET Routes ────────────────────────────────────────
app.get('/api/profile',  (req, res) => res.json(data.profile));
app.get('/api/skills',   (req, res) => res.json({ skills: data.skills }));
app.get('/api/projects', (req, res) => res.json({ projects: data.projects }));
app.get('/api/contact',  (req, res) => res.json(data.contact));

// ── UPDATE Routes ─────────────────────────────────────
app.post('/api/profile/update',  (req, res) => { data.profile = req.body; res.json({ success: true }); });
app.post('/api/skills/update',   (req, res) => { data.skills = req.body.skills; res.json({ success: true }); });
app.post('/api/projects/update', (req, res) => { data.projects = req.body.projects; res.json({ success: true }); });
app.post('/api/contact/update',  (req, res) => { data.contact = req.body; res.json({ success: true }); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));