// переменные и типы данных
var subject = "Основы javaScript"
	,hours 	= 70
	,teacher
	,ITU_TITLE = "Basic"
	,price = 2000.55
	,colors = ["red", "yellow", "green"] // new Array()
	,students = {
		 "Иванов" : 5
		,"Петров" : 3
		,"Карпов" : 4
		}
	,clothes = {
		 "ASD123" : {"title" : "платье", 	"size" : "s,m", 	"price" : 1500}
		,"GHJ567" : {"title" : "юбка", 		"size" : "s,l", 	"price" : 2000}
		,"RTY532" : {"title" : "блуза", 	"size" : "m,xl", 	"price" : 800}
		}
	,id = "ASD123"
	,item = "title"
	;
console.info(subject, hours, "часов"); // console.log(); console.warning(); console.error();	
console.log("Учебный центр", ITU_TITLE);
console.log(subject + ": " + hours + " часов" + ".");
teacher = "Александра";
console.log("Преподаватель: ", teacher);
teacher = "Святослав";
console.log("Преподаватель: ", teacher);

console.info(colors);
console.log(colors[1]);
colors[2] = "blue";    //  переопределяется значение элемента массива
console.log(colors[2]);
colors[3] = "pink";
console.info(colors);
colors[10] = "orange";
console.info(colors);
console.log(colors.length);

console.info(students);
students["Иванов"] = 4;
students["Сидоров"] = 5;
console.info(students);

console.info(clothes);
console.log(clothes["ASD123"]);
console.log(clothes[id][item]);
console.log(clothes[id]["price"], "грн.");

console.log(clothes.GHJ567);  
//  по названию объекта и его свойству доступаемся до значения свойства
// программа считает количество элеметов так:
//  берет индекс последнего элемента массива и добавляет 1
// специальные значения: undefined, infinity, NaN

//  у объекта есть свойства, методы
//  свойства - это его характеристики
// методы - это действия объекта


/*
ДЗ:
создать переменные всех типов. Какие-то инициализировать, какие-то описать (не присваивать исходно в секции var значения)
переопределить значения переменных, у которых они были: был true - стал false...
присвоить значения тем переменным, которые были просто объявлены
создать 3 массива: простой, ассоциативный и многомерный ассоциативный

переопределять значения по индексу и ключу, добавлять новые элементы
*/

// 1. Создаются переменные всех типов.
//    Часть из них инициализированы, а часть - не инициализированы.

var phraseTitle = "Это - домашнее задание."

	, sectionTitle1 = "----------------  ПЕРЕМЕННЫЕ  ----------------"
	, taskTitle1 = "1. Создаются переменные всех типов (инициализированные и неинициализированные)."
	, taskTitle2 = "2. Инициализированные переменные меняют свои значения."
	, taskTitle3 = "3. Неинициализированым переменным присваиваются значения."
	
	, sectionTitle2 = "----------------  ПРОСТЫЕ  МАССИВЫ  ----------------"
	, taskArrayTitle1 = "1. Создается простой массив. "
	, taskArrayTitle2 = "2. Переопределяются значения элементов простого массива по индексу, добавляются новые элементы."
	, taskArrayTitle3 = "3. Методом push добавляется новый элемент массива."
	, taskArrayTitle4 = "4. С помощью свойства length определяется длинна массива:"
	, taskArrayTitle5 = "5. Методом pop удаляем последний элемент массива:"
	, taskArrayTitle6 = "6. Методом unshift добавляется 1-й (новый) элемент массива, и все остальные элементы массива сдвигаются соответственно:"
	, taskArrayTitle7 = "7. Методом shift удалятеся 1-й элемент массива, и все остальные элементы массива сдвигаются обратно соответственно:"
	, taskArrayTitle8 = "8. Выводится 5-й элемент массива по индексу:"
	, taskArrayTitle9 = "9. Методом splice удаляется 5-й элемент массива:"
	
	, sectionTitle3 = "----------------  АССОЦИАТИВНЫЕ  МАССИВЫ  ----------------"
	, taskAsArrTitle1 = "1. Создается ассоциативный массив."
	, taskAsArrTitle2 = "2. Переопределяются значения элементов ассоциативного массива по ключу, добавляются новые элементы."
	, taskAsArrTitle3 = "3."
	
	, sectionTitle4 = "----------------  МНОГОМЕРНЫЕ АССОЦИАТИВНЫЕ  МАССИВЫ  ----------------"
	, taskTitle8 = "1. Создается многомерный массив."
	, taskTitle9 = "2. Переопределяются значения многомерного массива по индексу и ключу, добавляются новые элементы."
	, blankPlace = " "
	, phraseHello = "Hello!"
	, phraseName = "My name is Vasia."
	, phraseToBeFilled
	, numberOne = 1
	, numberTen = 10
	, numberToBeFilled
	, flagPos1 = true
	, flagPos2 = false
	, someVariable
	, nullVar = null;

	console.log(blankPlace);
	console.log(phraseTitle);
	console.log(blankPlace);
	console.log(sectionTitle1);
	console.log(blankPlace);
	console.log(taskTitle1);
	console.log("A. Имеются переменные c такими значениями (значения): ", phraseHello, phraseName, phraseToBeFilled, numberOne, numberTen, numberToBeFilled, flagPos1, flagPos2, someVariable, nullVar);
	
	
