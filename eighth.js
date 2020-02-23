var money = `$120`;

alert( `(120 === ${currencyExtraction( money )}) === ${120 === currencyExtraction( money )}` );

function currencyExtraction ( money ) {
    return +money.slice(1);
}