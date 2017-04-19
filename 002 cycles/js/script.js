var nums = [1, -5, 4, 8, -9]
			, i
			, blankSpace = " "
			, j
			, k
			, l = 0
			, m
			, n
			, t
			, q
			;
// i, j, k
	console.log('This is the 1-st task:');
	console.log('Print every second number.');
	
 	for(i=0; i<nums.length; i+=2){
		console.log("#" + i + " " + nums[i]);
	}

/*  	for(i=nums.length-1; i>=0; i--){
		console.log("#" + i + " " + nums[i]);
	}
 */	
	console.log(blankSpace);
	console.log('This is the 2-nd task.');
	console.log('Print only negative numbers:');
 
	for(i=0; i<nums.length; i++){
		if(nums[i] < 0) {
			console.log(nums[i]);
		}
	}
	
	console.log(blankSpace);
	console.log('This is the 3-d task.');
	console.log('Print only positive and zero modulo numbers:');
	
	for(i=0; i<nums.length; i++){
		if(nums[i] > 0 && nums[i]%2 === 0) { 
			console.log(nums[i]);
		}
	}

	
		for(i=0; i<nums.length; i++){
		if(nums[i] > 0 && !(nums[i]%2)) { 
			console.log(nums[i]);
		}
	}

	console.log(blankSpace);
	console.log(blankSpace);
	
	
	
	//   HOMEWORK
	
	console.log('  -------  This is the homework.  -----------  ');
	
	// Task 1: create an empty array and fill it with random numbers.
	console.log(blankSpace);
 	console.log('Task 1: create an empty array and fill it with random numbers.');

	var numbers = [], j;
	 	for(j=0; j<10; j++){
		random = Math.floor(Math.random() * 10);
		numbers.push(random);
	}
		console.log(numbers);

		
	// Task 2: print only even numbers
	
	console.log(blankSpace);
 	console.log('Task 2: print only even numbers');
	
	for(i=1; i<numbers.length; i++){
 		if(numbers[i]%2 == 0 && !(numbers[i] == 0)) { 
 		console.log(numbers[i]);
		}
	}


	// Task 3: вывести все числа, которые стоят на нечетных позициях (индекс)
	
	console.log(blankSpace);
 	console.log('Task 3: вывести все числа, которые стоят на нечетных позициях (индекс)');
	
	for(i=1; i<numbers.length; i+=2) {
		console.log(numbers[i]);
 	}
 
	// Task 4: print the sum of all array elements
	
	console.log(blankSpace);
 	console.log('Task 4: print the sum of all array elements');
	
	for(i=0; i<numbers.length; i++) {
		l = numbers[i] + l;
	}
	console.log(l);

	// Task 5: print the minimum number in array.
	
	console.log(blankSpace);
 	console.log('Task 5: print the minimum number in array.');
	
	t = numbers[0];
	
	for(i=0; i<numbers.length; i++) {
		if(t <= numbers[i]) { 
			t = t;
			}else{
			t = numbers[i];
		}
	}
	console.log(t);

	// Task 6: print the minimum number in array 2.
	
	console.log(blankSpace);
 	console.log('Task 5: print the minimum number in array 2.');

	q = numbers[0];
	
	for(i=0; i<numbers.length; i++) {
		q <= numbers[i] ? q = q : q = numbers[i];
		}
	console.log(q);

	
	
	
/*
создать пустой простой массив !
заполнить случайными значениями в цикле (10 итераций)  !

вывести числа в диапазоне  !

вывести все числа, которые стоят на нечетных позициях (индекс) !

вывести сумму всех чисел массива  !

вывести минимальное значение в массиве !



на следующее занятие  попарная перестановка элементов массива
*/	
/*
0: !0 -> true
другое число: !другое число -> false
*/	
// !(nums[i]%2) отсаток от деления на 2 - 0, то тру, то работает
// если !(nums[i]%2)

	
	