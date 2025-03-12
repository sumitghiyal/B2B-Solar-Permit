const express = require('express');
const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const permitRoutes = require('./routes/permitRoutes');
const userRoutes = require('./routes/userRoutes');

// ✅ Debugging: Check what is being imported
console.log('Auth Routes:', authRoutes);
console.log('Permit Routes:', permitRoutes);
console.log('User Routes:', userRoutes);

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/permits', permitRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
