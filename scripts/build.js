const fs = require('fs');
const path = require('path');

/**
 * 合并目录中的所有JSON文件到一个大的JSON文件中
 * @param {string} inputDir 包含JSON文件的目录路径
 * @param {string} outputFile 输出的合并后JSON文件路径
 */
async function mergeJsonFiles(inputDir, outputFile) {
    try {
        // 1. 读取目录中的所有文件
        const files = await fs.promises.readdir(inputDir);
        
        // 2. 过滤出JSON文件
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        
        if (jsonFiles.length === 0) {
            console.log('目录中没有找到JSON文件');
            return;
        }
        
        // 3. 读取并解析所有JSON文件
        const jsonArray = [];
        
        for (const file of jsonFiles) {
            const filePath = path.join(inputDir, file);
            const fileContent = await fs.promises.readFile(filePath, 'utf8');
            
            try {
                const jsonData = JSON.parse(fileContent);
                jsonArray.push(jsonData);
                console.log(`成功加载: ${file}`);
            } catch (err) {
                console.error(`解析失败 ${file}: ${err.message}`);
            }
        }
        
        // 4. 将合并后的数组写入输出文件
        await fs.promises.writeFile(
            outputFile, 
            JSON.stringify(jsonArray, null, 2), // 使用2空格缩进美化输出
            'utf8'
        );
        
        console.log(`成功合并 ${jsonArray.length} 个JSON文件到 ${outputFile}`);
    } catch (err) {
        console.error('处理过程中出错:', err);
    }
}

// 使用示例
const inputDirectory = './providers'; // 替换为你的JSON文件目录
const outputFile = './providers.json'; // 替换为你想输出的文件路径

mergeJsonFiles(inputDirectory, outputFile);