        const rows = [
            { name: '', chars: ['a', 'i', 'u', 'e', 'o'] },
            { name: 'K', chars: ['ka', 'ki', 'ku', 'ke', 'ko'] },
            { name: 'S', chars: ['sa', 'shi', 'su', 'se', 'so'] },
            { name: 'T', chars: ['ta', 'chi', 'tsu', 'te', 'to'] },
            { name: 'N', chars: ['na', 'ni', 'nu', 'ne', 'no'] },
            { name: 'H', chars: ['ha', 'hi', 'fu', 'he', 'ho'] },
            { name: 'M', chars: ['ma', 'mi', 'mu', 'me', 'mo'] },
            { name: 'Y', chars: ['ya', '', 'yu', '', 'yo'] },
            { name: 'R', chars: ['ra', 'ri', 'ru', 're', 'ro'] },
            { name: 'W', chars: ['wa', '', '', '', 'wo'] },
            { name: '', chars: ['n', '', '', '', ''] }
        ];

        const hiraganaMap = {
            'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
            'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
            'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
            'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
            'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
            'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
            'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
            'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
            'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
            'wa': 'わ', 'wo': 'を',
            'n': 'ん'
        };

        const katakanaMap = {
            'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ',
            'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ',
            'sa': 'サ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ',
            'ta': 'タ', 'chi': 'チ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト',
            'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ',
            'ha': 'ハ', 'hi': 'ヒ', 'fu': 'フ', 'he': 'ヘ', 'ho': 'ホ',
            'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ',
            'ya': 'ヤ', 'yu': 'ユ', 'yo': 'ヨ',
            'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ',
            'wa': 'ワ', 'wo': 'ヲ',
            'n': 'ン'
        };

        let currentScript = 'hiragana';

        function getVowelClass(romaji) {
            if (!romaji) return 'vowel-empty';
            const vowel = romaji.slice(-1);
            return `vowel-${vowel}`;
        }

        function renderTable() {
            const tbody = document.getElementById('table-body');
            const currentMap = currentScript === 'hiragana' ? hiraganaMap : katakanaMap;
            
            tbody.innerHTML = '';
            
            rows.forEach(row => {
                const tr = document.createElement('tr');
                
                const th = document.createElement('td');
                th.textContent = row.name;
                tr.appendChild(th);
                
                row.chars.forEach(romaji => {
                    const td = document.createElement('td');
                    td.className = getVowelClass(romaji);
                    
                    if (romaji && currentMap[romaji]) {
                        const charDiv = document.createElement('div');
                        charDiv.className = 'character';
                        charDiv.textContent = currentMap[romaji];
                        
                        const romajiDiv = document.createElement('div');
                        romajiDiv.className = 'romaji';
                        romajiDiv.textContent = romaji;
                        
                        td.appendChild(charDiv);
                        td.appendChild(romajiDiv);
                    }
                    
                    tr.appendChild(td);
                });
                
                tbody.appendChild(tr);
            });
        }

        function switchScript(script) {
            currentScript = script;
            
            const hiraganaBtn = document.getElementById('hiragana-btn');
            const katakanaBtn = document.getElementById('katakana-btn');
            const title = document.getElementById('title');
            
            if (script === 'hiragana') {
                hiraganaBtn.classList.add('active');
                katakanaBtn.classList.remove('active');
                title.textContent = 'Tabela de Hiragana';
            } else {
                katakanaBtn.classList.add('active');
                hiraganaBtn.classList.remove('active');
                title.textContent = 'Tabela de Katakana';
            }
            
            renderTable();
        }

        document.getElementById('hiragana-btn').addEventListener('click', () => switchScript('hiragana'));
        document.getElementById('katakana-btn').addEventListener('click', () => switchScript('katakana'));

        // Renderiza a tabela inicial
        renderTable();