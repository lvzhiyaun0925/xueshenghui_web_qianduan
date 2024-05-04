// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// API端点，扫描文件目录并返回文件列表
app.get('/api/files', (req, res) => {
    const directoryPath = './your_directory_path'; // 修改为您的文件目录路径
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.json(files);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
