//zadanie 1 - Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica, a drugi element ktory chcemy w niej znalezc. Funkcja powinna zwracac true albo false w zaleznosci od tego czy znajdzie element czy nie.

//const table = [ "x", "y", "z" ];

const checkTable = function(table, element){
  console.log(table.includes(element))
};

//checkTable(table, "x");

//zadanie 2 - Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica stringów (zdań), a drugi to separator po ktorym chcemy te stringi rozbić na elementy nowej tablicy. Funkcja powinna zwroić tablice tablice tzn, przechodzi po kazdym stringu z pierwotnej tablicy, rozbija go według separatora ktory podalismy i wynik wrzuca do nowej tablicy, tak robi z kazdy stringiem, i te nowo powstale tablice wrzuca do jednej wspolnej.

const table = [ "ala ma kota", "test test", "xxx" ];

const convertStringToArrays = function (table, separator){
    return table.map(element => element.split(separator));

};

//convertStringToArrays(table, " ");



//3. ZADANIE DLA CHETNYCH
//Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica dwu wymiarowa, drugi to element którego szukamy. Jeśli dany element znajduje się w tablicy to zwracamy true, jesli nie to false i takie wyniki zapisujemy w tablicy. Przechodzimy po wszystkich elementach pierwotnej. tablicy i w wyniku powinnismy dostac dwu wymiarową tablice z wynikami poszukiwac w postaci true / false.


const binaryTables = [
    [ 1, 0, 1, 1 ],
    [ 0, 1, 1, 1 ],
    [ 1, 0, 1, 1 ]
];

const checkTables = function (table, searchElement){
    const result = table

    for (let x in result){
        for (let y in result[x]){
            result[x][y] = result[x][y]==searchElement?"True":"False";
        }
    }
    return result;
   
};


//checkTables(binaryTables, 1);

