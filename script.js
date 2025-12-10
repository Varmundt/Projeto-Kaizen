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

        // DAKUTEN E HANDAKUTEN - HIRAGANA
        const hiraganaDakutenTable = [
            // Linha GA
            [{char: 'が', romaji: 'ga', audio: 'audio/hiragana/ga.mp3'}, 
            {char: 'ざ', romaji: 'za', audio: 'audio/hiragana/za.mp3'}, 
            {char: 'だ', romaji: 'da', audio: 'audio/hiragana/da.mp3'}, 
            {char: 'ば', romaji: 'ba', audio: 'audio/hiragana/ba.mp3'}, 
            {char: 'ぱ', romaji: 'pa', audio: 'audio/hiragana/pa.mp3'}],
            // Linha GI
            [{char: 'ぎ', romaji: 'gi', audio: 'audio/hiragana/gi.mp3'}, 
            {char: 'じ', romaji: 'ji', audio: 'audio/hiragana/ji.mp3'}, 
            {char: 'ぢ', romaji: 'ji', audio: 'audio/hiragana/di.mp3'}, 
            {char: 'び', romaji: 'bi', audio: 'audio/hiragana/bi.mp3'}, 
            {char: 'ぴ', romaji: 'pi', audio: 'audio/hiragana/pi.mp3'}],
            // Linha GU
            [{char: 'ぐ', romaji: 'gu', audio: 'audio/hiragana/gu.mp3'}, 
            {char: 'ず', romaji: 'zu', audio: 'audio/hiragana/zu.mp3'}, 
            {char: 'づ', romaji: 'zu', audio: 'audio/hiragana/du.mp3'}, 
            {char: 'ぶ', romaji: 'bu', audio: 'audio/hiragana/bu.mp3'}, 
            {char: 'ぷ', romaji: 'pu', audio: 'audio/hiragana/pu.mp3'}],
            // Linha GE
            [{char: 'げ', romaji: 'ge', audio: 'audio/hiragana/ge.mp3'}, 
            {char: 'ぜ', romaji: 'ze', audio: 'audio/hiragana/ze.mp3'}, 
            {char: 'で', romaji: 'de', audio: 'audio/hiragana/de.mp3'}, 
            {char: 'べ', romaji: 'be', audio: 'audio/hiragana/be.mp3'}, 
            {char: 'ぺ', romaji: 'pe', audio: 'audio/hiragana/pe.mp3'}],
            // Linha GO
            [{char: 'ご', romaji: 'go', audio: 'audio/hiragana/go.mp3'}, 
            {char: 'ぞ', romaji: 'zo', audio: 'audio/hiragana/zo.mp3'}, 
            {char: 'ど', romaji: 'do', audio: 'audio/hiragana/do.mp3'}, 
            {char: 'ぼ', romaji: 'bo', audio: 'audio/hiragana/bo.mp3'}, 
            {char: 'ぽ', romaji: 'po', audio: 'audio/hiragana/po.mp3'}]
        ];

        // YŌON (JUNÇÕES) - HIRAGANA
        const hiraganaYoonTable = [
            // きゃ, しゃ, ちゃ, にゃ, ひゃ, みゃ, りゃ
            [{char: 'きゃ', romaji: 'kya', audio: 'audio/hiragana/kya.mp3'}, 
            {char: 'しゃ', romaji: 'sha', audio: 'audio/hiragana/sha.mp3'}, 
            {char: 'ちゃ', romaji: 'cha', audio: 'audio/hiragana/cha.mp3'}, 
            {char: 'にゃ', romaji: 'nya', audio: 'audio/hiragana/nya.mp3'}, 
            {char: 'ひゃ', romaji: 'hya', audio: 'audio/hiragana/hya.mp3'}, 
            {char: 'みゃ', romaji: 'mya', audio: 'audio/hiragana/mya.mp3'}, 
            {char: 'りゃ', romaji: 'rya', audio: 'audio/hiragana/rya.mp3'}],
            // きゅ, しゅ, ちゅ, にゅ, ひゅ, みゅ, りゅ
            [{char: 'きゅ', romaji: 'kyu', audio: 'audio/hiragana/kyu.mp3'}, 
            {char: 'しゅ', romaji: 'shu', audio: 'audio/hiragana/shu.mp3'}, 
            {char: 'ちゅ', romaji: 'chu', audio: 'audio/hiragana/chu.mp3'}, 
            {char: 'にゅ', romaji: 'nyu', audio: 'audio/hiragana/nyu.mp3'}, 
            {char: 'ひゅ', romaji: 'hyu', audio: 'audio/hiragana/hyu.mp3'}, 
            {char: 'みゅ', romaji: 'myu', audio: 'audio/hiragana/myu.mp3'}, 
            {char: 'りゅ', romaji: 'ryu', audio: 'audio/hiragana/ryu.mp3'}],
            // きょ, しょ, ちょ, にょ, ひょ, みょ, りょ
            [{char: 'きょ', romaji: 'kyo', audio: 'audio/hiragana/kyo.mp3'}, 
            {char: 'しょ', romaji: 'sho', audio: 'audio/hiragana/sho.mp3'}, 
            {char: 'ちょ', romaji: 'cho', audio: 'audio/hiragana/cho.mp3'}, 
            {char: 'にょ', romaji: 'nyo', audio: 'audio/hiragana/nyo.mp3'}, 
            {char: 'ひょ', romaji: 'hyo', audio: 'audio/hiragana/hyo.mp3'}, 
            {char: 'みょ', romaji: 'myo', audio: 'audio/hiragana/myo.mp3'}, 
            {char: 'りょ', romaji: 'ryo', audio: 'audio/hiragana/ryo.mp3'}],
            // ぎゃ, じゃ, びゃ, ぴゃ
            [{char: 'ぎゃ', romaji: 'gya', audio: 'audio/hiragana/gya.mp3'}, 
            {char: 'じゃ', romaji: 'ja', audio: 'audio/hiragana/ja.mp3'}, 
            {char: 'びゃ', romaji: 'bya', audio: 'audio/hiragana/bya.mp3'}, 
            {char: 'ぴゃ', romaji: 'pya', audio: 'audio/hiragana/pya.mp3'}, 
            null, null, null],
            // ぎゅ, じゅ, びゅ, ぴゅ
            [{char: 'ぎゅ', romaji: 'gyu', audio: 'audio/hiragana/gyu.mp3'}, 
            {char: 'じゅ', romaji: 'ju', audio: 'audio/hiragana/ju.mp3'}, 
            {char: 'びゅ', romaji: 'byu', audio: 'audio/hiragana/byu.mp3'}, 
            {char: 'ぴゅ', romaji: 'pyu', audio: 'audio/hiragana/pyu.mp3'}, 
            null, null, null],
            // ぎょ, じょ, びょ, ぴょ
            [{char: 'ぎょ', romaji: 'gyo', audio: 'audio/hiragana/gyo.mp3'}, 
            {char: 'じょ', romaji: 'jo', audio: 'audio/hiragana/jo.mp3'}, 
            {char: 'びょ', romaji: 'byo', audio: 'audio/hiragana/byo.mp3'}, 
            {char: 'ぴょ', romaji: 'pyo', audio: 'audio/hiragana/pyo.mp3'}, 
            null, null, null]
        ];

        // DAKUTEN E HANDAKUTEN - KATAKANA
        const katakanaDakutenTable = [
            // Linha GA
            [{char: 'ガ', romaji: 'ga', audio: 'audio/katakana/ga.mp3'}, 
            {char: 'ザ', romaji: 'za', audio: 'audio/katakana/za.mp3'}, 
            {char: 'ダ', romaji: 'da', audio: 'audio/katakana/da.mp3'}, 
            {char: 'バ', romaji: 'ba', audio: 'audio/katakana/ba.mp3'}, 
            {char: 'パ', romaji: 'pa', audio: 'audio/katakana/pa.mp3'}],
            // Linha GI
            [{char: 'ギ', romaji: 'gi', audio: 'audio/katakana/gi.mp3'}, 
            {char: 'ジ', romaji: 'ji', audio: 'audio/katakana/ji.mp3'}, 
            {char: 'ヂ', romaji: 'ji', audio: 'audio/katakana/di.mp3'}, 
            {char: 'ビ', romaji: 'bi', audio: 'audio/katakana/bi.mp3'}, 
            {char: 'ピ', romaji: 'pi', audio: 'audio/katakana/pi.mp3'}],
            // Linha GU
            [{char: 'グ', romaji: 'gu', audio: 'audio/katakana/gu.mp3'}, 
            {char: 'ズ', romaji: 'zu', audio: 'audio/katakana/zu.mp3'}, 
            {char: 'ヅ', romaji: 'zu', audio: 'audio/katakana/du.mp3'}, 
            {char: 'ブ', romaji: 'bu', audio: 'audio/katakana/bu.mp3'}, 
            {char: 'プ', romaji: 'pu', audio: 'audio/katakana/pu.mp3'}],
            // Linha GE
            [{char: 'ゲ', romaji: 'ge', audio: 'audio/katakana/ge.mp3'}, 
            {char: 'ゼ', romaji: 'ze', audio: 'audio/katakana/ze.mp3'}, 
            {char: 'デ', romaji: 'de', audio: 'audio/katakana/de.mp3'}, 
            {char: 'ベ', romaji: 'be', audio: 'audio/katakana/be.mp3'}, 
            {char: 'ペ', romaji: 'pe', audio: 'audio/katakana/pe.mp3'}],
            // Linha GO
            [{char: 'ゴ', romaji: 'go', audio: 'audio/katakana/go.mp3'}, 
            {char: 'ゾ', romaji: 'zo', audio: 'audio/katakana/zo.mp3'}, 
            {char: 'ド', romaji: 'do', audio: 'audio/katakana/do.mp3'}, 
            {char: 'ボ', romaji: 'bo', audio: 'audio/katakana/bo.mp3'}, 
            {char: 'ポ', romaji: 'po', audio: 'audio/katakana/po.mp3'}]
        ];

        // YŌON (JUNÇÕES) - KATAKANA
        const katakanaYoonTable = [
            // キャ, シャ, チャ, ニャ, ヒャ, ミャ, リャ
            [{char: 'キャ', romaji: 'kya', audio: 'audio/katakana/kya.mp3'}, 
            {char: 'シャ', romaji: 'sha', audio: 'audio/katakana/sha.mp3'}, 
            {char: 'チャ', romaji: 'cha', audio: 'audio/katakana/cha.mp3'}, 
            {char: 'ニャ', romaji: 'nya', audio: 'audio/katakana/nya.mp3'}, 
            {char: 'ヒャ', romaji: 'hya', audio: 'audio/katakana/hya.mp3'}, 
            {char: 'ミャ', romaji: 'mya', audio: 'audio/katakana/mya.mp3'}, 
            {char: 'リャ', romaji: 'rya', audio: 'audio/katakana/rya.mp3'}],
            // キュ, シュ, チュ, ニュ, ヒュ, ミュ, リュ
            [{char: 'キュ', romaji: 'kyu', audio: 'audio/katakana/kyu.mp3'}, 
            {char: 'シュ', romaji: 'shu', audio: 'audio/katakana/shu.mp3'}, 
            {char: 'チュ', romaji: 'chu', audio: 'audio/katakana/chu.mp3'}, 
            {char: 'ニュ', romaji: 'nyu', audio: 'audio/katakana/nyu.mp3'}, 
            {char: 'ヒュ', romaji: 'hyu', audio: 'audio/katakana/hyu.mp3'}, 
            {char: 'ミュ', romaji: 'myu', audio: 'audio/katakana/myu.mp3'}, 
            {char: 'リュ', romaji: 'ryu', audio: 'audio/katakana/ryu.mp3'}],
            // キョ, ショ, チョ, ニョ, ヒョ, ミョ, リョ
            [{char: 'キョ', romaji: 'kyo', audio: 'audio/katakana/kyo.mp3'}, 
            {char: 'ショ', romaji: 'sho', audio: 'audio/katakana/sho.mp3'}, 
            {char: 'チョ', romaji: 'cho', audio: 'audio/katakana/cho.mp3'}, 
            {char: 'ニョ', romaji: 'nyo', audio: 'audio/katakana/nyo.mp3'}, 
            {char: 'ヒョ', romaji: 'hyo', audio: 'audio/katakana/hyo.mp3'}, 
            {char: 'ミョ', romaji: 'myo', audio: 'audio/katakana/myo.mp3'}, 
            {char: 'リョ', romaji: 'ryo', audio: 'audio/katakana/ryo.mp3'}],
            // ギャ, ジャ, ビャ, ピャ
            [{char: 'ギャ', romaji: 'gya', audio: 'audio/katakana/gya.mp3'}, 
            {char: 'ジャ', romaji: 'ja', audio: 'audio/katakana/ja.mp3'}, 
            {char: 'ビャ', romaji: 'bya', audio: 'audio/katakana/bya.mp3'}, 
            {char: 'ピャ', romaji: 'pya', audio: 'audio/katakana/pya.mp3'}, 
            null, null, null],
            // ギュ, ジュ, ビュ, ピュ
            [{char: 'ギュ', romaji: 'gyu', audio: 'audio/katakana/gyu.mp3'}, 
            {char: 'ジュ', romaji: 'ju', audio: 'audio/katakana/ju.mp3'}, 
            {char: 'ビュ', romaji: 'byu', audio: 'audio/katakana/byu.mp3'}, 
            {char: 'ピュ', romaji: 'pyu', audio: 'audio/katakana/pyu.mp3'}, 
            null, null, null],
            // ギョ, ジョ, ビョ, ピョ
            [{char: 'ギョ', romaji: 'gyo', audio: 'audio/katakana/gyo.mp3'}, 
            {char: 'ジョ', romaji: 'jo', audio: 'audio/katakana/jo.mp3'}, 
            {char: 'ビョ', romaji: 'byo', audio: 'audio/katakana/byo.mp3'}, 
            {char: 'ピョ', romaji: 'pyo', audio: 'audio/katakana/pyo.mp3'}, 
            null, null, null]
        ];

        // Converter em arrays lineares
        const hiraganaDakuten = hiraganaDakutenTable.flat().filter(k => k !== null);
        const hiraganaYoon = hiraganaYoonTable.flat().filter(k => k !== null);
        const katakanaDakuten = katakanaDakutenTable.flat().filter(k => k !== null);
        const katakanaYoon = katakanaYoonTable.flat().filter(k => k !== null);

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
            currentQuizData = [
                ...hiragana, 
                ...katakana,
                ...hiraganaDakuten,
                ...hiraganaYoon,
                ...katakanaDakuten,
                ...katakanaYoon
            ];
            updateStats();
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
            }}
        
        // Variável para controlar o modo atual
