        // CONFIGURAÇÃO DE ÁUDIOS
        // Coloque os arquivos de áudio na pasta 'audio' do projeto
        // Formato: audio/hiragana/a.mp3, audio/katakana/a.mp3, etc.
        // Organização em formato de tabela: A I U E O (colunas)
        const hiraganaTable = [
            // Linha A
            [{char: 'あ', romaji: 'a', audio: 'audio/hiragana/a.mp3'}, 
             {char: 'か', romaji: 'ka', audio: 'audio/hiragana/ka.mp3'}, 
             {char: 'さ', romaji: 'sa', audio: 'audio/hiragana/sa.mp3'}, 
             {char: 'た', romaji: 'ta', audio: 'audio/hiragana/ta.mp3'}, 
             {char: 'な', romaji: 'na', audio: 'audio/hiragana/na.mp3'}, 
             {char: 'は', romaji: 'ha', audio: 'audio/hiragana/ha.mp3'}, 
             {char: 'ま', romaji: 'ma', audio: 'audio/hiragana/ma.mp3'}, 
             {char: 'や', romaji: 'ya', audio: 'audio/hiragana/ya.mp3'}, 
             {char: 'ら', romaji: 'ra', audio: 'audio/hiragana/ra.mp3'}, 
             {char: 'わ', romaji: 'wa', audio: 'audio/hiragana/wa.mp3'}],
            // Linha I
            [{char: 'い', romaji: 'i', audio: 'audio/hiragana/i.mp3'}, 
             {char: 'き', romaji: 'ki', audio: 'audio/hiragana/ki.mp3'}, 
             {char: 'し', romaji: 'shi', audio: 'audio/hiragana/shi.mp3'}, 
             {char: 'ち', romaji: 'chi', audio: 'audio/hiragana/chi.mp3'}, 
             {char: 'に', romaji: 'ni', audio: 'audio/hiragana/ni.mp3'}, 
             {char: 'ひ', romaji: 'hi', audio: 'audio/hiragana/hi.mp3'}, 
             {char: 'み', romaji: 'mi', audio: 'audio/hiragana/mi.mp3'}, 
             null, 
             {char: 'り', romaji: 'ri', audio: 'audio/hiragana/ri.mp3'}, 
             null],
            // Linha U
            [{char: 'う', romaji: 'u', audio: 'audio/hiragana/u.mp3'}, 
             {char: 'く', romaji: 'ku', audio: 'audio/hiragana/ku.mp3'}, 
             {char: 'す', romaji: 'su', audio: 'audio/hiragana/su.mp3'}, 
             {char: 'つ', romaji: 'tsu', audio: 'audio/hiragana/tsu.mp3'}, 
             {char: 'ぬ', romaji: 'nu', audio: 'audio/hiragana/nu.mp3'}, 
             {char: 'ふ', romaji: 'fu', audio: 'audio/hiragana/fu.mp3'}, 
             {char: 'む', romaji: 'mu', audio: 'audio/hiragana/mu.mp3'}, 
             {char: 'ゆ', romaji: 'yu', audio: 'audio/hiragana/yu.mp3'}, 
             {char: 'る', romaji: 'ru', audio: 'audio/hiragana/ru.mp3'}, 
             null],
            // Linha E
            [{char: 'え', romaji: 'e', audio: 'audio/hiragana/e.mp3'}, 
             {char: 'け', romaji: 'ke', audio: 'audio/hiragana/ke.mp3'}, 
             {char: 'せ', romaji: 'se', audio: 'audio/hiragana/se.mp3'}, 
             {char: 'て', romaji: 'te', audio: 'audio/hiragana/te.mp3'}, 
             {char: 'ね', romaji: 'ne', audio: 'audio/hiragana/ne.mp3'}, 
             {char: 'へ', romaji: 'he', audio: 'audio/hiragana/he.mp3'}, 
             {char: 'め', romaji: 'me', audio: 'audio/hiragana/me.mp3'}, 
             null, 
             {char: 'れ', romaji: 're', audio: 'audio/hiragana/re.mp3'}, 
             null],
            // Linha O
            [{char: 'お', romaji: 'o', audio: 'audio/hiragana/o.mp3'}, 
             {char: 'こ', romaji: 'ko', audio: 'audio/hiragana/ko.mp3'}, 
             {char: 'そ', romaji: 'so', audio: 'audio/hiragana/so.mp3'}, 
             {char: 'と', romaji: 'to', audio: 'audio/hiragana/to.mp3'}, 
             {char: 'の', romaji: 'no', audio: 'audio/hiragana/no.mp3'}, 
             {char: 'ほ', romaji: 'ho', audio: 'audio/hiragana/ho.mp3'}, 
             {char: 'も', romaji: 'mo', audio: 'audio/hiragana/mo.mp3'}, 
             {char: 'よ', romaji: 'yo', audio: 'audio/hiragana/yo.mp3'}, 
             {char: 'ろ', romaji: 'ro', audio: 'audio/hiragana/ro.mp3'}, 
             {char: 'を', romaji: 'wo', audio: 'audio/hiragana/wo.mp3'}],
            // Linha N
            [{char: 'ん', romaji: 'n', audio: 'audio/hiragana/n.mp3'}, 
             null, null, null, null, null, null, null, null, null]
        ];

        const katakanaTable = [
            // Linha A
            [{char: 'ア', romaji: 'a', audio: 'audio/katakana/a.mp3'}, 
             {char: 'カ', romaji: 'ka', audio: 'audio/katakana/ka.mp3'}, 
             {char: 'サ', romaji: 'sa', audio: 'audio/katakana/sa.mp3'}, 
             {char: 'タ', romaji: 'ta', audio: 'audio/katakana/ta.mp3'}, 
             {char: 'ナ', romaji: 'na', audio: 'audio/katakana/na.mp3'}, 
             {char: 'ハ', romaji: 'ha', audio: 'audio/katakana/ha.mp3'}, 
             {char: 'マ', romaji: 'ma', audio: 'audio/katakana/ma.mp3'}, 
             {char: 'ヤ', romaji: 'ya', audio: 'audio/katakana/ya.mp3'}, 
             {char: 'ラ', romaji: 'ra', audio: 'audio/katakana/ra.mp3'}, 
             {char: 'ワ', romaji: 'wa', audio: 'audio/katakana/wa.mp3'}],
            // Linha I
            [{char: 'イ', romaji: 'i', audio: 'audio/katakana/i.mp3'}, 
             {char: 'キ', romaji: 'ki', audio: 'audio/katakana/ki.mp3'}, 
             {char: 'シ', romaji: 'shi', audio: 'audio/katakana/shi.mp3'}, 
             {char: 'チ', romaji: 'chi', audio: 'audio/katakana/chi.mp3'}, 
             {char: 'ニ', romaji: 'ni', audio: 'audio/katakana/ni.mp3'}, 
             {char: 'ヒ', romaji: 'hi', audio: 'audio/katakana/hi.mp3'}, 
             {char: 'ミ', romaji: 'mi', audio: 'audio/katakana/mi.mp3'}, 
             null, 
             {char: 'リ', romaji: 'ri', audio: 'audio/katakana/ri.mp3'}, 
             null],
            // Linha U
            [{char: 'ウ', romaji: 'u', audio: 'audio/katakana/u.mp3'}, 
             {char: 'ク', romaji: 'ku', audio: 'audio/katakana/ku.mp3'}, 
             {char: 'ス', romaji: 'su', audio: 'audio/katakana/su.mp3'}, 
             {char: 'ツ', romaji: 'tsu', audio: 'audio/katakana/tsu.mp3'}, 
             {char: 'ヌ', romaji: 'nu', audio: 'audio/katakana/nu.mp3'}, 
             {char: 'フ', romaji: 'fu', audio: 'audio/katakana/fu.mp3'}, 
             {char: 'ム', romaji: 'mu', audio: 'audio/katakana/mu.mp3'}, 
             {char: 'ユ', romaji: 'yu', audio: 'audio/katakana/yu.mp3'}, 
             {char: 'ル', romaji: 'ru', audio: 'audio/katakana/ru.mp3'}, 
             null],
            // Linha E
            [{char: 'エ', romaji: 'e', audio: 'audio/katakana/e.mp3'}, 
             {char: 'ケ', romaji: 'ke', audio: 'audio/katakana/ke.mp3'}, 
             {char: 'セ', romaji: 'se', audio: 'audio/katakana/se.mp3'}, 
             {char: 'テ', romaji: 'te', audio: 'audio/katakana/te.mp3'}, 
             {char: 'ネ', romaji: 'ne', audio: 'audio/katakana/ne.mp3'}, 
             {char: 'ヘ', romaji: 'he', audio: 'audio/katakana/he.mp3'}, 
             {char: 'メ', romaji: 'me', audio: 'audio/katakana/me.mp3'}, 
             null, 
             {char: 'レ', romaji: 're', audio: 'audio/katakana/re.mp3'}, 
             null],
            // Linha O
            [{char: 'オ', romaji: 'o', audio: 'audio/katakana/o.mp3'}, 
             {char: 'コ', romaji: 'ko', audio: 'audio/katakana/ko.mp3'}, 
             {char: 'ソ', romaji: 'so', audio: 'audio/katakana/so.mp3'}, 
             {char: 'ト', romaji: 'to', audio: 'audio/katakana/to.mp3'}, 
             {char: 'ノ', romaji: 'no', audio: 'audio/katakana/no.mp3'}, 
             {char: 'ホ', romaji: 'ho', audio: 'audio/katakana/ho.mp3'}, 
             {char: 'モ', romaji: 'mo', audio: 'audio/katakana/mo.mp3'}, 
             {char: 'ヨ', romaji: 'yo', audio: 'audio/katakana/yo.mp3'}, 
             {char: 'ロ', romaji: 'ro', audio: 'audio/katakana/ro.mp3'}, 
             {char: 'ヲ', romaji: 'wo', audio: 'audio/katakana/wo.mp3'}],
            // Linha N
            [{char: 'ン', romaji: 'n', audio: 'audio/katakana/n.mp3'}, 
             null, null, null, null, null, null, null, null, null]
        ];

        // Converter tabelas em arrays lineares para compatibilidade
        const hiragana = hiraganaTable.flat().filter(k => k !== null);
        const katakana = katakanaTable.flat().filter(k => k !== null);

        let quizStats = {correct: 0, incorrect: 0, total: 0};
        let currentQuizData = [];
        let currentAnswer = '';
        let currentAudio = null;
        let currentKana = null;

        function renderKana(dataTable, gridId) {
            const grid = document.getElementById(gridId);
            grid.innerHTML = '';
            
            // Renderizar a tabela completa incluindo espaços vazios
            dataTable.forEach(row => {
                row.forEach(kana => {
                    if (kana === null) {
                        // Criar espaço vazio
                        const emptyCard = document.createElement('div');
                        emptyCard.className = 'kana-card';
                        emptyCard.style.opacity = '0';
                        emptyCard.style.cursor = 'default';
                        grid.appendChild(emptyCard);
                    } else {
                        const card = document.createElement('div');
                        card.className = 'kana-card';
                        card.innerHTML = `
                            <div class="kana-char">${kana.char}</div>
                            <div class="kana-romaji">${kana.romaji}</div>
                        `;
                        card.onclick = () => openModal(kana);
                        grid.appendChild(card);
                    }
                });
            });
        }

        function openModal(kana) {
            currentKana = kana;
            document.getElementById('modal-char').textContent = kana.char;
            document.getElementById('modal-romaji').textContent = kana.romaji;
            document.getElementById('kana-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Criar objeto de áudio se existir
            if (kana.audio) {
                currentAudio = new Audio(kana.audio);
            } else {
                currentAudio = null;
            }
        }

        function closeModal() {
            document.getElementById('kana-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        }

        function playAudio() {
            if (currentAudio) {
                currentAudio.currentTime = 0;
                currentAudio.play().catch(err => {
                    console.log('Erro ao reproduzir áudio:', err);
                });
            }
        }

        document.getElementById('kana-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        function changeMode(mode) {
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.kana-section, .quiz-section').forEach(section => section.classList.add('hidden'));
            
            // Esconder todos os balões
            document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));
            
            if (mode === 'hiragana') {
                document.querySelector('.mode-btn.hiragana').classList.add('active');
                document.getElementById('hiragana-section').classList.remove('hidden');
                document.getElementById('info-hiragana').classList.remove('hidden');
            } else if (mode === 'katakana') {
                document.querySelector('.mode-btn.katakana').classList.add('active');
                document.getElementById('katakana-section').classList.remove('hidden');
                document.getElementById('info-katakana').classList.remove('hidden');
            } else if (mode === 'quiz') {
                document.querySelector('.mode-btn.quiz').classList.add('active');
                document.getElementById('quiz-section').classList.add('active');
                document.getElementById('info-quiz').classList.remove('hidden');
                startQuiz();
            }
        }

        // QUIZ

        function startQuiz() {
            currentQuizData = [...hiragana, ...katakana];
            updateStats(); // Adicione esta linha
            generateQuestion();
        }

        function generateQuestion() {
            const randomKana = currentQuizData[Math.floor(Math.random() * currentQuizData.length)];
            currentAnswer = randomKana.romaji;
            
            document.getElementById('quiz-char').textContent = randomKana.char;
            
            const options = [randomKana.romaji];
            while (options.length < 4) {
                const randomOption = currentQuizData[Math.floor(Math.random() * currentQuizData.length)].romaji;
                if (!options.includes(randomOption)) {
                    options.push(randomOption);
                }
            }
            
            options.sort(() => Math.random() - 0.5);
            
            const optionsContainer = document.getElementById('quiz-options');
            optionsContainer.innerHTML = '';
            options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option';
                btn.textContent = option;
                btn.onclick = () => checkAnswer(option, btn);
                optionsContainer.appendChild(btn);
            });
        }

        function checkAnswer(selected, btn) {
            quizStats.total++;
            const allButtons = document.querySelectorAll('.quiz-option');
            allButtons.forEach(b => b.disabled = true);
            
            if (selected === currentAnswer) {
                quizStats.correct++;
                btn.classList.add('correct');
            } else {
                quizStats.incorrect++;
                btn.classList.add('incorrect');
                allButtons.forEach(b => {
                    if (b.textContent === currentAnswer) {
                        b.classList.add('correct');
                    }
                });
            }
            
            updateStats();
            setTimeout(() => {
                allButtons.forEach(b => {
                    b.classList.remove('correct', 'incorrect');
                    b.disabled = false;
                });
                generateQuestion();
            }, 1200);
        }

        function updateStats() {
            document.getElementById('correct-count').textContent = quizStats.correct;
            document.getElementById('incorrect-count').textContent = quizStats.incorrect;
            document.getElementById('total-count').textContent = quizStats.total;
        }

        renderKana(hiraganaTable, 'hiragana-grid');
        renderKana(katakanaTable, 'katakana-grid');

        // Balões de Texto
        function toggleBalloon(balloonId) {
            const balloon = document.getElementById(balloonId);
            const content = balloon.querySelector('.balloon-content');
            const toggleBtn = balloon.querySelector('.balloon-toggle');
            
            content.classList.toggle('collapsed');
            balloon.classList.toggle('collapsed');
            
            // Atualizar o ícone do botão
            if (content.classList.contains('collapsed')) {
                toggleBtn.textContent = '+';
            } else {
                toggleBtn.textContent = '−';
            }
}