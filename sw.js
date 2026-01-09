// Service Worker for 雅思词汇助手 PWA
const CACHE_NAME = 'ielts-vocab-v2';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './vendor/supabase-js-2.min.js',
    './vocabulary.js',
    './vocabulary_part1.js',
    './vocabulary_part2.js',
    './vocabulary_part3.js',
    './vocabulary_part4.js',
    './vocabulary_part5.js',
    './vocabulary_part6.js',
    './vocabulary_part7.js',
    './vocabulary_part8.js',
    './vocabulary_part9.js',
    './vocabulary_part10.js',
    './vocabulary_part11.js',
    './vocabulary_part12.js',
    './vocabulary_part13.js',
    './vocabulary_part14.js',
    './vocabulary_part15.js',
    './vocabulary_part16.js',
    './vocabulary_part17.js',
    './vocabulary_part18.js',
    './vocabulary_part19.js',
    './vocabulary_part20.js',
    './vocabulary_part21.js',
    './vocabulary_part22.js',
    './vocabulary_part23.js',
    './vocabulary_part24.js',
    './vocabulary_part25.js',
    './vocabulary_part26.js',
    './vocabulary_part27.js',
    './vocabulary_part28.js',
    './vocabulary_part29.js',
    './vocabulary_part30.js'
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('缓存已打开');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('删除旧缓存:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // 缓存命中，返回缓存的资源
                if (response) {
                    return response;
                }
                // 缓存未命中，从网络获取
                return fetch(event.request).then((response) => {
                    // 检查是否是有效响应
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // 克隆响应（因为响应是流，只能使用一次）
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            }).catch(() => {
                // 网络失败时的离线回退
                return caches.match('./index.html');
            })
    );
});