let currentMainMode = 'hiragana';
let currentSubMode = 'basic';

// Função para mudar modo principal
function changeMode(mode) {
    currentMainMode = mode;
    
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.kana-section, .quiz-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));
    
    if (mode === 'hiragana' || mode === 'katakana') {
        // Mostrar sub-menu
        document.getElementById('sub-menu').style.display = 'flex';
        document.querySelector(`.mode-btn.${mode}`).classList.add('active');
        
        // Resetar para o modo básico e ATIVAR o botão correto
        currentSubMode = 'basic';
        document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
        // Buscar especificamente o primeiro botão (Básico) e ativá-lo
        const basicBtn = document.querySelector('.sub-btn:first-child');
        if (basicBtn) {
            basicBtn.classList.add('active');
        }
        
        // Mostrar seção básica
        if (mode === 'hiragana') {
            document.getElementById('hiragana-section').classList.remove('hidden');
            document.getElementById('info-hiragana').classList.remove('hidden');
        } else {
            document.getElementById('katakana-section').classList.remove('hidden');
            document.getElementById('info-katakana').classList.remove('hidden');
        }
        
    } else if (mode === 'quiz') {
        // Esconder sub-menu
        document.getElementById('sub-menu').style.display = 'none';
        document.querySelector('.mode-btn.quiz').classList.add('active');
        document.getElementById('quiz-section').classList.add('active');
        document.getElementById('info-quiz').classList.remove('hidden');
        startQuiz();
    }
}

