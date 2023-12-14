let count = 0;
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
      ++count;
      break;
    case 3:
      ++count;
      break;
    case 4:
      ++count;
      break;
    case 5:
      ++count;
      break;
    case 6:
      ++count;
      break;
    case 7:
      count + 0;
      break;
    case 8:
      count + 0;
      break;
    case 9:
      count + 0;
      break;
    case "J":
      --count;
      break;
    case "Q":
      --count;
      break;
    case "K":
      --count;
      break;
    case "A":
      --count;
      break;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else if (count < 0 || count === 0) {
    return `${count} Hold`;
  } else {
    return "Change Me";
  }
  // Only change code above this line
}
console.log(count);
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
