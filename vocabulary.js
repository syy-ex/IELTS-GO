// 雅思词库 - 完整版 (约3000词)
// 整合自词汇.MD文件中的所有主题分类、听力高频词汇和通用高频词汇

// 加载所有词库部分
const loadVocabularyParts = () => {
    const allParts = [];

    // 尝试加载所有词库部分 (1-30)
    for (let i = 1; i <= 30; i++) {
        const partName = `vocabularyPart${i}`;
        if (typeof window[partName] !== 'undefined') {
            allParts.push(...window[partName]);
        } else if (typeof global !== 'undefined' && global[partName]) {
            allParts.push(...global[partName]);
        }
    }

    return allParts;
};

// 词库分类信息
const vocabularyCategories = {
    // 话题词汇 Topic Vocabulary
    'people': '人物关系',
    'health': '健康健身',
    'science': '科学研究',
    'community': '社区社会',
    'study': '学习教育',
    'advertising': '广告营销',
    'travel': '旅行地点',
    'government': '政府政策',
    'animals': '动物保护',
    'space': '太空探索',
    'technology': '科技计算机',
    'machines': '机器制造',
    'fashion': '时尚服饰',
    'city': '城市生活',
    'environment': '环境生态',
    'energy': '能源资源',
    'issues': '社会议题',
    'business': '商业职业',
    'crime': '犯罪法律',
    'media': '媒体传播',
    'art': '艺术文化',
    'changes': '变化趋势',
    'data': '数据描述',
    'essay': '写作功能词',

    // 听力高频 Listening High Frequency
    'listening': '听力常用/形容词',
    'countries': '国家',
    'health_foods': '健康食品',
    'homes': '住房',
    'languages': '语言',
    'marketing': '市场营销',
    'materials': '材料',
    'occupations': '职业',
    'nature': '自然',
    'places': '地点',
    'shapes': '形状',
    'subjects': '学科',
    'touring': '旅游',
    'transportation': '交通运输',
    'vehicles': '车辆',
    'weather': '天气',
    'sports': '运动',
    'hobbies': '爱好',

    // 通用 General
    'general': '通用核心词',
    'other': '其他'
};

// 合并所有词库
const vocabulary = loadVocabularyParts();

// 获取分类的中文名称
const getCategoryName = (category) => {
    return vocabularyCategories[category] || category;
};

// 获取所有分类
const getAllCategories = () => {
    return Object.keys(vocabularyCategories);
};

// 按分类过滤词汇
const filterByCategory = (category) => {
    return vocabulary.filter(word => word.category === category);
};

// 随机获取词汇
const getRandomWords = (count = 10, category = null) => {
    let words = category ? filterByCategory(category) : vocabulary;
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
};

// 搜索词汇
const searchWord = (query) => {
    const lowerQuery = query.toLowerCase();
    return vocabulary.filter(word =>
        word.word.toLowerCase().includes(lowerQuery) ||
        word.meaning.includes(query)
    );
};

// 获取词库统计信息
const getVocabularyStats = () => {
    const stats = {
        total: vocabulary.length,
        byCategory: {}
    };

    vocabulary.forEach(word => {
        if (!stats.byCategory[word.category]) {
            stats.byCategory[word.category] = 0;
        }
        stats.byCategory[word.category]++;
    });

    return stats;
};

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        vocabulary,
        vocabularyCategories,
        getCategoryName,
        getAllCategories,
        filterByCategory,
        getRandomWords,
        searchWord,
        getVocabularyStats
    };
}

console.log(`雅思词库已加载，共 ${vocabulary.length} 个单词`);
