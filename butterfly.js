function butterfly(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "* ".repeat(i);
    let space = " ".repeat(2 * (n - i));
    console.log(stars + space+space + stars);
  }

  for (let i = n-1; i >= 1; i--) {
    let stars = "* ".repeat(i);
    let space = " ".repeat(2 * (n - i));
    console.log(stars + space + space + stars);
  }
}

butterfly(5);
