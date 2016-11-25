var bucket_list = ["travel1", "travel2"];

bucket_list.push("travel3");
bucket_list.push("travel4");

bucket_list.unshift("travel5");
bucket_list.unshift("travel6");
console.log(bucket_list.length);

var dying_wish = bucket_list.pop();
console.log(bucket_list);

var do_it_now = bucket_list.shift();
console.log(bucket_list);
console.log(bucket_list.length);
