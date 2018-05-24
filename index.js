


function hasPrefix(word,prefix){
    if(word.length - prefix.length < 3){
        return false;
    }

    for(var i = 0; i < prefix.length;i++){
        if(word[i] != prefix[i]){
            return false;
        }
    }

    return true;
}

function hasSuffix(word,suffix){
    var wordLength = word.length;
    var suffixLength = suffix.length;
    for(var i = 0; i < suffixLength;i++){
        if(word[wordLength - i - 1] != suffix[suffixLength - i - 1]){
            return false;
        }
    }
    return true;
}

function removePrefix(word){
    var prefixes = [
        'ala-',
        'alas-',
        'anti',
        'de-',
        'des-',
        'di-',
        // 'ekstra-',
        // 'elektro',
        'ga',
        'gaga',
        'gangga',
        'hi',
        'him',
        'hin',
        'ikapakapagpaka',
        'ikapakapagpa',
        'ikapakapang',
        'ikapakapag',
        'ikapakapam',
        'ikapakapan',
        'ikapagpaka',
        'ikapakipan',
        'ikapakipag',
        'ikapakipam',
        'ikapakipa',
        'ipakipag',
        'ipagkang',
        'ikapagpa',
        'ikapaka',
        'ikapaki',
        'ikapang',
        'ipakipa',
        'ikapag',
        'ikapam',
        'ikapan',
        'ipagka',
        'ipagpa',
        'ipaka',
        'ipaki',
        'ikapa',
        'ipang',
        'ikang',
        'ipag',
        'ikam',
        'ikan',
        'isa',
        'ipa',

        'kasing',
        // 'kontra',
        'kamaka',
        'kanda',
        'kasim',
        'kasin',
        'kamag',
        'kaka',
        'ka',

        'labing',

        'mangagsipagpaka',
        'mangagsipag',
        'mangagpaka',
        'magsipagpa',
        'makapagpa',
        'mangagsi',
        'mangagpa',
        'magsipag',
        'mangagka',
        'magkang',
        'magpaka',
        'magpati',
        'makapag',
        'mapapag',
        'mapang',
        'mapasa',
        'mapapa',
        'mangag',
        'manga',
        // 'mikro',
        'magka',
        'magpa',
        'magsa',
        'mapag',
        'mapam',
        'mapan',
        // 'meta',
        'mapa',
        'mang',
        // 'mini',
        'maka',
        'maki',
        // 'mala',
        // 'mal',
        'mam',
        'man',
        // 'may',
        'ma',
        'mag',


        'nangagsipagpaka',
        'nangagsipagpa',
        'nagsipagpaka',
        'nakapagpaka',
        'nangagsipag',
        'nangagpaka',
        'nangagkaka',
        'nagsipagpa',
        'nakapagpa',
        'nagsipag',
        'nangagpa',
        'nangagka',
        'nangagsi',
        'nakapag',
        'nakipag',
        'napapag',
        'nagpaka',
        'nagpati',
        'nangag',
        'napaka',
        'napasa',
        'nanga',
        'nagka',
        'nagpa',
        'nagsa',
        'nagsi',
        'napag',
        'naka',
        'naki',
        'nang',
        'napa',
        'nag',
        'na',


        'pagpapati',
        'pagpapaka',
        'pagpapa',
        'pagsasa',
        'pasasa',
        'pakiki',
        'pinaka',
        'pinag',
        'pinag',
        'papag',
        'pampa',
        'panag',
        'pagka',
        'paka',
        'paki',
        'pala',
        'pang',
        'pani',
        'papa',
        'para',
        'pasa',
        'pati',
        'pina',
        'pag',
        'pam',
        'pan',
        'pa',

        // 'xeno',

        // 'radyo',

        're',

        'sang',
        'sing',
        'sam',
        'san',
        'sin',
        'sa',

        'tagapag',
        'taga',
        'tiga',
        'tag',
        'tig',
        // 'uni',
        'um',
    ];


    for(var i=0;i<prefixes.length;i++){
        if(hasPrefix(word,prefixes[i])){
            return word.slice(prefixes[i].length,word.length);
        }
    }
    return word;
}

function prefixSoundChange(word){
    if(word[i] == 'r'){
        word[i] = 'd';
        return word;
    }
}

function removeSuffix(word){
    var suffixes = [
        'han',
        'hin',
        'an',
        'in',
    ];


    for(var i=0;i<suffixes.length;i++){
        if(hasSuffix(word,suffixes[i])){
            return word.slice(0,word.length - suffixes[i].length);
        }
    }
    return word;
}

function removeInfix(word){
    var infixes = [
        'in',
        'um'
    ];
    for(var i=0; i<infixes.length > 0; i++){
        infix = infixes[i];

        infixIndex = word.indexOf(infix);

        if(infixIndex === 0){
            return word.slice(infixIndex + infix.length);
        }else if (infixIndex === 1){
            return word[0] + word.slice(infix.length + 1);
        }
    }
    return word;
}

function removePartialReduplication(word){

    //if two syllablic root

    if(word[0] == word[1]){
        return word.slice(1);
    }else if (word[0] == word[2] && word[1] == word[3]){
        return word.slice(2);
    }

    //if three syllabic root


    return word;
}

function removeFullReduplication(word){

    //if two syllablic root

    if(word[0] == word[1]){
        return word.slice(1);
    }else if (word[0] == word[2] && word[1] == word[3]){
        return word.slice(2);
    }

    //if three syllabic root


    return word;
}

function stem(word){

}




module.exports = {
    stem:stem,
    removePrefix:removePrefix,
    removeSuffix:removeSuffix,
    removeInfix:removeInfix,
    removePartialReduplication:removePartialReduplication,
    removeFullReduplication:removeFullReduplication,
};
