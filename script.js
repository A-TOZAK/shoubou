// カテゴリーデータ
const categoryData = {
    'community': {
        title: '<ruby>地域<rt>ちいき</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に',
        color: 'text-blue-700',
        headerColor: 'bg-blue-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-blue-500 bg-blue-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        <ruby>火事<rt>かじ</rt></ruby>が<ruby>起<rt>お</rt></ruby>きたとき、どうやって<ruby>逃<rt>に</rt></ruby>げるか<ruby>地域<rt>ちいき</rt></ruby>のみんなで<ruby>練習<rt>れんしゅう</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>です。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-4 text-blue-800">
                        <ruby>実際<rt>じっさい</rt></ruby>の<ruby>例<rt>れい</rt></ruby>：<ruby>合同避難訓練<rt>ごうどうひなんくんれん</rt></ruby>
                    </h3>
                    <div class="mb-5">
                        <p class="mb-3 font-bold text-blue-700">
                            「おかしも」のルール
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="bg-blue-50 p-4 rounded border border-blue-200 hover:shadow-md transition-all">
                                <p class="font-bold text-blue-800 mb-1 text-2xl">お：<ruby>押<rt>お</rt></ruby>さない</p>
                                <p class="text-sm text-gray-600"><ruby>人<rt>ひと</rt></ruby>を<ruby>押<rt>お</rt></ruby>すと<ruby>危険<rt>きけん</rt></ruby>です</p>
                            </div>
                            <div class="bg-blue-50 p-4 rounded border border-blue-200 hover:shadow-md transition-all">
                                <p class="font-bold text-blue-800 mb-1 text-2xl">か：<ruby>駆<rt>か</rt></ruby>けない</p>
                                <p class="text-sm text-gray-600"><ruby>転<rt>ころ</rt></ruby>んでケガをします</p>
                            </div>
                            <div class="bg-blue-50 p-4 rounded border border-blue-200 hover:shadow-md transition-all">
                                <p class="font-bold text-blue-800 mb-1 text-2xl">し：しゃべらない</p>
                                <p class="text-sm text-gray-600"><ruby>指示<rt>しじ</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえません</p>
                            </div>
                            <div class="bg-blue-50 p-4 rounded border border-blue-200 hover:shadow-md transition-all">
                                <p class="font-bold text-blue-800 mb-1 text-2xl">も：<ruby>戻<rt>もど</rt></ruby>らない</p>
                                <p class="text-sm text-gray-600"><ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>があっても<ruby>戻<rt>もど</rt></ruby>りません</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-100 p-4 rounded">
                        <p class="font-medium">
                            <ruby>訓練<rt>くんれん</rt></ruby>では、<ruby>消防団<rt>しょうぼうだん</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>や、お<ruby>年寄<rt>としよ</rt></ruby>りと<ruby>一緒<rt>いっしょ</rt></ruby>に、<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>逃<rt>に</rt></ruby>げ<ruby>方<rt>かた</rt></ruby>を<ruby>練習<rt>れんしゅう</rt></ruby>します。「<ruby>煙<rt>けむり</rt></ruby>はハンカチで<ruby>口<rt>くち</rt></ruby>を<ruby>押<rt>お</rt></ruby>さえる」ことも<ruby>学<rt>まな</rt></ruby>びます。
                        </p>
                    </div>
                </div>

                <div class="card-simple bg-blue-50 p-5 rounded border-l-4 border-blue-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-blue-800">
                        <ruby>長岡京市<rt>ながおかきょうし</rt></ruby>の<ruby>例<rt>れい</rt></ruby>
                    </h3>
                    <div class="space-y-3">
                        <div class="bg-white p-4 rounded">
                            <p class="font-bold mb-2"><ruby>少年消防<rt>しょうねんしょうぼう</rt></ruby>クラブの<ruby>活動<rt>かつどう</rt></ruby></p>
                            <p class="text-sm">
                                <ruby>地域<rt>ちいき</rt></ruby>での<ruby>防火啓発活動<rt>ぼうかけいはつかつどう</rt></ruby>や、<ruby>消防団<rt>しょうぼうだん</rt></ruby>との<ruby>合同訓練<rt>ごうどうくんれん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>しています。
                            </p>
                        </div>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>長岡京市<rt>ながおかきょうし</rt></ruby>
                    </p>
                </div>

                <div class="card-simple bg-green-50 p-5 rounded border-l-4 border-green-500 animate-slideIn" style="animation-delay: 0.3s;">
                    <h3 class="font-bold text-lg mb-3 text-green-800">
                        <ruby>南相馬市<rt>みなみそうまし</rt></ruby>の<ruby>例<rt>れい</rt></ruby>
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <p class="mb-2">
                            <ruby>少年消防<rt>しょうねんしょうぼう</rt></ruby>クラブの<ruby>小学生<rt>しょうがくせい</rt></ruby>が、<ruby>消防団<rt>しょうぼうだん</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>たちと<ruby>一緒<rt>いっしょ</rt></ruby>に、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>放水訓練<rt>ほうすいくんれん</rt></ruby>を<ruby>体験<rt>たいけん</rt></ruby>しています。
                        </p>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>南相馬市<rt>みなみそうまし</rt></ruby>
                    </p>
                </div>
            </div>
        `
    },
    'doors': {
        title: '<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>逃<rt>に</rt></ruby>げ<ruby>道<rt>みち</rt></ruby>',
        color: 'text-red-700',
        headerColor: 'bg-red-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-red-500 bg-red-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        <ruby>学校<rt>がっこう</rt></ruby>やおうちには、「<ruby>防火扉<rt>ぼうかとびら</rt></ruby>」や「<ruby>逃<rt>に</rt></ruby>げ<ruby>道<rt>みち</rt></ruby>」があります。その<ruby>前<rt>まえ</rt></ruby>に<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>いていないか<ruby>確認<rt>かくにん</rt></ruby>しましょう。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-5 text-red-800 text-center">
                        <ruby>危険<rt>きけん</rt></ruby>を<ruby>探<rt>さが</rt></ruby>そう
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div class="border-4 border-green-500 rounded-lg p-6 text-center bg-green-50">
                            <div class="text-4xl font-bold text-green-600 mb-3">⭕ 正しい例</div>
                            <div class="text-6xl my-4">🚪</div>
                            <p class="font-bold">
                                <ruby>逃<rt>に</rt></ruby>げ<ruby>道<rt>みち</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>く、<ruby>物<rt>もの</rt></ruby>が<ruby>置<rt>お</rt></ruby>いていません
                            </p>
                        </div>
                        <div id="hazard-door" class="border-4 border-red-500 rounded-lg p-6 text-center bg-red-50 interactive-element">
                            <div class="text-4xl font-bold text-red-600 mb-3">❌ <ruby>危険<rt>きけん</rt></ruby>な<ruby>例<rt>れい</rt></ruby></div>
                            <div class="text-6xl my-4">📦🚪</div>
                            <p class="font-bold text-red-700 mb-2">
                                <ruby>物<rt>もの</rt></ruby>があって<ruby>通<rt>とお</rt></ruby>れません
                            </p>
                            <span class="inline-block bg-red-500 text-white px-4 py-2 rounded text-sm">
                                クリックして<ruby>詳<rt>くわ</rt></ruby>しく<ruby>見<rt>み</rt></ruby>る
                            </span>
                        </div>
                    </div>
                    <div id="hazard-explanation" class="hidden mt-4 p-5 bg-gray-800 text-white rounded animate-slideIn">
                        <h4 class="font-bold text-lg mb-2">なぜ<ruby>危険<rt>きけん</rt></ruby>なのか</h4>
                        <p class="leading-relaxed">
                            <ruby>火事<rt>かじ</rt></ruby>のときは、<ruby>煙<rt>けむり</rt></ruby>で<ruby>前<rt>まえ</rt></ruby>がよく<ruby>見<rt>み</rt></ruby>えなくなります。<ruby>逃<rt>に</rt></ruby>げ<ruby>道<rt>みち</rt></ruby>に<ruby>物<rt>もの</rt></ruby>があると、つまずいてケガをしたり、<ruby>逃<rt>に</rt></ruby>げ<ruby>遅<rt>おく</rt></ruby>れたりする<ruby>危険<rt>きけん</rt></ruby>があります。<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かないようにしましょう。
                        </p>
                    </div>
                </div>

                <div class="card-simple bg-orange-50 p-5 rounded border-l-4 border-orange-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-orange-800">
                        <ruby>徳島県<rt>とくしまけん</rt></ruby><ruby>半田小学校<rt>はんだしょうがっこう</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>み
                    </h3>
                    <p class="mb-3 font-medium">
                        3<ruby>年生<rt>ねんせい</rt></ruby>が<ruby>学校<rt>がっこう</rt></ruby>の<ruby>防火施設<rt>ぼうかしせつ</rt></ruby>・<ruby>設備<rt>せつび</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べました
                    </p>
                    <div class="bg-white p-4 rounded">
                        <p class="font-bold text-orange-700 mb-2"><ruby>調<rt>しら</rt></ruby>べた<ruby>設備<rt>せつび</rt></ruby></p>
                        <ul class="space-y-1 text-sm">
                            <li>• <ruby>煙感知器<rt>けむりかんちき</rt></ruby>（<ruby>煙<rt>けむり</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける<ruby>機械<rt>きかい</rt></ruby>）</li>
                            <li>• <ruby>熱感知器<rt>ねつかんちき</rt></ruby>（<ruby>熱<rt>ねつ</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける<ruby>機械<rt>きかい</rt></ruby>）</li>
                            <li>• <ruby>消火器<rt>しょうかき</rt></ruby>（<ruby>火<rt>ひ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す<ruby>道具<rt>どうぐ</rt></ruby>）</li>
                            <li>• <ruby>消火栓<rt>しょうかせん</rt></ruby>（<ruby>水<rt>みず</rt></ruby>が<ruby>出<rt>で</rt></ruby>る<ruby>箱<rt>はこ</rt></ruby>）</li>
                        </ul>
                        <div class="bg-yellow-50 p-3 rounded mt-3 border border-yellow-300">
                            <p class="text-sm font-medium">
                                <ruby>児童<rt>じどう</rt></ruby>の<ruby>感想<rt>かんそう</rt></ruby>：「どの<ruby>教室<rt>きょうしつ</rt></ruby>にもあることや、<ruby>意外<rt>いがい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>にもあることがわかりました」
                            </p>
                        </div>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>徳島県<rt>とくしまけん</rt></ruby>つるぎ<ruby>町立半田小学校<rt>ちょうりつはんだしょうがっこう</rt></ruby>
                    </p>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded animate-slideIn" style="animation-delay: 0.3s;">
                    <h3 class="font-bold text-lg mb-2 text-blue-800">
                        わたしたちにできること
                    </h3>
                    <p>
                        <ruby>学校<rt>がっこう</rt></ruby>の<ruby>防火設備<rt>ぼうかせつび</rt></ruby>を<ruby>探<rt>さが</rt></ruby>して、<ruby>地図<rt>ちず</rt></ruby>に<ruby>記録<rt>きろく</rt></ruby>してみましょう。そして、その<ruby>前<rt>まえ</rt></ruby>に<ruby>物<rt>もの</rt></ruby>が<ruby>置<rt>お</rt></ruby>いていないか<ruby>確認<rt>かくにん</rt></ruby>しましょう。
                    </p>
                </div>
            </div>
        `
    },
    'fire_check': {
        title: 'おうちの<ruby>火<rt>ひ</rt></ruby>の<ruby>元<rt>もと</rt></ruby>チェック',
        color: 'text-orange-700',
        headerColor: 'bg-orange-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-orange-500 bg-orange-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        おうちの<ruby>人<rt>ひと</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に、<ruby>火<rt>ひ</rt></ruby>の<ruby>元<rt>もと</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>後<rt>あと</rt></ruby>はかならず<ruby>確認<rt>かくにん</rt></ruby>しましょう。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-5 text-orange-800">
                        <ruby>家族<rt>かぞく</rt></ruby>でやってみよう：<ruby>火<rt>ひ</rt></ruby>の<ruby>元<rt>もと</rt></ruby>チェック
                    </h3>
                    <div class="space-y-3">
                        ${[
                            { text: 'ガスコンロの<ruby>火<rt>ひ</rt></ruby>は<ruby>消<rt>け</rt></ruby>しましたか？', sub: '<ruby>料理<rt>りょうり</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったら<ruby>必<rt>かなら</rt></ruby>ず<ruby>確認<rt>かくにん</rt></ruby>', icon: '🔥' },
                            { text: 'ストーブの<ruby>周<rt>まわ</rt></ruby>りに<ruby>燃<rt>も</rt></ruby>えやすい<ruby>物<rt>もの</rt></ruby>はありませんか？', sub: '<ruby>洗濯物<rt>せんたくもの</rt></ruby>やカーテンから<ruby>離<rt>はな</rt></ruby>しましょう', icon: '🌡️' },
                            { text: '<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、おうちの<ruby>周<rt>まわ</rt></ruby>りを<ruby>見<rt>み</rt></ruby>て<ruby>回<rt>まわ</rt></ruby>りましたか？', sub: '<ruby>最後<rt>さいご</rt></ruby>の<ruby>点検<rt>てんけん</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>です', icon: '🚶' },
                            { text: '<ruby>火災警報器<rt>かさいけいほうき</rt></ruby>はちゃんと<ruby>動<rt>うご</rt></ruby>きますか？', sub: 'ボタンを<ruby>押<rt>お</rt></ruby>して<ruby>確<rt>たし</rt></ruby>かめましょう（おうちの<ruby>人<rt>ひと</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に）', icon: '🔔' },
                            { text: 'ろうそくやお<ruby>線香<rt>せんこう</rt></ruby>の<ruby>火<rt>ひ</rt></ruby>は、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>見<rt>み</rt></ruby>ていますか？', sub: '<ruby>消<rt>け</rt></ruby>すまで<ruby>離<rt>はな</rt></ruby>れないようにしましょう', icon: '🕯️' }
                        ].map(item => `
                            <div class="bg-orange-50 p-4 rounded border border-orange-200 hover:shadow-md transition-all">
                                <label class="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" class="mt-1 flex-shrink-0 check-animation">
                                    <span class="text-3xl flex-shrink-0">${item.icon}</span>
                                    <div class="flex-1">
                                        <p class="font-bold mb-1">
                                            ${item.text}
                                        </p>
                                        <p class="text-sm text-gray-600">
                                            ${item.sub}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-5 bg-yellow-50 border border-yellow-300 p-4 rounded">
                        <p class="text-sm text-gray-700 font-medium text-center">
                            ※このチェックは<ruby>覚<rt>おぼ</rt></ruby>えて、おうちで<ruby>実際<rt>じっさい</rt></ruby>にやってみましょう
                        </p>
                    </div>
                </div>

                <div class="card-simple bg-blue-50 p-5 rounded border-l-4 border-blue-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-blue-800">
                        <ruby>東京消防庁<rt>とうきょうしょうぼうちょう</rt></ruby>・<ruby>横浜市<rt>よこはまし</rt></ruby>からのメッセージ
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <p class="mb-3">
                            おうちの<ruby>防火<rt>ぼうか</rt></ruby>チェックをすることで、<ruby>火災<rt>かさい</rt></ruby>を<ruby>未然<rt>みぜん</rt></ruby>に<ruby>防<rt>ふせ</rt></ruby>ぐことができます。
                        </p>
                        <div class="bg-blue-100 p-4 rounded">
                            <p class="font-bold text-blue-800 mb-2"><ruby>定期的<rt>ていきてき</rt></ruby>な<ruby>点検<rt>てんけん</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby></p>
                            <p class="text-sm">
                                <ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>協力<rt>きょうりょく</rt></ruby>して、<ruby>火<rt>ひ</rt></ruby>の<ruby>元<rt>もと</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>をする<ruby>習慣<rt>しゅうかん</rt></ruby>をつけましょう。
                            </p>
                        </div>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>東京消防庁<rt>とうきょうしょうぼうちょう</rt></ruby>・<ruby>横浜市<rt>よこはまし</rt></ruby>
                    </p>
                </div>
            </div>
        `
    },
    'cleaning': {
        title: 'お<ruby>掃除<rt>そうじ</rt></ruby>も<ruby>防火<rt>ぼうか</rt></ruby>',
        color: 'text-teal-700',
        headerColor: 'bg-teal-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-teal-500 bg-teal-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        おうちがきれいだと、<ruby>火事<rt>かじ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>も<ruby>減<rt>へ</rt></ruby>ります。<ruby>特<rt>とく</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけたいのは「コンセントの<ruby>埃<rt>ほこり</rt></ruby>」です。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded text-center animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-4 text-teal-800">
                        コンセントの<ruby>埃<rt>ほこり</rt></ruby>
                    </h3>
                    <div class="bg-teal-50 p-6 rounded mb-5">
                        <p class="mb-4 text-lg">
                            コンセントとプラグの<ruby>間<rt>あいだ</rt></ruby>に<ruby>埃<rt>ほこり</rt></ruby>が<ruby>溜<rt>た</rt></ruby>まると、そこから<ruby>火事<rt>かじ</rt></ruby>になることがあります。
                        </p>
                        <div class="bg-yellow-100 border-2 border-yellow-400 p-4 rounded inline-block">
                            <p class="font-bold text-yellow-900 mb-2">これを「<ruby>トラッキング現象<rt>とらっきんぐげんしょう</rt></ruby>」といいます</p>
                            <p class="text-sm">
                                <ruby>埃<rt>ほこり</rt></ruby>に<ruby>湿気<rt>しっけ</rt></ruby>がつくと<ruby>電気<rt>でんき</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れて<ruby>火<rt>ひ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます
                            </p>
                        </div>
                    </div>
                    
                    <div id="outlet-visual" class="p-8 bg-gray-200 rounded-lg inline-block border-4 border-gray-400 mb-4">
                        <span class="text-7xl">🔌</span>
                        <span id="dust-icon" class="text-5xl">💨💨</span>
                    </div>
                    <p id="outlet-text" class="mb-4 font-bold text-xl text-red-600">
                        <ruby>埃<rt>ほこり</rt></ruby>がたまっています！<ruby>危険<rt>きけん</rt></ruby>です！
                    </p>
                    <button id="clean-button" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded transition-all transform hover:scale-105">
                        お<ruby>掃除<rt>そうじ</rt></ruby>する
                    </button>
                </div>

                <div class="card-simple bg-purple-50 p-5 rounded border-l-4 border-purple-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-purple-800">
                        <ruby>掃除<rt>そうじ</rt></ruby>する<ruby>場所<rt>ばしょ</rt></ruby>
                    </h3>
                    <div class="bg-white p-4 rounded space-y-3">
                        <div class="bg-purple-100 p-3 rounded">
                            <p class="font-bold text-purple-800 mb-2">
                                「ホコリがあったよ！<ruby>掃除<rt>そうじ</rt></ruby>、<ruby>掃除<rt>そうじ</rt></ruby>！」
                            </p>
                            <ul class="text-sm space-y-1">
                                <li>• テレビや<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の<ruby>裏<rt>うら</rt></ruby></li>
                                <li>• ゲーム<ruby>機<rt>き</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>り</li>
                                <li>• <ruby>洗濯機<rt>せんたくき</rt></ruby>の<ruby>裏<rt>うら</rt></ruby></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="card-simple bg-orange-50 p-5 rounded border-l-4 border-orange-500 animate-slideIn" style="animation-delay: 0.3s;">
                    <h3 class="font-bold text-lg mb-3 text-orange-800">
                        <ruby>調布市<rt>ちょうふし</rt></ruby>・<ruby>福山市<rt>ふくやまし</rt></ruby>の<ruby>例<rt>れい</rt></ruby>
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <p class="font-bold mb-2 text-orange-700">
                            <ruby>小学生<rt>しょうがくせい</rt></ruby>の<ruby>防火<rt>ぼうか</rt></ruby>ポスター
                        </p>
                        <div class="bg-orange-100 p-4 rounded text-center">
                            <p class="text-lg font-bold text-orange-800">
                                「たこ<ruby>足配線<rt>あしはいせん</rt></ruby> <ruby>気<rt>き</rt></ruby>をつけよう」
                            </p>
                        </div>
                        <p class="mt-3 text-sm">
                            たこ<ruby>足配線<rt>あしはいせん</rt></ruby>（コンセントにプラグを<ruby>刺<rt>さ</rt></ruby>しすぎること）も<ruby>危険<rt>きけん</rt></ruby>です
                        </p>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>調布市<rt>ちょうふし</rt></ruby>・<ruby>福山市<rt>ふくやまし</rt></ruby> <ruby>防火<rt>ぼうか</rt></ruby>ポスター
                    </p>
                </div>
            </div>
        `
    },
    'planning': {
        title: '<ruby>計画<rt>けいかく</rt></ruby>してやってみよう',
        color: 'text-purple-700',
        headerColor: 'bg-purple-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-purple-500 bg-purple-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        <ruby>火事<rt>かじ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、<ruby>自分<rt>じぶん</rt></ruby>たちで<ruby>何<rt>なに</rt></ruby>ができるか<ruby>計画<rt>けいかく</rt></ruby>して、<ruby>実行<rt>じっこう</rt></ruby>してみましょう。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-4 text-purple-800">
                        <ruby>例<rt>れい</rt></ruby>：<ruby>防火<rt>ぼうか</rt></ruby>ポスターや<ruby>標語<rt>ひょうご</rt></ruby>をつくろう
                    </h3>
                    <p class="mb-5">
                        みんなが<ruby>考<rt>かんが</rt></ruby>えたポスターや<ruby>標語<rt>ひょうご</rt></ruby>が、<ruby>火事<rt>かじ</rt></ruby>への<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びかけます。
                    </p>
                    <div class="bg-purple-50 p-5 rounded">
                        <p class="font-bold mb-3 text-purple-800"><ruby>標語<rt>ひょうご</rt></ruby>の<ruby>例<rt>れい</rt></ruby></p>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded border-l-4 border-purple-400 hover:shadow-md transition-all">
                                <p class="font-medium">「<ruby>気<rt>き</rt></ruby>をつけよう <ruby>火<rt>ひ</rt></ruby>の<ruby>元<rt>もと</rt></ruby> ストーブ コンセント」</p>
                            </div>
                            <div class="bg-white p-3 rounded border-l-4 border-pink-400 hover:shadow-md transition-all">
                                <p class="font-medium">「<ruby>消<rt>け</rt></ruby>すまでは <ruby>離<rt>はな</rt></ruby>れない」</p>
                            </div>
                            <div class="bg-white p-3 rounded border-l-4 border-indigo-400 hover:shadow-md transition-all">
                                <p class="font-medium">「<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？ <ruby>自分<rt>じぶん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る <ruby>火<rt>ひ</rt></ruby>の<ruby>注意<rt>ちゅうい</rt></ruby>」</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-simple bg-blue-50 p-5 rounded border-l-4 border-blue-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-blue-800">
                        <ruby>総務省消防庁<rt>そうむしょうしょうぼうちょう</rt></ruby>の<ruby>防火標語<rt>ぼうかひょうご</rt></ruby>
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <div class="bg-blue-100 p-5 rounded mb-3 text-center">
                            <p class="font-bold text-blue-800 text-lg">
                                <ruby>令和<rt>れいわ</rt></ruby>5<ruby>年度<rt>ねんど</rt></ruby><ruby>全国統一防火標語<rt>ぜんこくとういつぼうかひょうご</rt></ruby>
                            </p>
                        </div>
                        <p class="text-sm">
                            <ruby>毎年<rt>まいとし</rt></ruby>、<ruby>全国<rt>ぜんこく</rt></ruby>から<ruby>応募<rt>おうぼ</rt></ruby>された<ruby>作品<rt>さくひん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>から<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>標語<rt>ひょうご</rt></ruby>が<ruby>選<rt>えら</rt></ruby>ばれます。
                        </p>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>総務省消防庁<rt>そうむしょうしょうぼうちょう</rt></ruby>
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.3s;">
                    <h3 class="font-bold text-xl mb-4 text-purple-800">
                        <ruby>自分<rt>じぶん</rt></ruby>でも<ruby>標語<rt>ひょうご</rt></ruby>をつくってみよう
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-bold mb-2 text-purple-700">
                                あなたの<ruby>防火標語<rt>ぼうかひょうご</rt></ruby>：
                            </label>
                            <input id="slogan-input" type="text" 
                                class="w-full p-3 border-2 border-purple-300 rounded focus:border-purple-500 focus:outline-none transition-all" 
                                placeholder="（例）「寝るまえの 確認 ぼくと ママの 約束」">
                        </div>
                        <button id="slogan-submit" 
                            class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded transition-all transform hover:scale-105">
                            <ruby>標語<rt>ひょうご</rt></ruby>をつくった
                        </button>
                        <div id="slogan-feedback" class="hidden p-4 bg-purple-100 rounded border-2 border-purple-300 animate-slideIn">
                            <p class="font-bold text-purple-800 text-center"></p>
                        </div>
                    </div>
                </div>

                <div class="card-simple bg-pink-50 p-5 rounded border-l-4 border-pink-500 animate-slideIn" style="animation-delay: 0.4s;">
                    <h3 class="font-bold text-lg mb-3 text-pink-800">
                        <ruby>愛媛大学<rt>えひめだいがく</rt></ruby>の<ruby>例<rt>れい</rt></ruby>
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <p class="mb-3">
                            <ruby>大学生<rt>だいがくせい</rt></ruby>と<ruby>協力<rt>きょうりょく</rt></ruby>して「<ruby>防災劇<rt>ぼうさいげき</rt></ruby>」のシナリオを<ruby>考<rt>かんが</rt></ruby>えた<ruby>小学校<rt>しょうがっこう</rt></ruby>があります。
                        </p>
                        <div class="bg-pink-100 p-3 rounded mb-3">
                            <p class="font-bold text-pink-800 mb-2"><ruby>劇<rt>げき</rt></ruby>のテーマ</p>
                            <p class="text-sm">
                                「<ruby>避難所<rt>ひなんじょ</rt></ruby>で<ruby>水<rt>みず</rt></ruby>を<ruby>譲<rt>ゆず</rt></ruby>るか、<ruby>譲<rt>ゆず</rt></ruby>らないか」など、<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えが<ruby>出<rt>で</rt></ruby>ない<ruby>難<rt>むずか</rt></ruby>しい<ruby>選択<rt>せんたく</rt></ruby>にチャレンジしました。
                            </p>
                        </div>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>愛媛大学<rt>えひめだいがく</rt></ruby>
                    </p>
                </div>
            </div>
        `
    },
    'telling': {
        title: 'みんなに<ruby>伝<rt>つた</rt></ruby>えよう',
        color: 'text-pink-700',
        headerColor: 'bg-pink-600',
        content: `
            <div class="space-y-6">
                <div class="section-header border-pink-500 bg-pink-50 p-5 rounded animate-slideIn">
                    <p class="text-lg font-medium leading-relaxed">
                        <ruby>火事<rt>かじ</rt></ruby>の<ruby>怖<rt>こわ</rt></ruby>さや、<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>知<rt>し</rt></ruby>ったら、こんどはそれをみんなに<ruby>伝<rt>つた</rt></ruby>えてみましょう。
                    </p>
                </div>

                <div class="bg-white border border-gray-200 p-6 rounded animate-slideIn" style="animation-delay: 0.1s;">
                    <h3 class="font-bold text-xl mb-5 text-pink-800">
                        だれに、どうやって<ruby>伝<rt>つた</rt></ruby>える？
                    </h3>
                    <div class="flex gap-2 mb-5 border-b-2 border-gray-200">
                        <button class="tab-button active flex-1 py-3 px-4 text-center font-bold text-pink-700 transition-all" data-target="tab-family">
                            おうちの<ruby>人<rt>ひと</rt></ruby>へ
                        </button>
                        <button class="tab-button flex-1 py-3 px-4 text-center font-bold text-gray-500 transition-all" data-target="tab-younger">
                            1・2<ruby>年生<rt>ねんせい</rt></ruby>へ
                        </button>
                    </div>
                    
                    <div id="tab-family" class="tab-content bg-pink-50 p-5 rounded">
                        <h4 class="font-bold text-lg mb-3 text-pink-800">
                            おうちの<ruby>人<rt>ひと</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>える アイデア
                        </h4>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded border-l-4 border-pink-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1">おうちの「<ruby>防火<rt>ぼうか</rt></ruby>クイズ」を<ruby>出<rt>だ</rt></ruby>す</p>
                                <p class="text-sm text-gray-600">
                                    <ruby>勉強<rt>べんきょう</rt></ruby>したことをもとにクイズを<ruby>作<rt>つく</rt></ruby>ってみましょう
                                </p>
                            </div>
                            <div class="bg-white p-4 rounded border-l-4 border-pink-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1"><ruby>火災警報器<rt>かさいけいほうき</rt></ruby>のボタンを<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>押<rt>お</rt></ruby>してみる</p>
                                <p class="text-sm text-gray-600">
                                    <ruby>点検<rt>てんけん</rt></ruby>の<ruby>大切<rt>たいせつ</rt></ruby>さを<ruby>伝<rt>つた</rt></ruby>えましょう
                                </p>
                            </div>
                            <div class="bg-white p-4 rounded border-l-4 border-pink-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1">コンセントの<ruby>周<rt>まわ</rt></ruby>りを<ruby>一緒<rt>いっしょ</rt></ruby>にお<ruby>掃除<rt>そうじ</rt></ruby>する</p>
                                <p class="text-sm text-gray-600">
                                    トラッキング<ruby>現象<rt>げんしょう</rt></ruby>について<ruby>説明<rt>せつめい</rt></ruby>しましょう
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="tab-younger" class="tab-content hidden bg-blue-50 p-5 rounded">
                        <h4 class="font-bold text-lg mb-3 text-blue-800">
                            1・2<ruby>年生<rt>ねんせい</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>える アイデア
                        </h4>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded border-l-4 border-blue-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1"><ruby>火事<rt>かじ</rt></ruby>の<ruby>怖<rt>こわ</rt></ruby>さが<ruby>分<rt>わ</rt></ruby>かる<ruby>絵本<rt>えほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んであげる</p>
                                <p class="text-sm text-gray-600">
                                    <ruby>分<rt>わ</rt></ruby>かりやすく<ruby>優<rt>やさ</rt></ruby>しく<ruby>伝<rt>つた</rt></ruby>えましょう
                                </p>
                            </div>
                            <div class="bg-white p-4 rounded border-l-4 border-blue-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1">「おかしも」のルールを<ruby>教<rt>おし</rt></ruby>える<ruby>紙芝居<rt>かみしばい</rt></ruby>をつくる</p>
                                <p class="text-sm text-gray-600">
                                    <ruby>絵<rt>え</rt></ruby>で<ruby>分<rt>わ</rt></ruby>かりやすく<ruby>説明<rt>せつめい</rt></ruby>しましょう
                                </p>
                            </div>
                            <div class="bg-white p-4 rounded border-l-4 border-blue-400 hover:shadow-md transition-all">
                                <p class="font-bold mb-1"><ruby>自分<rt>じぶん</rt></ruby>たちでつくった「<ruby>防火<rt>ぼうか</rt></ruby>ポスター」を<ruby>見<rt>み</rt></ruby>せて<ruby>説明<rt>せつめい</rt></ruby>する</p>
                                <p class="text-sm text-gray-600">
                                    <ruby>作品<rt>さくひん</rt></ruby>をつかって<ruby>発表<rt>はっぴょう</rt></ruby>しましょう
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-simple bg-yellow-50 p-5 rounded border-l-4 border-yellow-500 animate-slideIn" style="animation-delay: 0.2s;">
                    <h3 class="font-bold text-lg mb-3 text-yellow-800">
                        <ruby>東京消防庁<rt>とうきょうしょうぼうちょう</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>み
                    </h3>
                    <div class="bg-white p-4 rounded">
                        <p class="mb-3">
                            <ruby>消防<rt>しょうぼう</rt></ruby>フェスタなどのイベントで、<ruby>楽<rt>たの</rt></ruby>しく<ruby>防火<rt>ぼうか</rt></ruby>について<ruby>学<rt>まな</rt></ruby>べる<ruby>機会<rt>きかい</rt></ruby>があります。
                        </p>
                        <div class="bg-yellow-100 p-4 rounded text-center">
                            <p class="font-bold text-yellow-900">
                                <ruby>体験<rt>たいけん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>して<ruby>学<rt>まな</rt></ruby>ぶことが<ruby>大切<rt>たいせつ</rt></ruby>
                            </p>
                        </div>
                    </div>
                    <p class="text-xs mt-3 text-gray-600 bg-white p-2 rounded">
                        <ruby>出典<rt>しゅってん</rt></ruby>：<ruby>東京消防庁<rt>とうきょうしょうぼうちょう</rt></ruby>
                    </p>
                </div>
            </div>
        `
    }
};

// DOM要素の取得
const homeView = document.getElementById('home-view');
const categoryView = document.getElementById('category-view');
const backButton = document.getElementById('back-button');
const categoryContent = document.getElementById('category-content');
const navCards = document.querySelectorAll('.nav-card');
const sourcesButton = document.getElementById('sources-button');
const sourcesModal = document.getElementById('sources-modal');
const closeModal = document.getElementById('close-modal');

// アニメーション用のCSSを追加
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-slideIn {
        animation: slideIn 0.5s ease forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);

// カテゴリーを表示する関数
function showCategory(category) {
    const data = categoryData[category];
    if (!data) return;

    const header = categoryView.querySelector('#category-header');
    header.className = `${data.headerColor} p-5`;

    categoryContent.innerHTML = `
        <h2 class="text-3xl font-bold ${data.color} mb-6">${data.title}</h2>
        ${data.content}
    `;
    
    homeView.classList.add('hidden');
    categoryView.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    attachInteractiveListeners(category);
}

// ホーム画面を表示する関数
function showHome() {
    categoryView.classList.add('hidden');
    homeView.classList.remove('hidden');
    categoryContent.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// インタラクティブ機能を追加する関数
function attachInteractiveListeners(category) {
    if (category === 'doors') {
        const hazardDoor = document.getElementById('hazard-door');
        const hazardExplanation = document.getElementById('hazard-explanation');
        if (hazardDoor && hazardExplanation) {
            hazardDoor.addEventListener('click', () => {
                hazardExplanation.classList.toggle('hidden');
                hazardDoor.classList.add('animate-shake');
                setTimeout(() => {
                    hazardDoor.classList.remove('animate-shake');
                }, 500);
            });
        }
    }
    
    if (category === 'cleaning') {
        const cleanButton = document.getElementById('clean-button');
        const dustIcon = document.getElementById('dust-icon');
        const outletText = document.getElementById('outlet-text');
        const outletVisual = document.getElementById('outlet-visual');
        if (cleanButton && dustIcon && outletText) {
            cleanButton.addEventListener('click', () => {
                dustIcon.innerHTML = '✨✨';
                outletText.innerHTML = 'ピカピカになりました！これで<ruby>安心<rt>あんしん</rt></ruby>！';
                outletText.classList.remove('text-red-600');
                outletText.classList.add('text-teal-700');
                outletVisual.classList.remove('border-gray-400');
                outletVisual.classList.add('border-teal-400', 'sparkle');
                cleanButton.innerHTML = 'お<ruby>掃除<rt>そうじ</rt></ruby>かんりょう';
                cleanButton.disabled = true;
                cleanButton.classList.add('opacity-50', 'cursor-not-allowed');
                
                // 紙吹雪エフェクト
                confetti();
            });
        }
    }

    if (category === 'planning') {
        const sloganSubmit = document.getElementById('slogan-submit');
        const sloganInput = document.getElementById('slogan-input');
        const sloganFeedback = document.getElementById('slogan-feedback');
        if (sloganSubmit && sloganInput && sloganFeedback) {
            sloganSubmit.addEventListener('click', () => {
                const feedbackText = sloganFeedback.querySelector('p');
                if (sloganInput.value.trim() === '') {
                    feedbackText.textContent = 'なにか文字を入れてみましょう';
                    sloganFeedback.classList.remove('bg-purple-100', 'border-purple-300');
                    sloganFeedback.classList.add('bg-yellow-100', 'border-yellow-300');
                } else {
                    feedbackText.innerHTML = 'すてきな<ruby>標語<rt>ひょうご</rt></ruby>ができましたね！<ruby>家族<rt>かぞく</rt></ruby>や<ruby>友達<rt>ともだち</rt></ruby>に<ruby>見<rt>み</rt></ruby>せてあげましょう。';
                    sloganFeedback.classList.remove('bg-yellow-100', 'border-yellow-300');
                    sloganFeedback.classList.add('bg-purple-100', 'border-purple-300', 'sparkle');
                    confetti();
                }
                sloganFeedback.classList.remove('hidden');
            });
        }
    }

    if (category === 'telling') {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                
                tabContents.forEach(content => {
                    if (content.id === targetId) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
                
                tabButtons.forEach(btn => {
                    if (btn === button) {
                        btn.classList.add('text-pink-700', 'active');
                        btn.classList.remove('text-gray-500');
                    } else {
                        btn.classList.remove('text-pink-700', 'active');
                        btn.classList.add('text-gray-500');
                    }
                });
            });
        });
    }
    
    // チェックボックスのアニメーション
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                const parent = this.closest('.bg-orange-50, .bg-blue-50, .bg-green-50, .bg-teal-50');
                if (parent) {
                    parent.classList.add('sparkle');
                    setTimeout(() => {
                        parent.classList.remove('sparkle');
                    }, 1500);
                }
            }
        });
    });
}

