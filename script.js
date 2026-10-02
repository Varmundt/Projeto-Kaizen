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

        // ============================================================
        // DICAS PONTUAIS DE PRONÚNCIA E MEMORIZAÇÃO
        // ============================================================
        // Adicionadas apenas para caracteres que costumam gerar dúvidas
        // ou confusão frequente em iniciantes.
        const kanaTips = {
            // Hiragana
            'し': 'Dica de pronúncia: som suave parecido com "xi", sem som áspero de "si".',
            'ち': 'Dica de pronúncia: soa similar a "tchê" ou "tchau", não como "ti" seco.',
            'つ': 'Dica de pronúncia: som similar a "ts" em "tsunami". Dica de memorização: lembra uma onda crescendo.',
            'ふ': 'Dica de pronúncia: sopro suave entre os lábios quase fechados, sem encostar os dentes no lábio.',
            'ら': 'Dica de pronúncia: a coluna R japonesa tem som brando (como em "caro"), com toque rápido da língua no céu da boca.',
            'を': 'Dica: no japonês moderno é usado como partícula gramatical de objeto direto e sua pronúncia soa como "o".',
            'ん': 'Dica de pronúncia: som nasal que se adapta ao som seguinte (m, n ou ng), funcionando como terminação nasal.',
            'ぢ': 'Dica: no japonês moderno padrão, tem a mesma pronúncia que じ (ji).',
            'づ': 'Dica: no japonês moderno padrão, tem a mesma pronúncia que ず (zu).',
            // Katakana
            'シ': 'Dica de memorização: os dois traços menores são mais horizontais e o traço longo sobe de baixo para cima.',
            'ツ': 'Dica de memorização: os dois traços menores são mais verticais e o traço longo desce de cima para baixo.',
            'ソ': 'Dica de memorização: traço curto e traço longo partindo de cima para baixo.',
            'ン': 'Dica de memorização: traço curto e traço longo subindo de baixo para cima.',
            'フ': 'Dica de pronúncia: soprado suavemente entre os lábios quase fechados.',
            'ヂ': 'Dica: no japonês moderno padrão, tem a mesma pronúncia que ジ (ji).',
            'ヅ': 'Dica: no japonês moderno padrão, tem a mesma pronúncia que ズ (zu).'
        };

        // ============================================================
        // PREPARO DOS DADOS DE KANA
        // ============================================================
        // As tabelas acima (*Table) são matrizes bidimensionais, usadas
        // para desenhar a grade visual (linhas e colunas). Para o quiz,
        // o formato mais prático é uma lista simples de kana, sem os
        // espaços vazios (null) que existem só para preencher a grade.
        //
        // Cada kana também recebe uma propriedade "category"
        // (hiragana ou katakana). Isso permite calcular estatísticas de
        // progresso separadas por alfabeto (RF16), sem precisar mudar a
        // estrutura original das tabelas.
        const hiraganaDakuten = hiraganaDakutenTable.flat().filter(k => k !== null).map(k => ({...k, category: 'hiragana'}));
        const hiraganaYoon = hiraganaYoonTable.flat().filter(k => k !== null).map(k => ({...k, category: 'hiragana'}));
        const katakanaDakuten = katakanaDakutenTable.flat().filter(k => k !== null).map(k => ({...k, category: 'katakana'}));
        const katakanaYoon = katakanaYoonTable.flat().filter(k => k !== null).map(k => ({...k, category: 'katakana'}));
        const hiragana = hiraganaTable.flat().filter(k => k !== null).map(k => ({...k, category: 'hiragana'}));
        const katakana = katakanaTable.flat().filter(k => k !== null).map(k => ({...k, category: 'katakana'}));

        // ============================================================
        // ESTADO GLOBAL
        // ============================================================
        // Estado de navegação (qual seção/sub-seção está visível).
        let currentMainMode = 'hiragana';
        let currentSubMode = 'basic';

        // Estado do quiz.
        // "categorias" guarda o desempenho da rodada atual, separado por
        // alfabeto, para alimentar o progresso por categoria (RF16) no
        // momento em que a rodada é finalizada (ver finishQuiz).
        let quizStats = {
            correct: 0, incorrect: 0, total: 0,
            categorias: {
                hiragana: { correct: 0, incorrect: 0 },
                katakana: { correct: 0, incorrect: 0 }
            }
        };
        let currentQuizData = [];        // conjunto de kana disponível para sorteio na rodada atual
        let currentAnswer = '';          // resposta correta da pergunta em exibição (romaji ou caractere)
        let currentQuizType = 'char-to-romaji'; // modalidade ativa do quiz: RF08 (padrão) ou RF09
        let currentQuizKana = null;      // objeto kana completo da pergunta em exibição (usado para tocar áudio)

        // Estado do modal de detalhes de um caractere.
        let currentAudio = null;         // áudio carregado para o caractere aberto no modal
        let currentKana = null;          // kana atualmente aberto no modal
        let lastFocusedElement = null;   // elemento que tinha foco antes do modal abrir (RNF07)

        // ============================================================
        // ACESSIBILIDADE DOS CARDS DE CARACTERE (RNF07)
        // ============================================================
        // Os cards de caractere são <div>, não <button>, porque o layout
        // visual (grade com espaços vazios, cantos arredondados, efeito
        // de brilho) foi desenhado em cima de uma div. Para que continuem
        // operáveis por teclado, cada card recebe manualmente o papel de
        // botão: foco via tabindex, um rótulo descritivo para leitores de
        // tela, e ativação pelas teclas Enter e Espaço.
        function setupCardAccessibility(card, kana) {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Caractere ${kana.char}, romaji ${kana.romaji}. Pressione Enter para ouvir a pronúncia.`);
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    openModal(kana);
                }
            });
        }

        // ============================================================
        // RENDERIZAÇÃO DAS GRADES DE CARACTERES (RF01, RF02, RF03)
        // ============================================================
        // Grade padrão (10 colunas), usada pelo Hiragana e Katakana
        // básicos. Mantém os espaços vazios da tabela original para que
        // as colunas continuem alinhadas visualmente; esses espaços são
        // marcados com aria-hidden para não atrapalhar leitores de tela.
        function renderKana(dataTable, gridId) {
            const grid = document.getElementById(gridId);
            grid.innerHTML = '';

            dataTable.forEach(row => {
                row.forEach(kana => {
                    if (kana === null) {
                        const emptyCard = document.createElement('div');
                        emptyCard.className = 'kana-card';
                        emptyCard.style.opacity = '0';
                        emptyCard.style.cursor = 'default';
                        emptyCard.setAttribute('aria-hidden', 'true');
                        grid.appendChild(emptyCard);
                    } else {
                        const card = document.createElement('div');
                        card.className = 'kana-card';
                        card.innerHTML = `
                            <div class="kana-char">${kana.char}</div>
                            <div class="kana-romaji">${kana.romaji}</div>
                        `;
                        card.onclick = () => openModal(kana);
                        setupCardAccessibility(card, kana);
                        grid.appendChild(card);
                    }
                });
            });
        }

        // Grade de Dakuten/Handakuten (5 colunas). Diferente da grade
        // padrão, aqui não existem espaços vazios a preencher.
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
                    setupCardAccessibility(card, kana);
                    grid.appendChild(card);
                });
            });
        }

        // Grade de Yōon (7 colunas). Aqui os espaços vazios da tabela
        // (linhas com menos de 7 combinações) são simplesmente ignorados,
        // em vez de virarem cards invisíveis.
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
                    setupCardAccessibility(card, kana);
                    grid.appendChild(card);
                });
            });
        }

        // ============================================================
        // MODAL DE DETALHES DO CARACTERE (RF04, RF05, RNF07)
        // ============================================================
        // Abre o modal com o caractere e a romanização (RF04) e prepara
        // o áudio de pronúncia correspondente (RF05). Também move o foco
        // do teclado para dentro do modal e guarda o elemento que estava
        // focado antes, para devolver o foco a ele ao fechar (RNF07).
        function openModal(kana) {
            currentKana = kana;
            lastFocusedElement = document.activeElement;

            document.getElementById('modal-char').textContent = kana.char;
            document.getElementById('modal-romaji').textContent = kana.romaji;
            const tip = kana.tip || (typeof kanaTips !== 'undefined' && kanaTips[kana.char]);
            const tipEl = document.getElementById('modal-tip');
            const tipText = document.getElementById('modal-tip-text');
            if (tipEl && tipText) {
                if (tip) {
                    tipText.textContent = tip;
                    tipEl.classList.remove('hidden');
                } else {
                    tipText.textContent = '';
                    tipEl.classList.add('hidden');
                }
            }
            document.getElementById('kana-modal').classList.add('active');
            document.body.style.overflow = 'hidden';

            currentAudio = kana.audio ? new Audio(kana.audio) : null;

            const modalContent = document.querySelector('#kana-modal .modal-content');
            if (modalContent) {
                modalContent.focus();
            }
        }

        // Fecha o modal, interrompe qualquer áudio em reprodução e
        // devolve o foco ao elemento que o usuário estava usando antes
        // de abrir o modal (RNF07).
        function closeModal() {
            document.getElementById('kana-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
            const tipEl = document.getElementById('modal-tip');
            if (tipEl) {
                tipEl.classList.add('hidden');
            }

            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                lastFocusedElement.focus();
            }
        }

        // Fecha o modal com a tecla Esc, um padrão esperado de
        // acessibilidade para qualquer diálogo modal (RNF07).
        document.addEventListener('keydown', function(e) {
            const modal = document.getElementById('kana-modal');
            if (!modal.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeModal();
                return;
            }

            // Mantém o foco do teclado dentro do modal enquanto ele está
            // aberto, evitando que o Tab leve a elementos por trás dele (RNF07).
            if (e.key === 'Tab') {
                const focusables = Array.from(modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])'))
                    .filter(el => el.offsetParent !== null);
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const modalContent = modal.querySelector('.modal-content');
                if (e.shiftKey && (document.activeElement === first || document.activeElement === modalContent)) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });

        // Toca (ou reinicia) o áudio do caractere aberto no modal (RF05).
        function playAudio() {
            if (currentAudio) {
                currentAudio.currentTime = 0;
                currentAudio.play().catch(err => {
                    console.log('Erro ao reproduzir áudio:', err);
                });
            }
        }

        // Clicar fora da caixa do modal (no fundo escurecido) fecha o modal.
        document.getElementById('kana-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // ============================================================
        // QUIZ - CICLO DE PERGUNTAS (RF07, RF08, RF09, RF10)
        // ============================================================
        // Monta o conjunto de kana disponível para o quiz (todas as
        // categorias e variações juntas) e sorteia a primeira pergunta.
        // Também limpa qualquer resultado de rodada anterior ainda
        // visível na tela.
        function startQuiz() {
            currentQuizData = [
                ...hiragana,
                ...katakana,
                ...hiraganaDakuten,
                ...hiraganaYoon,
                ...katakanaDakuten,
                ...katakanaYoon
            ];

            const resultEl = document.getElementById('quiz-result');
            if (resultEl) {
                resultEl.classList.add('hidden');
                resultEl.textContent = '';
            }

            updateStats();
            generateQuestion();
        }

        // Alterna entre as duas modalidades do quiz: caractere -> pronúncia
        // (RF08) e pronúncia -> caractere (RF09). A troca gera uma nova
        // pergunta imediatamente na modalidade escolhida.
        function changeQuizType(type, btnEl) {
            currentQuizType = type;
            document.querySelectorAll('.quiz-type-btn').forEach(btn => btn.classList.remove('active'));
            if (btnEl) {
                btnEl.classList.add('active');
            }
            syncPressed('.quiz-type-btn');
            generateQuestion();
        }

        // Sorteia uma nova pergunta (RF10) e monta as alternativas de
        // múltipla escolha (RF07). O mesmo sorteio é usado nas duas
        // modalidades do quiz; o que muda é qual campo do kana vira a
        // pergunta e qual vira as opções de resposta:
        //   - Caractere -> Pronúncia (RF08): pergunta = char, opções = romaji
        //   - Pronúncia -> Caractere (RF09): pergunta = romaji, opções = char
        //
        // O botão de áudio manual (RF05) só faz sentido na modalidade
        // Pronúncia -> Caractere, onde o som É a pergunta: nesse caso ele
        // fica visível o tempo todo e a pronúncia toca automaticamente
        // assim que a pergunta aparece. Na modalidade Caractere -> Pronúncia,
        // ouvir o áudio antes de responder entregaria a resposta, então o
        // botão fica escondido (o áudio de reforço acontece depois de
        // responder, em checkAnswer).
        function generateQuestion() {
            const randomKana = currentQuizData[Math.floor(Math.random() * currentQuizData.length)];
            currentQuizKana = randomKana;

            const quizCharEl = document.getElementById('quiz-char');
            const optionsContainer = document.getElementById('quiz-options');
            const audioBtn = document.getElementById('quiz-audio-btn');
            optionsContainer.innerHTML = '';

            const field = (currentQuizType === 'romaji-to-char') ? 'char' : 'romaji';
            currentAnswer = randomKana[field];

            quizCharEl.textContent = (currentQuizType === 'romaji-to-char')
                ? `"${randomKana.romaji}"`
                : randomKana.char;

            if (audioBtn) {
                if (currentQuizType === 'romaji-to-char') {
                    audioBtn.classList.remove('hidden');
                    playAudioForKana(randomKana);
                } else {
                    audioBtn.classList.add('hidden');
                }
            }

            const options = [currentAnswer];
            while (options.length < 4) {
                const randomOption = currentQuizData[Math.floor(Math.random() * currentQuizData.length)][field];
                if (!options.includes(randomOption)) {
                    options.push(randomOption);
                }
            }
            options.sort(() => Math.random() - 0.5);

            options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option';
                btn.textContent = option;
                btn.onclick = () => checkAnswer(option, btn);
                optionsContainer.appendChild(btn);
            });
        }

        // Confere a alternativa escolhida, atualiza os contadores (RF13)
        // e destaca visualmente a resposta certa e a errada (RF11, RF12).
        //
        // Feedback sonoro (RF05): cada modalidade toca o áudio de um jeito
        // diferente, para nunca sobrepor dois sons nem repetir sem motivo:
        //   - Caractere -> Pronúncia: o áudio ainda não tocou nesta
        //     pergunta, então toca agora a pronúncia CORRETA, reforçando a
        //     associação entre o caractere e o som.
        //   - Pronúncia -> Caractere: o áudio da resposta certa já tocou
        //     ao abrir a pergunta. Se o usuário errar, toca o áudio do
        //     caractere que ele ESCOLHEU, para comparar com o som ouvido
        //     e perceber a diferença. Se acertar, nenhum áudio extra é
        //     necessário, já que o som ouvido e o caractere escolhido
        //     já foram confirmados como o mesmo.
        function checkAnswer(selected, btn) {
            const resultEl = document.getElementById('quiz-result');
            if (resultEl) {
                resultEl.classList.add('hidden');
            }

            quizStats.total++;
            const allButtons = document.querySelectorAll('.quiz-option');
            allButtons.forEach(b => b.disabled = true);

            const categoria = currentQuizKana ? currentQuizKana.category : null;
            const statsCategoria = categoria ? quizStats.categorias[categoria] : null;
            const acertou = selected === currentAnswer;

            if (acertou) {
                quizStats.correct++;
                if (statsCategoria) statsCategoria.correct++;
                btn.classList.add('correct');
                btn.setAttribute('aria-label', selected + ' - Resposta correta');
                btn.innerHTML = selected + ' <span class="quiz-feedback-tag">✓ Correto</span>';
            } else {
                quizStats.incorrect++;
                if (statsCategoria) statsCategoria.incorrect++;
                btn.classList.add('incorrect');
                btn.setAttribute('aria-label', selected + ' - Resposta incorreta');
                btn.innerHTML = selected + ' <span class="quiz-feedback-tag">✗ Incorreto</span>';
                allButtons.forEach(b => {
                    if (b.textContent === currentAnswer) {
                        b.classList.add('correct');
                        b.setAttribute('aria-label', currentAnswer + ' - Resposta correta');
                        b.innerHTML = currentAnswer + ' <span class="quiz-feedback-tag">✓ Correta</span>';
                    }
                });
            }

            updateStats();

            if (currentQuizType === 'char-to-romaji') {
                playAudioForKana(currentQuizKana);
            } else if (!acertou) {
                const kanaEscolhido = currentQuizData.find(k => k.char === selected);
                if (kanaEscolhido) {
                    playAudioForKana(kanaEscolhido);
                }
            }

            setTimeout(() => {
                allButtons.forEach(b => {
                    b.classList.remove('correct', 'incorrect');
                    b.disabled = false;
                });
                generateQuestion();
            }, 1200);
        }

        // Atualiza os contadores de acertos, erros e total exibidos
        // durante a rodada em andamento (RF13).
        function updateStats() {
            document.getElementById('correct-count').textContent = quizStats.correct;
            document.getElementById('incorrect-count').textContent = quizStats.incorrect;
            document.getElementById('total-count').textContent = quizStats.total;
        }

        // Toca a pronúncia de um kana qualquer, usado tanto para o áudio
        // automático da pergunta quanto para o feedback de acerto/erro (RF05).
        function playAudioForKana(kana) {
            if (kana && kana.audio) {
                const audio = new Audio(kana.audio);
                audio.play().catch(err => {
                    console.log('Erro ao reproduzir áudio do quiz:', err);
                });
            }
        }

        // Ação do botão manual "Ouvir pronúncia": repete o áudio da
        // pergunta atualmente em exibição (RF05).
        function playQuizAudio() {
            playAudioForKana(currentQuizKana);
        }

        // ============================================================
        // PROGRESSO (RF14, RF15, RF16)
        // ============================================================
        const KAIZEN_PROGRESS_KEY = 'kaizenProgress';

        // Formato padrão de progresso salvo: totais gerais e totais
        // separados por categoria (hiragana/katakana).
        function defaultProgressData() {
            return {
                quizzesRealizados: 0,
                acertos: 0,
                erros: 0,
                melhorPontuacao: 0,
                categorias: {
                    hiragana: { acertos: 0, erros: 0 },
                    katakana: { acertos: 0, erros: 0 }
                }
            };
        }

        // Lê o progresso salvo no navegador (RF15). Os valores são
        // validados individualmente e combinados com o formato padrão,
        // para continuar funcionando mesmo com dados salvos por uma
        // versão anterior do site (ex.: sem o campo "categorias").
        function loadProgressData() {
            const defaults = defaultProgressData();
            try {
                const raw = localStorage.getItem(KAIZEN_PROGRESS_KEY);
                if (!raw) {
                    return defaults;
                }

                const parsed = JSON.parse(raw);
                return {
                    quizzesRealizados: Number(parsed.quizzesRealizados) || 0,
                    acertos: Number(parsed.acertos) || 0,
                    erros: Number(parsed.erros) || 0,
                    melhorPontuacao: Number(parsed.melhorPontuacao) || 0,
                    categorias: {
                        hiragana: {
                            acertos: Number(parsed?.categorias?.hiragana?.acertos) || 0,
                            erros: Number(parsed?.categorias?.hiragana?.erros) || 0
                        },
                        katakana: {
                            acertos: Number(parsed?.categorias?.katakana?.acertos) || 0,
                            erros: Number(parsed?.categorias?.katakana?.erros) || 0
                        }
                    }
                };
            } catch (err) {
                console.log('Não foi possível ler o progresso salvo:', err);
                return defaults;
            }
        }

        // Grava o progresso no localStorage (RF15). Falhas de gravação
        // (ex.: modo de navegação privada) são registradas no console,
        // sem interromper o uso do site.
        function saveProgressData(data) {
            try {
                localStorage.setItem(KAIZEN_PROGRESS_KEY, JSON.stringify(data));
            } catch (err) {
                console.log('Não foi possível salvar o progresso:', err);
            }
        }

        // Calcula um percentual de acerto a partir de acertos e erros,
        // evitando divisão por zero quando ainda não há respostas.
        function percentual(acertos, erros) {
            const total = acertos + erros;
            return total > 0 ? Math.round((acertos / total) * 100) : 0;
        }

        // Preenche a aba "Progresso" com os dados salvos: totais gerais
        // e o detalhamento por categoria (RF16).
        function renderProgress() {
            const data = loadProgressData();

            document.getElementById('progress-games').textContent = data.quizzesRealizados;
            document.getElementById('progress-best').textContent = data.melhorPontuacao + '%';
            document.getElementById('progress-correct').textContent = data.acertos;
            document.getElementById('progress-incorrect').textContent = data.erros;
            document.getElementById('progress-percent').textContent = percentual(data.acertos, data.erros) + '%';

            document.getElementById('progress-hiragana-percent').textContent =
                percentual(data.categorias.hiragana.acertos, data.categorias.hiragana.erros) + '%';
            document.getElementById('progress-hiragana-detail').textContent =
                `${data.categorias.hiragana.acertos} acertos / ${data.categorias.hiragana.erros} erros`;

            document.getElementById('progress-katakana-percent').textContent =
                percentual(data.categorias.katakana.acertos, data.categorias.katakana.erros) + '%';
            document.getElementById('progress-katakana-detail').textContent =
                `${data.categorias.katakana.acertos} acertos / ${data.categorias.katakana.erros} erros`;

            // Dica de revisão baseada no desempenho
            const tipEl = document.getElementById('progress-tip');
            if (tipEl) {
                const totalRespostas = data.acertos + data.erros;
                if (totalRespostas > 0 && percentual(data.acertos, data.erros) < 70) {
                    tipEl.textContent = 'Teve muitos erros? Revise os caracteres e tente o quiz novamente.';
                } else {
                    tipEl.textContent = '';
                }
            }
        }

        // Apaga todo o progresso salvo, mediante confirmação do usuário.
        function resetProgress() {
            const confirmar = window.confirm('Tem certeza que deseja apagar todo o progresso salvo?');
            if (!confirmar) return;
            saveProgressData(defaultProgressData());
            renderProgress();
        }

        // Exibe uma mensagem no painel de resultado do quiz.
        function showQuizResult(message) {
            const resultEl = document.getElementById('quiz-result');
            if (!resultEl) return;
            resultEl.textContent = message;
            resultEl.classList.remove('hidden');
        }

        // Encerra a rodada atual do quiz: calcula o percentual de acerto
        // (RF14), soma o resultado ao progresso salvo, total e por
        // categoria (RF15), e reinicia os contadores para uma nova rodada.
        function finishQuiz() {
            if (quizStats.total === 0) {
                showQuizResult('Responda pelo menos uma pergunta antes de finalizar o quiz.');
                return;
            }

            const percentualRodada = Math.round((quizStats.correct / quizStats.total) * 100);
            const progress = loadProgressData();

            progress.quizzesRealizados += 1;
            progress.acertos += quizStats.correct;
            progress.erros += quizStats.incorrect;
            progress.melhorPontuacao = Math.max(progress.melhorPontuacao, percentualRodada);
            progress.categorias.hiragana.acertos += quizStats.categorias.hiragana.correct;
            progress.categorias.hiragana.erros += quizStats.categorias.hiragana.incorrect;
            progress.categorias.katakana.acertos += quizStats.categorias.katakana.correct;
            progress.categorias.katakana.erros += quizStats.categorias.katakana.incorrect;
            saveProgressData(progress);

            showQuizResult(
                `Quiz finalizado! Você acertou ${quizStats.correct} de ${quizStats.total} (${percentualRodada}%). Resultado salvo no seu progresso.`
            );

            quizStats = {
                correct: 0, incorrect: 0, total: 0,
                categorias: {
                    hiragana: { correct: 0, incorrect: 0 },
                    katakana: { correct: 0, incorrect: 0 }
                }
            };
            updateStats();
            generateQuestion();
        }

        // Renderização inicial das grades básicas, para que o conteúdo já
        // apareça assim que o script carrega (antes do DOMContentLoaded
        // decidir qual seção fica visível).


        // ============================================================
        // FEEDBACK
        // ============================================================
        const FEEDBACK_URL = 'https://forms.gle/ujfrkjoFqasLhnZA8';

        function openFeedback() {
            if (FEEDBACK_URL) {
                window.open(FEEDBACK_URL, '_blank', 'noopener');
            } else {
                window.alert('O formulário de feedback será disponibilizado em breve. Obrigado pelo interesse!');
            }
        }

        // ============================================================
        // BALÕES INFORMATIVOS
        // ============================================================
        // Expande ou recolhe o texto explicativo de cada seção (o que é
        // Hiragana, Dakuten, etc.), alternando o ícone do botão.
        function toggleBalloon(balloonId) {
            const balloon = document.getElementById(balloonId);
            const content = balloon.querySelector('.balloon-content');
            const toggleBtn = balloon.querySelector('.balloon-toggle');

            content.classList.toggle('collapsed');
            balloon.classList.toggle('collapsed');

            toggleBtn.textContent = content.classList.contains('collapsed') ? '+' : '−';
            toggleBtn.setAttribute('aria-expanded', content.classList.contains('collapsed') ? 'false' : 'true');
        }

        // Mantém aria-pressed sincronizado com a classe "active" dos botões
        // de navegação, para que leitores de tela (e não só a cor) informem
        // qual opção está selecionada (RNF07).
        function syncPressed(selector) {
            document.querySelectorAll(selector).forEach(btn => {
                btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
            });
        }

        // ============================================================
        // NAVEGAÇÃO ENTRE MODOS E SUB-MODOS
        // ============================================================
        // Alterna entre as seções principais do menu: Hiragana, Katakana,
        // Quiz, Como Estudar (RF06) e Progresso (RF16). Também controla
        // a visibilidade do sub-menu (básico/dakuten/yōon) e do menu de
        // modalidade do quiz, que só fazem sentido em determinados modos.
        function changeMode(mode) {
            currentMainMode = mode;

            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.kana-section, .quiz-section').forEach(section => section.classList.add('hidden'));
            document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));

            // A seção do quiz usa a classe "active" (não apenas "hidden")
            // para ficar visível, então ela precisa ser removida
            // explicitamente ao sair do modo quiz.
            document.getElementById('quiz-section').classList.remove('active');

            document.getElementById('sub-menu').style.display = 'none';
            const quizTypeMenu = document.getElementById('quiz-type-menu');
            if (quizTypeMenu) {
                quizTypeMenu.style.display = 'none';
            }

            if (mode === 'hiragana' || mode === 'katakana') {
                document.getElementById('sub-menu').style.display = 'flex';
                document.querySelector(`.mode-btn.${mode}`).classList.add('active');

                currentSubMode = 'basic';
                document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
                const basicBtn = document.querySelector('.sub-btn:first-child');
                if (basicBtn) {
                    basicBtn.classList.add('active');
                }

                if (mode === 'hiragana') {
                    document.getElementById('hiragana-section').classList.remove('hidden');
                    document.getElementById('info-hiragana').classList.remove('hidden');
                } else {
                    document.getElementById('katakana-section').classList.remove('hidden');
                    document.getElementById('info-katakana').classList.remove('hidden');
                }

            } else if (mode === 'quiz') {
                document.querySelector('.mode-btn.quiz').classList.add('active');
                document.getElementById('quiz-section').classList.add('active');
                document.getElementById('info-quiz').classList.remove('hidden');
                if (quizTypeMenu) {
                    quizTypeMenu.style.display = 'flex';
                }

                if (currentQuizData.length === 0) {
                    startQuiz();
                }

            } else if (mode === 'guide') {
                document.querySelector('.mode-btn.guide').classList.add('active');
                document.getElementById('guide-section').classList.remove('hidden');

            } else if (mode === 'progress') {
                document.querySelector('.mode-btn.progress').classList.add('active');
                document.getElementById('progress-section').classList.remove('hidden');
                renderProgress();
            }

            syncPressed('.mode-btn');
            syncPressed('.sub-btn');
        }

        // Alterna entre os sub-modos de Hiragana/Katakana (básico,
        // dakuten/handakuten, yōon), mostrando a seção e o balão
        // informativo correspondentes.
        function changeSubMode(subMode, btnEl) {
            currentSubMode = subMode;

            document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
            if (btnEl) {
                btnEl.classList.add('active');
            }

            document.querySelectorAll('.kana-section').forEach(section => section.classList.add('hidden'));
            document.querySelectorAll('.info-balloon').forEach(balloon => balloon.classList.add('hidden'));

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

            syncPressed('.sub-btn');
        }

        // ============================================================
        // ESTADO INICIAL DA PÁGINA
        // ============================================================
        // A página abre em "Como estudar" (RF06), para que quem chega
        // pela primeira vez entenda o caminho de estudo antes de ver os
        // cards. O HTML já vem nesse estado; changeMode('guide') apenas
        // garante que menu, botões e seções estejam coerentes.
        window.addEventListener('DOMContentLoaded', function() {
            changeMode('guide');
        });

        // Renderização de todas as grades (básico, dakuten e yōon) dos
        // dois alfabetos, assim que o script é carregado (RF01, RF02, RF03).
        renderKana(hiraganaTable, 'hiragana-grid');
        renderKana(katakanaTable, 'katakana-grid');
        renderDakutenGrid(hiraganaDakutenTable, 'hiragana-dakuten-grid');
        renderDakutenGrid(katakanaDakutenTable, 'katakana-dakuten-grid');
        renderYoonGrid(hiraganaYoonTable, 'hiragana-yoon-grid');
        renderYoonGrid(katakanaYoonTable, 'katakana-yoon-grid');