// Função para mudar sub-modo (básico, dakuten, yoon)
function changeSubMode(subMode) {
    currentSubMode = subMode;
    
    // Atualizar botões ativos
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Esconder todas as seções e balões
    document.querySelectorAll('.kana-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));
    
    // Mostrar seção e balão correspondente
    if (currentMainMode === 'hiragana') {
        if (subMode === 'basic') {
            document.getElementById('hiragana-section').classList.remove('hidden');
            document.getElementById('info-hiragana').classList.remove('hidden');
        } else if (subMode === 'dakuten') {
            document.getElementById('hiragana-dakuten-section').classList.remove('hidden');
            document.getElementById('info-hiragana-dakuten').classList.remove('hidden');
        } else if (subMode === 'yoon') {
            document.getElementById('hiragana-yoon-section').classList.remove('hidden');
            document.getElementById('info-hiragana-yoon').classList.remove('hidden');
        }
    } else if (currentMainMode === 'katakana') {
        if (subMode === 'basic') {
            document.getElementById('katakana-section').classList.remove('hidden');
            document.getElementById('info-katakana').classList.remove('hidden');
        } else if (subMode === 'dakuten') {
            document.getElementById('katakana-dakuten-section').classList.remove('hidden');
            document.getElementById('info-katakana-dakuten').classList.remove('hidden');
        } else if (subMode === 'yoon') {
            document.getElementById('katakana-yoon-section').classList.remove('hidden');
            document.getElementById('info-katakana-yoon').classList.remove('hidden');
        }
    }
}

// Função para renderizar grid de dakuten (5 colunas)
function renderDakutenGrid(dataTable, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    dataTable.forEach(row => {
        row.forEach(kana => {
            const card = document.createElement('div');
            card.className = 'kana-card';
            card.innerHTML = `
                <div class="kana-char">${kana.char}</div>
                <div class="kana-romaji">${kana.romaji}</div>
            `;
            card.onclick = () => openModal(kana);
            grid.appendChild(card);
        });
    });
}

// Função para renderizar grid de yoon
function renderYoonGrid(dataTable, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    dataTable.forEach((row) => {
        row.forEach((kana) => {
            if (kana === null) {
                return;
            }
            
            const card = document.createElement('div');
            card.className = 'kana-card';
            card.innerHTML = `
                <div class="kana-char">${kana.char}</div>
                <div class="kana-romaji">${kana.romaji}</div>
            `;
            card.onclick = () => openModal(kana);
            grid.appendChild(card);
        });
    });
}

window.addEventListener('DOMContentLoaded', function() {
    // Forçar o modo Hiragana Básico ao carregar
    currentMainMode = 'hiragana';
    currentSubMode = 'basic';
    
    document.querySelector('.mode-btn.hiragana').classList.add('active');
    
    document.getElementById('sub-menu').style.display = 'flex';
    
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.sub-btn:first-child').classList.add('active');
    
    document.querySelectorAll('.kana-section, .quiz-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));
    
    document.getElementById('hiragana-section').classList.remove('hidden');
    document.getElementById('info-hiragana').classList.remove('hidden');
});

renderKana(hiraganaTable, 'hiragana-grid');
renderKana(katakanaTable, 'katakana-grid');
renderDakutenGrid(hiraganaDakutenTable, 'hiragana-dakuten-grid');
renderDakutenGrid(katakanaDakutenTable, 'katakana-dakuten-grid');
renderYoonGrid(hiraganaYoonTable, 'hiragana-yoon-grid');
renderYoonGrid(katakanaYoonTable, 'katakana-yoon-grid');