// 紙吹雪エフェクト（簡易版）
function confetti() {
    const colors = ['#FF6B9D', '#C44569', '#FFA07A', '#98D8C8', '#6FB98F'];
    for (let i = 0; i < 50; i++) {
        const confetto = document.createElement('div');
        confetto.style.position = 'fixed';
        confetto.style.width = '10px';
        confetto.style.height = '10px';
        confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetto.style.left = Math.random() * window.innerWidth + 'px';
        confetto.style.top = '-10px';
        confetto.style.opacity = '1';
        confetto.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetto.style.pointerEvents = 'none';
        confetto.style.zIndex = '9999';
        document.body.appendChild(confetto);
        
        const duration = Math.random() * 3 + 2;
        const animation = confetto.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight + 10}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            delay: Math.random() * 200
        });
        
        animation.onfinish = () => confetto.remove();
    }
}

// イベントリスナーの設定
navCards.forEach(card => {
    card.addEventListener('click', () => {
        showCategory(card.dataset.category);
    });
});

backButton.addEventListener('click', showHome);

sourcesButton.addEventListener('click', () => {
    sourcesModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    sourcesModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

sourcesModal.addEventListener('click', (e) => {
    if (e.target === sourcesModal) {
        sourcesModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// キーボードショートカット
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sourcesModal.classList.contains('show')) {
        sourcesModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

