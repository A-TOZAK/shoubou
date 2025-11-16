// DOM要素の取得
const categoryButtons = document.querySelectorAll('.category-button');
const termCards = document.querySelectorAll('.term-card');
const searchInput = document.getElementById('search-input');
const resultsCount = document.getElementById('results-count');
const countNumber = document.getElementById('count-number');
const noResults = document.getElementById('no-results');
const termsContainer = document.getElementById('terms-container');

let currentCategory = 'all';
let currentSearchTerm = '';

// カテゴリーフィルター
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        currentCategory = selectedCategory;
        
        // ボタンのスタイル更新
        categoryButtons.forEach(btn => {
            if (btn === button) {
                btn.classList.remove('bg-gray-200', 'text-gray-700');
                btn.classList.add('bg-indigo-600', 'text-white', 'active');
            } else {
                btn.classList.remove('bg-indigo-600', 'text-white', 'active');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            }
        });

        filterAndSearch();
    });
});

// 検索機能
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    filterAndSearch();
});

// フィルターと検索を実行
function filterAndSearch() {
    let visibleCount = 0;
    
    termCards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        const keywords = card.dataset.keywords;
        const title = card.querySelector('.term-title').textContent.toLowerCase();
        const description = card.querySelector('.term-description').textContent.toLowerCase();
        
        // カテゴリーフィルター
        const categoryMatch = currentCategory === 'all' || cardCategory === currentCategory;
        
        // 検索フィルター
        const searchMatch = currentSearchTerm === '' || 
            keywords.includes(currentSearchTerm) || 
            title.includes(currentSearchTerm) || 
            description.includes(currentSearchTerm);
        
        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            // アニメーション遅延を設定
            card.style.animationDelay = `${visibleCount * 0.05}s`;
            visibleCount++;
            
            // 検索ハイライト
            if (currentSearchTerm !== '') {
                highlightText(card, currentSearchTerm);
            } else {
                removeHighlight(card);
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // 結果カウントの更新
    countNumber.textContent = visibleCount;
    
    // 結果なしメッセージの表示/非表示
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
        termsContainer.classList.add('hidden');
        resultsCount.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        termsContainer.classList.remove('hidden');
        resultsCount.classList.remove('hidden');
    }
    
    // スムーズスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// テキストをハイライト
function highlightText(card, searchTerm) {
    const title = card.querySelector('.term-title');
    const description = card.querySelector('.term-description');
    
    // 既存のハイライトを削除
    removeHighlight(card);
    
    // 新しいハイライトを追加
    const highlightHTML = (text) => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    };
    
    // タイトルと説明文のハイライト
    if (title.textContent.toLowerCase().includes(searchTerm)) {
        const rubyElements = title.querySelectorAll('ruby');
        if (rubyElements.length === 0) {
            title.innerHTML = highlightHTML(title.textContent);
        }
    }
    
    if (description.textContent.toLowerCase().includes(searchTerm)) {
        const rubyElements = description.querySelectorAll('ruby');
        if (rubyElements.length === 0) {
            description.innerHTML = highlightHTML(description.textContent);
        }
    }
}

// ハイライトを削除
function removeHighlight(card) {
    const highlights = card.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}

// キーボードショートカット
document.addEventListener('keydown', (e) => {
    // Ctrl+F または Cmd+F で検索ボックスにフォーカス
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape で検索をクリア
    if (e.key === 'Escape') {
        searchInput.value = '';
        currentSearchTerm = '';
        filterAndSearch();
    }
});

// ページロード時のアニメーション
window.addEventListener('load', () => {
    termCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});

// 検索のヒント機能
const searchHints = [
    'しょうかき',
    'けむり',
    'ひのもと',
    'おかしも',
    'しょうぼうし'
];

let hintIndex = 0;

// プレースホルダーを変更する関数
function rotatePlaceholder() {
    if (searchInput.value === '') {
        hintIndex = (hintIndex + 1) % searchHints.length;
        searchInput.setAttribute('placeholder', `たとえば「${searchHints[hintIndex]}」など`);
    }
}

// 10秒ごとにプレースホルダーを変更
setInterval(rotatePlaceholder, 10000);

// スクロールアニメーション
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 下にスクロール
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        // 上にスクロール
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// カードのクリックでアニメーション
termCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('animate-pulse');
        setTimeout(() => {
            this.classList.remove('animate-pulse');
        }, 600);
    });
});

// 音声読み上げ機能（オプション）
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        speechSynthesis.speak(utterance);
    }
}

// 各カードに読み上げボタンを追加（オプション機能として）
termCards.forEach(card => {
    const title = card.querySelector('.term-title').textContent;
    const description = card.querySelector('.term-description').textContent;
    
    // ダブルクリックで読み上げ
    card.addEventListener('dblclick', () => {
        speakText(`${title}。${description}`);
    });
});

// タッチデバイス対応
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    
    // 上スワイプで検索ボックスを非表示
    if (swipeDistance < -50 && window.pageYOffset > 200) {
        document.querySelector('.search-box').style.transform = 'translateY(-100%)';
    }
    
    // 下スワイプで検索ボックスを表示
    if (swipeDistance > 50 && window.pageYOffset > 200) {
        document.querySelector('.search-box').style.transform = 'translateY(0)';
    }
}

// レスポンシブ対応: モバイルでの表示調整
function adjustForMobile() {
    if (window.innerWidth < 768) {
        // モバイル表示の調整
        termCards.forEach(card => {
            card.style.fontSize = '0.95rem';
        });
    }
}

window.addEventListener('resize', adjustForMobile);
adjustForMobile(); // 初回実行