// 2. Инициализированные переменные меняют свои значения.
//    Неинициализированым переменным присваиваются значения.

	phraseHello = "Yesss!";
	phraseName = "My name is Tomas.";
	phraseToBeFilled;
	numberOne = 5;
	numberTen = 21;
	numberToBeFilled;
	flagPos1 = false;
	flagPos2 = true;
	someVariable;
	nullVar = 7;

	console.log(blankPlace);
	console.log(taskTitle2);
	
	console.log("Инициализированные переменные поменяли свои значения: ", phraseHello, phraseName, phraseToBeFilled, numberOne, numberTen, numberToBeFilled, flagPos1, flagPos2, someVariable, nullVar);


// 3. Неинициализированым переменным присваиваются значения.

	console.log(blankPlace);
	console.log(taskTitle3);
	
	phraseToBeFilled = "Everything is OK :)))";
	numberToBeFilled = 57389;
	someVariable = true;

	console.log("Неинициализированные переменные получили значения: ", phraseToBeFilled, numberToBeFilled, someVariable);
	
	//  Массивы
	console.log(blankPlace);
	console.log(sectionTitle2);

	
// 1. Создается простой массив.
	console.log(blankPlace);
	console.log(taskArrayTitle1);
	
	var animals = ["dogs", "cats", "monkeys", "cows", "bears"];
	console.log(animals);


// 2. Переопределяются значения элементов простого массива по индексу, добавляются новые элементы.
	console.log(blankPlace);
	console.log(taskArrayTitle2);
	
	animals[0] = "camels";
	animals[1] = "pigs";
	animals[2] = "lions";
	animals[3] = "coalas";
	animals[4] = "elephants";
	animals[5] = "hippos";
	animals[6] = "zebras";
	animals[7] = "horses";
	
	console.log(animals);

//3. Методом push добавляется новый элемент массива.
	console.log(blankPlace);
	console.log(taskArrayTitle3);
	animals.push('gorillas');
	console.log(animals);

//4. С помощью свойства length определяется длинна массива.
	console.log(blankPlace);
	console.log(taskArrayTitle4, animals.length);
	
//5. Методом pop удаляем последний элемент массива.

	animals.pop();
	console.log(blankPlace);
	console.log(taskArrayTitle5, animals);

// 6. Методом unshift добавляется 1-й (новый) элемент массива, 
// и все остальные элементы массива сдвигаются соответственно:
	animals.unshift('turtle');
	console.log(blankPlace);
	console.log(taskArrayTitle6, animals);

//7. Методом shift удалятеся 1-й элемент массива,
// и все остальные элементы массива сдвигаются обратно соответственно:
	animals.shift();
	console.log(blankPlace);
	console.log(taskArrayTitle7, animals);

// 8. Выводится 5-й элемент массива по индексу:	
	console.log(blankPlace);
	console.log(taskArrayTitle8, animals[5]);
	
// 9. Методом splice удаляется 5-й элемент массива:
	animals.splice(5, 1);
	console.log(blankPlace);
	console.log(taskArrayTitle9, animals);

//   АССОЦИАТИВНЫЕ  МАССИВЫ

	console.log(blankPlace);
	console.log(sectionTitle3);

	
	
// 1. Создается ассоциативный массив.
	console.log(blankPlace);
	console.log(taskAsArrTitle1);
	
	var employees = {
		  "Mike" : "manager"
		, "John" : "director"
		, "Tom" : "assistant"
		, "Linda" : "marketer"
		, "Monika" : "HR"
		};
		
	console.log(employees);


// 2. Переопределяются значения элементов ассоциативного массива по ключу, добавляются новые элементы.
	console.log(blankPlace);
	console.log(taskAsArrTitle2);

	employees["Mike"] = "seller";
	employees["John"] = "driver";
	employees["Tom"] = "team lead";
	employees["Linda"] = "accountant";
	employees["Monika"] = "consultant";
	employees["Ted"] = "owner";
	employees["Anna"] = "shareholder";
	

	console.log(employees);
	
/*3. Методом push добавляется новый элемент ассоциативного массива.
	console.log(blankPlace);
	console.log(taskAsArrTitle3);
	//employees.push(["Anna"] = "Belinda");
	//employees["Mike"].seller = employees["Jack"];		
	console.log(employees);

	*/
	
	
	
	

//  -------------  многомерный ассоциативный массив  ----------------.
	console.log(blankPlace);
	console.log(sectionTitle4);

// 1. Создается многомерный массив.
	console.log(blankPlace);
	console.log(taskTitle8);

	var possessions = {
		 "car" : {"title" : "BMW", 	"color" : "black", 	"price" : 2500000}
		,"flat" : {"title" : "5 rooms", "color" : "green", 	"price" : 8000000}
		,"house" : {"title" : "2 floors", 	"color" : "white", 	"price" : 18000000}
		,"phone" : {"title" : "iphone", "color" : "silver", "price" : 30000}
		, "laptop" : {"title" : "MacAir", "color" : "grey", "price" : 40000}
		, "watch" : {}
		};

	console.log(possessions);

// 2. Переопределяются значения многомерного массива по индексу и ключу, добавляются новые элементы.
	console.log(blankPlace);
	console.log(taskTitle9);
	
	possessions["car"]["title"] = "Mazda";
	possessions["watch"]["title"] = "Timex";
	possessions["watch"]["color"] = "gold";
	possessions["watch"]["price"] = "20000";
	
	console.log(possessions);

	/*
	1. В упражении 9 при изменении марки машины, марка машины также поменялась и в упражнении 8. Так должно быть?
	2. В 8-м упражнении я создал пустой элемент массива (объект), который потом я заполнил, делая 9-е упражнение.
	3. Как добавлять новые элементы ассоциативного массива? Обязательно ли для этого создавать "пустышки" в 
	ассоциативном массиве?
	*/





